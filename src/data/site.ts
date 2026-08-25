const appointmentExternalUrl: string | null = null;
const clientPortalExternalUrl: string | null = null;

export const site = {
  publicUrl: 'https://brighthopetherapyllc.com',
  practice: {
    name: 'Bright Hope Therapy',
    type: 'Private counseling practice',
    city: 'Meridian',
    state: 'Idaho',
    serviceArea: ['Meridian', 'Boise', 'Eagle', 'Nampa', 'Kuna', 'Star', 'Treasure Valley'],
  },
  clinician: {
    name: 'Lisa Bright',
    credentials: 'LCPC',
    title: 'Licensed Clinical Professional Counselor',
  },
  contact: {
    email: null,
    phone: null,
    streetAddress: null,
    officeHours: null,
  },
  links: {
    appointment: {
      href: appointmentExternalUrl ?? '/contact/?intent=appointment',
      external: appointmentExternalUrl !== null,
    },
    clientPortal: {
      href: clientPortalExternalUrl ?? '/contact/?intent=portal',
      external: clientPortalExternalUrl !== null,
    },
  },
} as const;

// Existing component imports remain stable; both values resolve from the single configuration above.
export const appointmentUrl = site.links.appointment.href;
export const clientPortalUrl = site.links.clientPortal.href;
export const practice = site.practice;

// Pairs target="_blank" with rel="noopener noreferrer" so the two can never be set separately.
export function externalLinkAttrs(target?: '_blank'): { target?: '_blank'; rel?: 'noopener noreferrer' } {
  return target === '_blank' ? { target, rel: 'noopener noreferrer' } : {};
}
