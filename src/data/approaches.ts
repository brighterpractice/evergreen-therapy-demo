export interface Approach {
  slug: string;
  title: string;
  seoTitle?: string;
  shortTitle: string;
  href: string;
  description: string;
  cardDescription: string;
  hero: string;
  whatItIsTitle: string;
  whatItIs: string[];
  sessionTitle: string;
  session: string[];
  considerationsTitle: string;
  considerations: string[];
  related: { label: string; href: string }[];
}

export const approaches: Approach[] = [
  {
    slug: 'emdr',
    title: 'EMDR Therapy',
    shortTitle: 'EMDR',
    href: '/approaches/emdr/',
    description:
      'Learn about EMDR therapy with Lisa Bright, LCPC, an EMDRIA Certified Therapist in Meridian, Idaho.',
    cardDescription:
      'A structured approach that may help some clients work with distressing experiences and the responses connected with them.',
    hero:
      'A structured therapy approach for working with distressing experiences and the reactions connected with them.',
    whatItIsTitle: 'A structured way of working with distressing experiences.',
    whatItIs: [
      'EMDR stands for Eye Movement Desensitization and Reprocessing. It is a structured therapy approach that can include bilateral stimulation, such as guided eye movements or alternating taps, while working with distressing experiences and related thoughts, emotions, or body responses.',
      'Lisa is an EMDRIA Certified Therapist. Whether EMDR is used depends on the concern being addressed, readiness for the work, current circumstances, and what feels manageable.',
    ],
    sessionTitle: 'Preparation and pacing are part of the work.',
    session: [
      'EMDR does not necessarily begin by immediately revisiting the most difficult material. Preparation may include understanding current concerns, identifying resources, and discussing how the process works.',
      'EMDR may be one part of counseling rather than the entire therapy process.',
    ],
    considerationsTitle: 'EMDR is selected collaboratively.',
    considerations: [
      'Not every client or concern requires EMDR.',
      'The pace can be adjusted according to readiness and current circumstances.',
      'Other therapeutic approaches may be used alongside EMDR when helpful.',
    ],
    related: [
      { label: 'Trauma & PTSD', href: '/services/trauma-ptsd/' },
      { label: 'About Lisa', href: '/about/lisa-bright/' },
    ],
  },

  {
    slug: 'internal-family-systems',
    title: 'Internal Family Systems (IFS)',
    seoTitle: 'IFS Therapy | Meridian, ID',
    shortTitle: 'IFS',
    href: '/approaches/internal-family-systems/',
    description:
      'Learn how Lisa Bright may incorporate Internal Family Systems concepts into individual counseling in Meridian, Idaho.',
    cardDescription:
      'A framework for noticing different internal parts and protective patterns with curiosity rather than judgment.',
    hero:
      'A framework for understanding different internal reactions, protective patterns, and conflicting feelings with curiosity.',
    whatItIsTitle: 'Different parts of us can respond in different ways.',
    whatItIs: [
      'Internal Family Systems, often called IFS, offers a way to notice different parts of a person’s internal experience. One part may want change while another feels cautious; another may criticize, avoid, please, control, or stay alert in an effort to protect.',
      'Rather than immediately trying to eliminate these reactions, IFS work can help explore what they may be protecting against, what they need, and how they developed.',
    ],
    sessionTitle: 'The work can begin with noticing what is happening now.',
    session: [
      'Lisa may help clients notice thoughts, emotions, physical cues, or internal reactions that seem to pull in different directions and explore what those responses may be trying to accomplish.',
      'The work may involve understanding protective patterns and developing a less adversarial relationship with reactions that have felt frustrating, confusing, or difficult to change.',
    ],
    considerationsTitle: 'IFS is one framework among several.',
    considerations: [
      'Clients do not need to use IFS terminology for the work to be useful.',
      'The approach can be adapted to the individual and the focus of counseling.',
      'Lisa may combine IFS concepts with other approaches when that better fits the client.',
    ],
    related: [
      { label: 'Trauma & PTSD', href: '/services/trauma-ptsd/' },
      { label: 'Relationship Concerns', href: '/services/relationship-concerns/' },
      { label: 'Self-Esteem & Personal Growth', href: '/services/self-esteem-personal-growth/' },
    ],
  },

  {
    slug: 'somatic-experiencing',
    title: 'Somatic Experiencing & Body-Informed Therapy',
    seoTitle: 'Somatic Experiencing Therapy | Meridian, ID',
    shortTitle: 'Somatic Experiencing',
    href: '/approaches/somatic-experiencing/',
    description:
      'Learn how Lisa Bright may incorporate Somatic Experiencing and body-informed approaches into individual counseling in Meridian, Idaho.',
    cardDescription:
      'An approach that includes attention to physical sensations and body responses alongside thoughts and emotions.',
    hero:
      'An approach that includes physical sensations and nervous-system responses alongside thoughts, emotions, and experiences.',
    whatItIsTitle: 'Emotional experiences can also have a physical dimension.',
    whatItIs: [
      'Stress, emotion, and difficult experiences can show up physically through tension, breathing changes, restlessness, numbness, tightness, changes in energy, or other body sensations.',
      'Lisa may incorporate Somatic Experiencing and other body-informed practices to notice these responses, understand what seems to activate or settle them, and include the body as one source of information during counseling.',
    ],
    sessionTitle: 'Body awareness is introduced gently.',
    session: [
      'When it is useful, Lisa may invite attention to physical sensations, movement, breathing, posture, or changes in the body while discussing an experience.',
      'Clients remain in control of the pace. Attention to body sensations can be brief, adjusted, or set aside when it does not feel useful.',
    ],
    considerationsTitle: 'The body is one source of information.',
    considerations: [
      'Body-informed therapy does not assume that every concern has a physical cause or that every client needs to focus on body sensations.',
      'Body awareness can be combined with conversation, reflection, EMDR, IFS, mindfulness, or other counseling approaches.',
      'The focus remains on what is useful and appropriate for the individual client.',
    ],
    related: [
      { label: 'Trauma & PTSD', href: '/services/trauma-ptsd/' },
      { label: 'Anxiety & Stress', href: '/services/anxiety-stress/' },
      { label: 'About Lisa', href: '/about/lisa-bright/' },
    ],
  },

  {
    slug: 'emotionally-focused-therapy',
    title: 'Emotionally Focused Therapy (EFT) for Individuals',
    seoTitle: 'EFT for Individuals in Meridian, ID',
    shortTitle: 'EFT',
    href: '/approaches/emotionally-focused-therapy/',
    description:
      'Learn how Lisa Bright may use Emotionally Focused Therapy principles in individual counseling for adults in Meridian, Idaho.',
    cardDescription:
      'An emotion- and attachment-focused approach for understanding patterns that can affect connection and relationships.',
    hero:
      'An approach for understanding emotional responses, attachment needs, and recurring patterns in important relationships.',
    whatItIsTitle: 'Emotions can provide useful information about connection and protection.',
    whatItIs: [
      'Emotionally Focused Therapy, or EFT, pays close attention to emotional experience and patterns involving closeness, safety, conflict, vulnerability, attachment, and connection.',
      'At Bright Hope Therapy, Lisa uses these concepts within individual counseling. Bright Hope Therapy is not offering couples therapy through this service.',
    ],
    sessionTitle: 'The work may explore patterns beneath the surface.',
    session: [
      'Lisa may help clients notice recurring emotional responses in relationships, identify needs beneath those reactions, and understand what happens when connection feels uncertain, unsafe, or difficult.',
      'The work may include present relationships as well as earlier experiences that influenced expectations about closeness, trust, conflict, or emotional safety.',
    ],
    considerationsTitle: 'EFT principles can be integrated with individual therapy.',
    considerations: [
      'Relationship concerns can be explored in individual counseling without another person participating in the session.',
      'The goal is not to assign blame for relationship difficulties.',
      'Other approaches may be incorporated depending on the client and the focus of therapy.',
    ],
    related: [
      { label: 'Relationship Concerns', href: '/services/relationship-concerns/' },
      { label: 'Individual Therapy', href: '/services/individual-therapy/' },
      { label: 'About Lisa', href: '/about/lisa-bright/' },
    ],
  },

  {
    slug: 'mindfulness-based-therapy',
    title: 'Mindfulness-Informed Therapy',
    seoTitle: 'Mindfulness-Informed Therapy | Meridian, ID',
    shortTitle: 'Mindfulness',
    href: '/approaches/mindfulness-based-therapy/',
    description:
      'Learn how Lisa Bright may incorporate mindfulness, meditation experience, and body awareness into individual counseling in Meridian, Idaho.',
    cardDescription:
      'Present-moment awareness practices that can support noticing thoughts, emotions, and body cues with greater clarity.',
    hero:
      'Using present-moment awareness to notice thoughts, emotions, sensations, and reactions more clearly.',
    whatItIsTitle: 'Mindfulness can create space around an experience.',
    whatItIs: [
      'Mindfulness involves intentionally noticing present-moment experience. In counseling, that may include thoughts, emotions, physical sensations, impulses, breathing, or patterns of attention.',
      'Lisa brings more than 20 years of experience teaching yoga and meditation, holds the E-RYT 500 credential, and has additional training in iRest Yoga Nidra.',
    ],
    sessionTitle: 'Mindfulness is adapted to the person.',
    session: [
      'Mindfulness in counseling does not require sitting silently or trying to empty the mind. It may involve briefly noticing a reaction, observing a body sensation, paying attention to breathing, or slowing down enough to identify what is happening.',
      'Mindfulness practices can be brief and can be adjusted according to comfort, preferences, and the focus of the session.',
    ],
    considerationsTitle: 'Mindfulness can be used when it supports the work.',
    considerations: [
      'Clients do not need prior meditation experience.',
      'Mindfulness practices can be brief and practical.',
      'They may be combined with other therapeutic approaches rather than used as a stand-alone method.',
    ],
    related: [
      { label: 'Anxiety & Stress', href: '/services/anxiety-stress/' },
      { label: 'Grief & Loss', href: '/services/grief-loss/' },
      { label: 'Self-Esteem & Personal Growth', href: '/services/self-esteem-personal-growth/' },
    ],
  },
];
