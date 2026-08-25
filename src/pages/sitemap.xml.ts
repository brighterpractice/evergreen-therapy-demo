import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { approaches } from '../data/approaches';
import { site as siteConfig } from '../data/site';

const baseRoutes = [
  '/',
  '/about/',
  '/about/maya-bennett/',
  '/services/',
  '/approaches/',
  '/contact/',
  '/privacy/',
  '/terms/',
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL(siteConfig.publicUrl);

  const routes = new Set([
    ...baseRoutes,
    ...services
      .filter(
        (service) =>
          service.published &&
          service.slug !== 'emdr-therapy'
      )
      .map((service) => service.href),
    ...approaches.map((approach) => approach.href),
  ]);

  const urls = [...routes]
    .map(
      (route) =>
        `  <url><loc>${new URL(route, base).href}</loc></url>`
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      `${urls}\n` +
      `</urlset>\n`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    }
  );
};
