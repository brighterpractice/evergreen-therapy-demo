import type { APIRoute } from 'astro';
import { site as siteConfig } from '../data/site';

const routes = [
  '/',
  '/about/',
  '/about/maya-bennett/',
  '/services/',
  '/services/individual-therapy/',
  '/services/trauma-ptsd/',
  '/services/anxiety-stress/',
  '/services/grief-loss/',
  '/services/depression-emotional-disconnection/',
  '/services/chronic-pain-chronic-illness/',
  '/services/life-transitions/',
  '/services/relationship-concerns/',
  '/services/self-esteem-personal-growth/',
  '/approaches/',
  '/approaches/internal-family-systems/',
  '/approaches/somatic-experiencing/',
  '/approaches/emotionally-focused-therapy/',
  '/approaches/mindfulness-based-therapy/',
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
