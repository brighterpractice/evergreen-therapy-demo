export const practice = {
  name: 'Evergreen Counseling Collective',
  shortName: 'Evergreen Counseling',
  description:
    'A fictional behavioral health group practice website created as a demonstration of custom therapy-practice website design and management.',
  city: 'Fort Collins',
  state: 'Colorado',
  stateAbbreviation: 'CO',
  phone: '(970) 555-0148',
  email: 'hello@example.com',
  address: 'Fort Collins, Colorado',
};

export const appointmentUrl = '/contact/';
export const clientPortalUrl = '#';

export const externalLinkAttrs = () => ({
  target: '_blank',
  rel: 'noopener noreferrer',
});

export const site = {
  publicUrl: 'https://evergreen-counseling-demo.example',
  practice,
  clinician: {
    name: 'Maya Bennett',
    credentials: 'LPC',
    title: 'Licensed Professional Counselor',
  },
};
