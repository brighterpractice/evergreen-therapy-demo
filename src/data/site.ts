export const practice = {
  name: 'Evergreen Counseling Collective',
  shortName: 'Evergreen Counseling',
  city: 'Fort Collins',
  state: 'Colorado',
  stateAbbreviation: 'CO',
  address: 'Fort Collins, Colorado',
  phone: '(970) 555-0148',
  email: 'hello@example.com',
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
