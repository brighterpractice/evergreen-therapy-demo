import type { APIRoute } from 'astro';
import { site as siteConfig } from '../data/site';

const routes = [
  '/',
  '/about/',
  '/about/maya-bennett/',
  '/services/',
  '/services/trauma-ptsd/',
  '/services/anxiety-stress/',
  '/contact/',
  '/privacy/',
  '/terms/',
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL(siteConfig.publicUrl);

  const urls = routes
    .map((route) => `  <url><loc>${new URL(route, base).href}</loc></url>`)
    .join('\n');

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls +
    '\n</urlset>\n';

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
