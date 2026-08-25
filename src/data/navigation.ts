import { services } from './services';
import { approaches } from './approaches';

export const navigation = [
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'About the Practice', href: '/about/' },
      { label: 'Lisa Bright, LCPC', href: '/about/lisa-bright/' },
    ],
  },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Services overview', href: '/services/' },
      ...services
        .filter(
          (service) =>
            service.published && service.slug !== 'emdr-therapy'
        )
        .map((service) => ({
          label: service.title,
          href: service.href,
        })),
    ],
  },
  {
    label: 'Approaches',
    href: '/approaches/',
    children: [
      { label: 'Approaches overview', href: '/approaches/' },
      ...approaches.map((approach) => ({
        label: approach.shortTitle,
        href: approach.href,
      })),
    ],
  },
  {
    label: 'Getting Started',
    href: '/contact/',
    children: [
      { label: 'New Clients', href: '/contact/#new-clients' },
      { label: 'FAQ', href: '/contact/#faq' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
] as const;
