# Evergreen Counseling Collective Demo Deployment

Evergreen Counseling Collective is a fictional behavioral-health practice website used to demonstrate custom website design and management services.

The practice, clinicians, contact information, and location presented by this project are fictional.

## Current canonical origin

During development the site uses the reserved demonstration origin:

https://evergreen-counseling-demo.example

Before publishing the demo publicly, replace this value with the actual production domain in:

- `astro.config.mjs`
- `src/data/site.ts`
- `public/robots.txt`
- `scripts/quality-check.mjs`

Then rebuild and run the quality checks.

## Build

Run:

    npm install
    npm run build

The generated static site is written to:

    dist/

## Hosting

The static output can be deployed to Cloudflare Pages or another static hosting provider.

Do not configure search-engine indexing against the `.example` development address. Use the final public demo domain before submitting a sitemap or configuring Search Console.
