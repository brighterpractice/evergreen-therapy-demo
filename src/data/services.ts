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
 { slug: 'individual-therapy', title: 'Individual Therapy', href: '/services/individual-therapy/', description: 'One-to-one counseling centered on your experiences, concerns, relationships, and goals.', published: true },
 { slug: 'trauma-ptsd', title: 'Trauma & Difficult Experiences', href: '/services/trauma-ptsd/', description: 'Support related to traumatic experiences and the ways ongoing trauma responses may affect daily life, relationships, emotions, or the body.', homeDescription: 'Support when difficult experiences continue to shape how you feel, respond, or move through daily life.', showOnHome: true, published: true, hasDetailPage: true },
 { slug: 'anxiety-stress', title: 'Anxiety & Stress', href: '/services/anxiety-stress/', description: 'Support for worry, tension, overwhelm, physical stress responses, and patterns that make it difficult to feel settled.', homeDescription: 'Space to work with worry, tension, overwhelm, and patterns that make it hard to settle.', showOnHome: true, published: true, hasDetailPage: true },
 { slug: 'grief-loss', title: 'Grief & Loss', href: '/services/grief-loss/', description: 'A place to process grief and significant loss while making room for the many ways they can affect life and relationships.', homeDescription: 'Care while living with loss and the emotional, relational, and practical changes that may follow.', showOnHome: true, published: true },
 { slug: 'depression-emotional-disconnection', title: 'Depression & Emotional Disconnection', href: '/services/depression-emotional-disconnection/', description: 'Counseling when you may be experiencing low mood, loss of interest, emotional distance, or a sense of feeling stuck.', homeDescription: 'Support when you feel low, distant from yourself or others, or emotionally stuck.', showOnHome: true, published: true },
 { slug: 'chronic-pain-chronic-illness', title: 'Chronic Pain & Chronic Illness Counseling', href: '/services/chronic-pain-chronic-illness/', description: 'Counseling for the emotional, relational, and day-to-day impact of living with chronic pain, chronic illness, or changing health.', published: true },
 { slug: 'life-transitions', title: 'Life Transitions', href: '/services/life-transitions/', description: 'Support during changes involving identity, roles, work, family, relationships, or other significant shifts.', homeDescription: 'A place to make sense of changes in identity, work, family, relationships, or direction.', showOnHome: true, published: true },
 { slug: 'relationship-concerns', title: 'Relationship Concerns', href: '/services/relationship-concerns/', description: 'Individual counseling to explore communication, boundaries, connection, conflict, and recurring relationship patterns.', homeDescription: 'Individual counseling for patterns involving communication, boundaries, connection, or conflict.', showOnHome: true, published: true },
 { slug: 'self-esteem-personal-growth', title: 'Self-Esteem & Personal Growth', href: '/services/self-esteem-personal-growth/', description: 'Space to deepen self-understanding and explore confidence, values, boundaries, patterns, and meaningful growth.', published: true },
];

export const homepageServices = services.filter((service) => service.showOnHome);
