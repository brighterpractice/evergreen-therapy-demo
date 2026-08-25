(() => {
  'use strict';

  const COLLECTOR_BASE =
    'https://analytics.brightersites.app/api/analytics/events';

  const SITE_KEY =
    'bs_live_25ef5200b492dd6f0c938e1911a49d0b16d413bb1b1c709b';

  const COLLECTOR =
    `${COLLECTOR_BASE}?site_key=${encodeURIComponent(SITE_KEY)}`;

  const SESSION_KEY = 'bht_analytics_session_v1';
  const OPTOUT_KEY = 'bht_analytics_opt_out_v1';

  const INACTIVITY_MS = 30 * 60 * 1000;
  const ABSOLUTE_MS = 24 * 60 * 60 * 1000;

  const privacyDisabled = () => {
    try {
      const dnt = String(
        navigator.doNotTrack ||
        window.doNotTrack ||
        navigator.msDoNotTrack ||
        ''
      ).toLowerCase();

      const meta = document.querySelector(
        'meta[name="brighter-sites-analytics"]'
      );

      return (
        navigator.globalPrivacyControl === true ||
        dnt === '1' ||
        dnt === 'yes' ||
        window.brighterSitesAnalyticsOptOut === true ||
        meta?.getAttribute('content')?.toLowerCase() === 'off' ||
        sessionStorage.getItem(OPTOUT_KEY) === '1'
      );
    } catch {
      return true;
    }
  };

  if (privacyDisabled()) return;

  const uuid = () => {
    if (globalThis.crypto?.randomUUID) {
      return globalThis.crypto.randomUUID();
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      (char) => {
        const value = Math.floor(Math.random() * 16);
        const nibble =
          char === 'x'
            ? value
            : (value & 0x3) | 0x8;

        return nibble.toString(16);
      }
    );
  };

  const now = () => Date.now();

  const saveSession = (session) => {
    try {
      sessionStorage.setItem(
        SESSION_KEY,
        JSON.stringify(session)
      );
      return true;
    } catch {
      return false;
    }
  };

  const newSession = () => {
    const timestamp = now();

    const session = {
      id: uuid(),
      createdAt: timestamp,
      lastActivityAt: timestamp,
      entrySent: false,
    };

    return saveSession(session)
      ? session
      : null;
  };

  const readSession = () => {
    try {
      const parsed = JSON.parse(
        sessionStorage.getItem(SESSION_KEY) || 'null'
      );

      const timestamp = now();

      if (
        !parsed ||
        typeof parsed.id !== 'string' ||
        typeof parsed.createdAt !== 'number' ||
        typeof parsed.lastActivityAt !== 'number' ||
        typeof parsed.entrySent !== 'boolean' ||
        timestamp - parsed.lastActivityAt >= INACTIVITY_MS ||
        timestamp - parsed.createdAt >= ABSOLUTE_MS
      ) {
        return newSession();
      }

      parsed.lastActivityAt = timestamp;

      return saveSession(parsed)
        ? parsed
        : null;
    } catch {
      return newSession();
    }
  };

  const pagePath = () => {
    const value = window.location.pathname || '/';

    if (
      !value.startsWith('/') ||
      value.startsWith('//') ||
      value.includes('?') ||
      value.includes('#') ||
      value.includes('\\')
    ) {
      return '/';
    }

    return value.slice(0, 256);
  };

  const getDeviceCategory = () => {
    try {
      if (
        window.matchMedia('(max-width: 767px)').matches
      ) {
        return 'mobile';
      }

      if (
        window.matchMedia('(max-width: 1024px)').matches
      ) {
        return 'tablet';
      }

      return 'desktop';
    } catch {
      return 'unknown';
    }
  };

  const getReferrerHost = () => {
    if (!document.referrer) return null;

    try {
      const host = new URL(
        document.referrer
      ).hostname.toLowerCase();

      if (!host || host === window.location.hostname) {
        return null;
      }

      return host.slice(0, 253);
    } catch {
      return null;
    }
  };

  const send = (payload, beacon = false) => {
    if (privacyDisabled()) {
      return Promise.resolve();
    }

    const session = readSession();

    if (!session) {
      return Promise.resolve();
    }

    const body = JSON.stringify({
      site_key: SITE_KEY,
      event_id: uuid(),
      session_id: session.id,
      page_path: pagePath(),
      ...payload,
    });

    if (
      beacon &&
      typeof navigator.sendBeacon === 'function'
    ) {
      try {
        const blob = new Blob(
          [body],
          { type: 'application/json' }
        );

        if (navigator.sendBeacon(COLLECTOR, blob)) {
          return Promise.resolve();
        }
      } catch {
        // Fall through to fetch.
      }
    }

    return fetch(COLLECTOR, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      keepalive: true,
      referrerPolicy: 'no-referrer',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }).catch(() => {});
  };

  const eventForLink = (link) => {
    const explicit = link.dataset.track || '';
    const href = link.getAttribute('href') || '';

    if (explicit === 'request-appointment') {
      return {
        eventName: 'appointment_click',
        extra: {},
      };
    }

    if (explicit === 'client-portal') {
      return {
        eventName: 'client_portal_click',
        extra: {},
      };
    }

    if (/^tel:/i.test(href)) {
      return {
        eventName: 'phone_click',
        extra: {},
      };
    }

    if (/^mailto:/i.test(href)) {
      return {
        eventName: 'email_click',
        extra: {},
      };
    }

    try {
      const url = new URL(
        link.href,
        window.location.href
      );

      const serviceMatch =
        explicit.match(
          /^service-([a-z0-9][a-z0-9_-]{0,79})$/
        );

      if (
        serviceMatch &&
        url.origin === window.location.origin &&
        url.pathname.startsWith('/services/')
      ) {
        return {
          eventName: 'service_click',
          extra: {
            content_key: serviceMatch[1],
          },
        };
      }

      const normalizedPath =
        url.pathname.replace(/\/$/, '') || '/';

      if (
        url.origin === window.location.origin &&
        normalizedPath === '/contact' &&
        url.searchParams.get('intent')?.toLowerCase() ===
          'appointment'
      ) {
        return {
          eventName: 'appointment_click',
          extra: {},
        };
      }

      if (
        explicit === 'outbound' &&
        /^https?:$/.test(url.protocol) &&
        url.hostname !== window.location.hostname
      ) {
        return {
          eventName: 'outbound_click',
          extra: {
            destination_host:
              url.hostname.toLowerCase().slice(0, 253),
          },
        };
      }
    } catch {
      // Ignore malformed links.
    }

    return null;
  };

  // Do not send the requested URL from a 404 page.
  // The 404 page is currently the site's only noindex page.
  const noindex =
    document.querySelector(
      'meta[name="robots"][content*="noindex"]'
    ) !== null;

  if (!noindex) {
    const session = readSession();

    if (session) {
      const isEntry = !session.entrySent;

      session.entrySent = true;
      session.lastActivityAt = now();

      if (saveSession(session)) {
        send({
          event_name: 'page_view',
          is_entry: isEntry,
          referrer_host: getReferrerHost(),
          device_category: getDeviceCategory(),
        });
      }
    }
  }

  document.addEventListener(
    'click',
    (event) => {
      if (privacyDisabled()) return;

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest('a[href]');

      if (!link) return;

      const analyticsEvent = eventForLink(link);

      if (!analyticsEvent) return;

      const {
        eventName,
        extra,
      } = analyticsEvent;

      if (eventName === 'appointment_click') {
        const url = new URL(
          link.href,
          window.location.href
        );

        const normalClick =
          event.button === 0 &&
          !event.metaKey &&
          !event.ctrlKey &&
          !event.shiftKey &&
          !event.altKey;

        if (
          url.origin === window.location.origin &&
          normalClick
        ) {
          event.preventDefault();
          event.stopImmediatePropagation();

          send(
            {
              event_name: eventName,
              ...extra,
            },
            true
          )
            .catch(() => {})
            .finally(() => {
              window.location.assign(url.href);
            });

          return;
        }
      }

      send(
        {
          event_name: eventName,
          ...extra,
        },
        true
      );
    },
    { capture: true }
  );
})();
