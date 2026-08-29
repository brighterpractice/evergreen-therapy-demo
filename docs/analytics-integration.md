# Website Intelligence integration

Set `PUBLIC_BS_ANALYTICS_SITE_KEY` to this site's unique `bs_live_…` property key. If the value is missing or invalid, analytics does not load.

The default collector is `https://analytics.brightersites.app/api/analytics/events`. `PUBLIC_BS_ANALYTICS_COLLECTOR` may override it for intentional testing.

Do not reuse another site's analytics key. The tracker sends privacy-minimized event fields and records external links only by destination hostname, not full URL or query string.
