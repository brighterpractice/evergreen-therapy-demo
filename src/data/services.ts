export interface Service {
 slug: string;
 title: string;
 href: string;
 description: string;
 homeDescription?: string;
 showOnHome?: boolean;
 published: boolean;
 hasDetailPage?: boolean;
}

export const services: Service[] = [
 {
  slug: 'individual-therapy',
  title: 'Individual Therapy',
  href: '/services/individual-therapy/',
  description: 'One-to-one counseling with time to slow down, notice what has been building, and decide what deserves care.',
  published: true,
 },
 {
  slug: 'trauma-ptsd',
  title: 'Trauma & Difficult Experiences',
  href: '/services/trauma-ptsd/',
  description: 'Support when old experiences still leave you braced, distant, overwhelmed, or unable to fully settle in the present.',
  homeDescription: 'A steadier place to work with experiences that still echo into daily life.',
  showOnHome: true,
  published: true,
  hasDetailPage: true,
 },
 {
  slug: 'anxiety-stress',
  title: 'Anxiety & Stress',
  href: '/services/anxiety-stress/',
  description: 'Counseling for worry, pressure, overthinking, tension, and the feeling that your mind rarely gets a chance to quiet down.',
  homeDescription: 'Space to understand what keeps the alarm switched on and what helps it soften.',
  showOnHome: true,
  published: true,
  hasDetailPage: true,
 },
 {
  slug: 'grief-loss',
  title: 'Grief & Loss',
  href: '/services/grief-loss/',
  description: 'Support for loss and the way it can quietly reshape routines, relationships, identity, and the feel of everyday life.',
  homeDescription: 'Room for grief, adjustment, and the changes that follow something meaningful being lost.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'depression-emotional-disconnection',
  title: 'Depression & Emotional Disconnection',
  href: '/services/depression-emotional-disconnection/',
  description: 'Counseling when life feels muted, distant, exhausting, or harder to engage with than it used to.',
  homeDescription: 'A place to notice what has gone quiet and what might help you reconnect.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'chronic-pain-chronic-illness',
  title: 'Chronic Pain & Chronic Illness Counseling',
  href: '/services/chronic-pain-chronic-illness/',
  description: 'Emotional support for the adjustment, uncertainty, grief, and relationship changes that can accompany ongoing health concerns.',
  published: true,
 },
 {
  slug: 'life-transitions',
  title: 'Life Transitions',
  href: '/services/life-transitions/',
  description: 'Support while roles, relationships, work, identity, or direction are changing and the new shape of life is still settling in.',
  homeDescription: 'A quieter place to orient yourself while something important is changing.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'relationship-concerns',
  title: 'Relationship Concerns',
  href: '/services/relationship-concerns/',
  description: 'Individual counseling for communication, boundaries, conflict, distance, and patterns that keep showing up in important relationships.',
  homeDescription: 'Space to understand the relationship patterns that feel difficult to shift on your own.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'self-esteem-personal-growth',
  title: 'Self-Esteem & Personal Growth',
  href: '/services/self-esteem-personal-growth/',
  description: 'A reflective place to explore self-trust, boundaries, values, confidence, and the kind of growth that feels meaningful to you.',
  published: true,
 },
];

export const homepageServices = services.filter((service) => service.showOnHome);
