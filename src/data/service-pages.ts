export interface ServicePageContent {
  title: string;
  description: string;
  hero: string;
  leadTitle: string;
  lead: string[];
  experiencesTitle: string;
  experiencesIntro?: string;
  experiences: string[];
  approachTitle: string;
  approach: string[];
  wholePersonTitle?: string;
  wholePerson?: string[];
  related?: { slug: string; label: string }[];
  approachLinks?: { href: string; label: string }[];
}

export const servicePages: Record<string, ServicePageContent> = {
  'individual-therapy': {
    title: 'Individual Therapy in Fort Collins, Colorado',
    description: 'Individual counseling with Maya Bennett, LPC, for adults seeking thoughtful, whole-person support in Fort Collins, Colorado.',
    hero: 'A private space to understand what you are carrying and what you want to be different.',
    leadTitle: 'You can begin wherever you are.',
    lead: ['Some people come to therapy with a clear concern. Others simply know that something feels difficult, unsettled, or disconnected and are not yet sure how to describe it.', 'Individual therapy gives you dedicated time to look at what is happening now, understand patterns that may be involved, and consider what you would like to be different.'],
    experiencesTitle: 'People may seek individual therapy when they are experiencing',
    experiences: ['Worry, stress, or a persistent sense of pressure', 'Effects of difficult or traumatic experiences', 'Grief, loss, or an important life change', 'Relationship patterns, boundary concerns, or conflict', 'Low mood, emotional distance, or feeling stuck', 'Questions about identity, values, direction, or personal growth'],
    approachTitle: 'A process built around what you want to understand or change.',
    approach: ['Maya may draw from Internal Family Systems concepts, somatic awareness, mindfulness, and other counseling tools depending on the focus of the work.', 'Sessions may include understanding why a response developed, recognizing what keeps it going, and exploring changes that could be useful in daily life.'],
    wholePersonTitle: 'Attention to mind and body',
    wholePerson: ['Thoughts and emotions often have a physical dimension. Maya may invite awareness of tension, breath, energy, or other body cues as useful information, always at a pace that respects your comfort.'],
    related: [{ slug: 'anxiety-stress', label: 'Explore support for anxiety and stress' }],
    approachLinks: [
      
      { href: '/approaches/internal-family-systems/', label: 'Internal Family Systems (IFS)' },
      { href: '/approaches/somatic-experiencing/', label: 'Somatic & body-informed approaches' },
      { href: '/approaches/mindfulness-based-therapy/', label: 'Mindfulness' },
    ],
  },
  'trauma-ptsd': {
    title: 'Trauma & PTSD Therapy in Fort Collins, Colorado',
    description: 'Compassionate trauma and PTSD counseling with Maya Bennett, LPC, at Evergreen Counseling Collective in Fort Collins, Colorado.',
    hero: 'Support for difficult experiences and the ways they may continue to affect the present.',
    leadTitle: 'The impact of trauma can show up in many ways.',
    lead: ['After a traumatic or overwhelming experience, reactions that once helped you get through it may continue long after the immediate danger has passed. Those responses can become exhausting or interfere with everyday life.', 'Counseling can help you understand these reactions without reducing your identity to what happened. You do not have to describe every detail of a difficult experience before you are ready.'],
    experiencesTitle: 'You may be noticing',
    experiences: ['Feeling on guard, tense, or easily startled', 'Avoiding reminders, places, conversations, or emotions', 'Intrusive memories, distressing dreams, or strong reactions to reminders', 'Feeling numb, disconnected, or far away from yourself', 'Shame, self-blame, or difficulty trusting', 'Physical responses that seem hard to explain or settle'],
    approachTitle: 'Safety, trust, and pacing matter.',
    approach: ['Early work may focus on understanding current reactions, strengthening a sense of stability, and identifying what helps you stay connected to the present.', 'Depending on the situation, Maya may incorporate Internal Family Systems concepts, mindfulness, or somatic awareness. The pace can be adjusted as the work develops.'],
    related: [],
    approachLinks: [
      
      { href: '/approaches/internal-family-systems/', label: 'Internal Family Systems (IFS)' },
      { href: '/approaches/somatic-experiencing/', label: 'Somatic & body-informed approaches' },
      { href: '/approaches/mindfulness-based-therapy/', label: 'Mindfulness' },
    ],
  },
    'anxiety-stress': {
    title: 'Anxiety & Stress Therapy in Fort Collins, Colorado',
    description: 'Individual counseling for anxiety, worry, stress, and overwhelm with Maya Bennett, LPC, in Fort Collins, Colorado.',
    hero: 'Support when worry, tension, or pressure takes up more room than you want.',
    leadTitle: 'Stress can affect both mind and body.',
    lead: ['Anxiety and stress can show up as constant mental activity, physical tension, irritability, difficulty settling, or pressure to keep everything under control. Even when life looks manageable from the outside, the effort can be exhausting.', 'Counseling can help you recognize what keeps worry or stress active and develop different ways of responding when those patterns take over.'],
    experiencesTitle: 'Some experiences that may bring people to counseling include',
    experiences: ['Persistent worry or overthinking', 'Feeling restless, tense, irritable, or unable to settle', 'Difficulty sleeping or switching off', 'Perfectionism, self-criticism, or fear of making mistakes', 'Avoidance or indecision when something feels overwhelming', 'Physical cues such as tightness, shallow breathing, or a racing heart'],
    approachTitle: 'Understanding what keeps the cycle going.',
    approach: ['Therapy may look at connections among thoughts, emotions, expectations, behaviors, and physical stress responses. It can also include practical ways to respond when worry or pressure begins to build.', 'Mindfulness or body awareness may be useful for some clients. Counseling may also explore whether earlier experiences, expectations, or relationship patterns are contributing to anxiety in the present.'],
    related: [{ slug: 'individual-therapy', label: 'Learn more about individual therapy' }],
    approachLinks: [
      { href: '/approaches/somatic-experiencing/', label: 'Somatic & body-informed approaches' },
      { href: '/approaches/mindfulness-based-therapy/', label: 'Mindfulness' },
    ],
  },
  'grief-loss': {
    title: 'Grief & Loss Counseling in Fort Collins, Colorado',
    description: 'Thoughtful individual counseling for grief and significant loss at Evergreen Counseling Collective in Fort Collins, Colorado.',
    hero: 'A place for grief that does not ask you to follow a timetable or carry it neatly.',
    leadTitle: 'Loss can change more than one part of life.',
    lead: ['Grief may follow a death, the end of a relationship, a change in health, a lost role or future, or another meaningful loss. It can affect identity, routines, relationships, beliefs, and the way the world feels.', 'There is no single correct way to grieve. Counseling offers a place to talk honestly about the loss, the changes around it, and what life feels like now.'],
    experiencesTitle: 'Grief may include',
    experiences: ['Sadness, anger, guilt, relief, numbness, or changing emotions', 'Difficulty concentrating or moving through ordinary tasks', 'Feeling isolated or misunderstood by others', 'Changes in sleep, energy, appetite, or physical comfort', 'Questions about identity, meaning, or what comes next', 'Grief that returns around reminders, milestones, or transitions'],
    approachTitle: 'Grief does not have to follow someone else’s timetable.',
    approach: ['Counseling does not require you to move through grief in a particular order or on a particular schedule. The work can focus on what feels most difficult now and how the loss is affecting everyday life.', 'Mindfulness, body awareness, or spiritual resources may also be incorporated when they are useful to you. Spirituality is always optional and guided by your own beliefs.'],
    related: [{ slug: 'life-transitions', label: 'Explore support for life transitions' }],
    approachLinks: [
      { href: '/approaches/mindfulness-based-therapy/', label: 'Mindfulness' },
    ],
  },
  'depression-emotional-disconnection': {
    title: 'Depression & Disconnection | Fort Collins, CO',
    description: 'Counseling for low mood, emotional disconnection, and feeling stuck with Maya Bennett, LPC, in Fort Collins, Colorado.',
    hero: 'Support when it is hard to feel connected, interested, hopeful, or fully present in your life.',
    leadTitle: 'Disconnection does not always look the same.',
    lead: ['Low mood and emotional disconnection do not always feel like obvious sadness. You may notice numbness, exhaustion, less interest in things that normally matter, or a sense of simply going through the motions.', 'Counseling provides space to explore what may be contributing and what could help you feel more engaged with yourself, other people, or daily life.'],
    experiencesTitle: 'You may be noticing',
    experiences: ['Low energy or difficulty beginning everyday tasks', 'Less interest, pleasure, or connection', 'Harsh self-criticism, shame, or a sense of not being enough', 'Withdrawing from people or activities', 'Feeling emotionally flat, shut down, or stuck', 'Changes in sleep, motivation, concentration, or routine'],
    approachTitle: 'Start by understanding what has become difficult.',
    approach: ['Maya may help you look at patterns connected with withdrawal, self-criticism, exhaustion, or emotional shutdown and identify manageable ways to reconnect with what matters to you.', 'Counseling may also include attention to physical cues or protective responses. The goal is not to force positive thinking, but to understand what is happening and consider realistic next steps.'],
    related: [{ slug: 'individual-therapy', label: 'Learn more about individual therapy' }],
    approachLinks: [
      { href: '/approaches/', label: 'Explore Maya’s therapy approaches' },
    ],
  },
  'chronic-pain-chronic-illness': {
    title: 'Chronic Pain & Illness Counseling | Fort Collins, CO',
    description: 'Counseling for adults living with chronic pain or illness, with support for grief, adjustment, identity, stress, and relationships in Fort Collins, Colorado.',
    hero: 'Support for the emotional and day-to-day impact of living with ongoing pain, illness, uncertainty, or changing abilities.',
    leadTitle: 'Chronic health conditions can affect far more than the body.',
    lead: [
      'Living with chronic pain or chronic illness can affect routines, energy, relationships, work, identity, independence, and plans for the future. Even when medical care addresses the physical condition, the emotional and relational impact may still need its own space.',
      'Counseling does not treat the underlying medical condition. It can provide support for the grief, stress, frustration, uncertainty, isolation, and adjustment that may come with living with ongoing symptoms or changing abilities.',
    ],
    experiencesTitle: 'You may be dealing with',
    experiences: [
      'Grief related to changes in health, ability, independence, or plans',
      'Anxiety about symptoms, flare-ups, appointments, or the future',
      'Feeling misunderstood, isolated, or tired of explaining your experience',
      'Frustration, anger, guilt, or self-criticism related to limitations',
      'Changes in work, caregiving, relationships, intimacy, or family roles',
      'Difficulty balancing rest, activity, expectations, and what matters to you',
    ],
    approachTitle: 'Counseling can make room for the condition without letting it define your whole identity.',
    approach: [
      'Therapy may focus on adjusting to changes, making space for difficult emotions, communicating needs and boundaries, and staying connected with relationships, values, identity, and meaningful parts of life.',
      'The goal is not to suggest that pain or illness is psychological. Counseling addresses the emotional and relational effects of living with a chronic condition and can complement appropriate medical care.',
    ],
    wholePersonTitle: 'Emotional support can exist alongside medical care.',
    wholePerson: [
      'Chronic pain and chronic illness are real physical experiences. Counseling does not assume that symptoms are caused by stress, emotions, or a person’s attitude.',
      'Therapy can offer a place to work with the uncertainty, losses, changes, and pressures that may accompany a chronic condition while medical concerns remain in the care of appropriate healthcare professionals.',
    ],
    related: [
      { slug: 'life-transitions', label: 'Explore support for life transitions' },
      { slug: 'grief-loss', label: 'Explore grief and loss counseling' },
    ],
    approachLinks: [
      { href: '/approaches/', label: 'Explore Maya’s therapy approaches' },
    ],
  },

  'life-transitions': {
    title: 'Life Transitions Counseling | Fort Collins, CO',
    description: 'Individual counseling for major changes in roles, identity, work, family, and relationships in Fort Collins, Colorado.',
    hero: 'Support while life is changing—even when the change is expected or chosen.',
    leadTitle: 'Transitions can unsettle familiar ways of knowing yourself.',
    lead: ['A new role, ending, move, career shift, relationship change, or family transition can bring mixed emotions. You may feel hopeful and uncertain, relieved and grieving, or unsure where you fit.', 'Counseling can help you make sense of what the change means, what may be ending, and what you want to carry into the next stage of life.'],
    experiencesTitle: 'People may seek support during changes involving',
    experiences: ['Identity, purpose, or a changing sense of self', 'Work, education, retirement, or professional direction', 'Marriage, separation, parenting, caregiving, or an empty nest', 'Relocation or changes in community and support', 'Health, ability, aging, or new responsibilities', 'A decision that carries uncertainty or competing values'],
    approachTitle: 'Making sense of change while deciding what comes next.',
    approach: ['Therapy can help you sort through the practical and emotional effects of a transition, recognize what uncertainty brings up, and clarify what matters as you move forward.', 'The work may also consider how earlier experiences influence current choices or how uncertainty shows up physically and emotionally.'],
    related: [{ slug: 'self-esteem-personal-growth', label: 'Explore self-esteem and personal growth' }],
    approachLinks: [
      { href: '/approaches/', label: 'Explore Maya’s therapy approaches' },
    ],
  },
  'relationship-concerns': {
    title: 'Relationship Concerns | Fort Collins, CO',
    description: 'Individual counseling for relationship patterns, communication, boundaries, and conflict with Maya Bennett, LPC, in Fort Collins, Colorado.',
    hero: 'Individual counseling to understand how you connect, protect yourself, communicate, and respond in relationships.',
    leadTitle: 'Relationships can bring both meaning and difficulty.',
    lead: ['You may be struggling in a current relationship, recovering from one that ended, or noticing similar difficulties across different relationships. Individual therapy offers space to examine your own experience without another person participating.', 'This service is individual counseling related to relationships. Maya is not offering couples therapy through this service.'],
    experiencesTitle: 'Individual counseling may help you explore',
    experiences: ['Communication patterns and difficulty expressing needs', 'Boundaries, people-pleasing, or fear of disappointing others', 'Recurring conflict or feeling misunderstood', 'Trust, closeness, vulnerability, or emotional distance', 'The effects of past relationships on present connections', 'Decisions about staying, leaving, repairing, or changing a relationship'],
    approachTitle: 'Understanding patterns, needs, boundaries, and choices.',
    approach: ['Counseling may explore what happens during conflict, how you communicate needs, where boundaries become difficult, and what reactions tend to repeat across relationships.', 'The work may also examine expectations, fears, attachment needs, or past experiences that influence present relationships. Decisions about a relationship remain yours.'],
    related: [{ slug: 'self-esteem-personal-growth', label: 'Explore self-esteem and personal growth' }],
    approachLinks: [
      { href: '/approaches/', label: 'Explore Maya’s therapy approaches' },
    ],
  },
  'self-esteem-personal-growth': {
    title: 'Self-Esteem & Growth | Fort Collins, CO',
    description: 'Counseling for self-esteem, values, boundaries, confidence, and personal growth in Fort Collins, Colorado.',
    hero: 'A thoughtful space to understand yourself more clearly and live with greater alignment.',
    leadTitle: 'Growth does not require treating yourself as a problem to fix.',
    lead: ['You may want to understand repeating patterns, trust your own judgment more, strengthen boundaries, or make choices that better reflect your values. Sometimes the starting point is simply a sense that something needs to change.', 'Counseling can support honest self-reflection while also helping you experiment with different choices, boundaries, or ways of responding.'],
    experiencesTitle: 'Areas you may want to explore include',
    experiences: ['Self-criticism or difficulty recognizing your strengths', 'Confidence in decisions, relationships, or new situations', 'Values, identity, purpose, or direction', 'Boundaries and the ability to communicate needs', 'Patterns that no longer fit the way you want to live', 'A stronger, more compassionate relationship with yourself'],
    approachTitle: 'Turn insight into choices that fit who you want to be.',
    approach: ['Counseling may explore thoughts, emotions, body cues, relationships, and experiences that have influenced how you see yourself or what you expect from yourself.', 'Mindfulness, Internal Family Systems concepts, somatic awareness, and practical reflection may be incorporated when they are useful to the work.'],
    related: [{ slug: 'life-transitions', label: 'Explore support for life transitions' }],
    approachLinks: [
      { href: '/approaches/internal-family-systems/', label: 'Internal Family Systems (IFS)' },
      { href: '/approaches/somatic-experiencing/', label: 'Somatic & body-informed approaches' },
      { href: '/approaches/mindfulness-based-therapy/', label: 'Mindfulness' },
    ],
  },
};
