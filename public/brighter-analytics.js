(() => {
  "use strict";
  try {
    const configNode = document.querySelector("script[data-bs-analytics-config]");
    if (!configNode) return;

    let config;
    try { config = JSON.parse(configNode.textContent || ""); } catch { return; }
    if (!config || typeof config.collectorUrl !== "string" || typeof config.siteKey !== "string" || typeof config.scriptVersion !== "string") return;

    const SESSION_KEY = "bs_analytics_session_v1";
    const OPTOUT_KEY = "bs_analytics_opt_out_v1";
    const INACTIVITY_MS = 30 * 60 * 1000;
    const ABSOLUTE_MS = 24 * 60 * 60 * 1000;
    const allowedEvents = new Set(["service_click", "appointment_click", "client_portal_click", "phone_click", "email_click", "outbound_click"]);

    const privacyDisabled = () => {
      try {
        const dnt = String(navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack || "").toLowerCase();
        const meta = document.querySelector('meta[name="brighter-sites-analytics"]');
        return navigator.globalPrivacyControl === true || dnt === "1" || dnt === "yes" ||
          window.brighterSitesAnalyticsOptOut === true || meta?.getAttribute("content")?.toLowerCase() === "off" ||
          sessionStorage.getItem(OPTOUT_KEY) === "1";
      } catch { return true; }
    };
    if (privacyDisabled()) return;

    const uuid = () => {
      try { return crypto.randomUUID(); } catch { return null; }
    };
    const now = () => Date.now();
    const saveSession = (session) => {
      try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(session)); return true; } catch { return false; }
    };
    const newSession = () => {
      const id = uuid();
      if (!id) return null;
      const timestamp = now();
      const session = { id, createdAt: timestamp, lastActivityAt: timestamp, entrySent: false };
      return saveSession(session) ? session : null;
    };
    const readSession = () => {
      try {
        const parsed = JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
        const timestamp = now();
        if (!parsed || typeof parsed.id !== "string" || typeof parsed.createdAt !== "number" ||
            typeof parsed.lastActivityAt !== "number" || typeof parsed.entrySent !== "boolean" ||
            timestamp - parsed.lastActivityAt >= INACTIVITY_MS || timestamp - parsed.createdAt >= ABSOLUTE_MS) {
          return newSession();
        }
        parsed.lastActivityAt = timestamp;
        return saveSession(parsed) ? parsed : null;
      } catch { return newSession(); }
    };

    const pathname = () => {
      const value = window.location.pathname || "/";
      return value.startsWith("/") && !value.startsWith("//") ? value.slice(0, 256) : "/";
    };
    const referrerHost = () => {
      if (!document.referrer) return null;
      try { return new URL(document.referrer).hostname.toLowerCase().slice(0, 253) || null; } catch { return null; }
    };
    const deviceCategory = () => {
      try {
        if (window.matchMedia("(max-width: 767px)").matches) return "mobile";
        if (window.matchMedia("(max-width: 1024px)").matches) return "tablet";
        return "desktop";
      } catch { return "unknown"; }
    };
    const endpoint = config.collectorUrl.replace(/\/$/, "") + "/api/analytics/events?site_key=" + encodeURIComponent(config.siteKey);

    const deliver = (payload) => {
      const body = JSON.stringify(payload);
      try {
        if (typeof navigator.sendBeacon === "function" && navigator.sendBeacon(endpoint, new Blob([body], { type: "application/json" }))) return;
      } catch {}
      const attempt = (retry) => {
        try {
          fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true, credentials: "omit", referrerPolicy: "no-referrer" })
            .catch(() => { if (!retry) window.setTimeout(() => attempt(true), 250); });
        } catch { if (!retry) window.setTimeout(() => attempt(true), 250); }
      };
      attempt(false);
    };

    const send = (eventName, extra) => {
      if (privacyDisabled()) return;
      const session = readSession();
      const eventId = uuid();
      if (!session || !eventId) return;
      deliver({ site_key: config.siteKey, event_id: eventId, session_id: session.id, event_name: eventName, page_path: eventName === "404_view" ? "/404" : pathname(), ...extra });
    };

    const is404 = document.documentElement.getAttribute("data-bs-analytics-page") === "404";
    const session = readSession();
    if (session) {
      const isEntry = !session.entrySent;
      session.entrySent = true;
      session.lastActivityAt = now();
      if (saveSession(session)) {
        send(is404 ? "404_view" : "page_view", { is_entry: isEntry, referrer_host: referrerHost(), device_category: deviceCategory() });
      }
    }

    const inferredEvent = (link) => {
      const explicit = link.getAttribute("data-bs-analytics-event");
      if (allowedEvents.has(explicit)) return explicit;
      try {
        const url = new URL(link.href, window.location.href);
        const sameOrigin = url.origin === window.location.origin;
        const normalizedPath = url.pathname.replace(/\/$/, "") || "/";
        const appointmentIntent = url.searchParams.get("intent")?.toLowerCase() === "appointment";
        if (sameOrigin && normalizedPath === "/contact" && appointmentIntent) return "appointment_click";
      } catch {}
      return null;
    };

    document.addEventListener("click", (clickEvent) => {
      try {
        if (privacyDisabled()) return;
        const target = clickEvent.target;
        const link = target && typeof target.closest === "function" ? target.closest("a") : null;
        if (!link) return;
        const eventName = inferredEvent(link);
        if (!eventName) return;
        if (eventName === "service_click") {
          const contentKey = link.getAttribute("data-bs-content-key");
          if (!contentKey || !/^[a-z0-9][a-z0-9_-]{0,79}$/.test(contentKey)) return;
          send(eventName, { content_key: contentKey });
          return;
        }
        if (eventName === "outbound_click") {
          try {
            const destinationHost = new URL(link.href, window.location.href).hostname.toLowerCase();
            if (!destinationHost) return;
            send(eventName, { destination_host: destinationHost.slice(0, 253) });
          } catch {}
          return;
        }
        send(eventName, {});
      } catch {}
    }, { capture: true, passive: true });
  } catch {}
})();