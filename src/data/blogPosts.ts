
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Our Manifesto: Building the Internet We Were Promised",
    slug: "our-manifesto-building-the-internet-we-were-promised",
    date: "2023-12-15",
    author: "N1ghtw1re Collective",
    excerpt: "They sold you a dream, didn't they? A digital frontier. Open spaces, free exchange, knowledge unbound. Remember that? A flicker, perhaps. Before the walls went up.",
    content: `## Our Manifesto: Building the Internet We Were Promised

They sold you a dream, didn't they? A digital frontier. Open spaces, free exchange, knowledge unbound. Remember that? A flicker, perhaps. Before the walls went up. Before the gardens were walled off, paved over, and plastered with billboards that watch you back.

Look around now. What do you see? Homogeneity. Endless scrolling feeds designed not to inform, but to _ensnare_. Algorithms whispering tailored realities into your feed, shaping not just what you buy, but what you _think_. Predictive engines learning you, mapping you, reducing you to a data point—easier to nudge, easier to control. They call it engagement. I call it conditioning.

You think privacy is about hiding secrets? That's the narrative they push. Convenient. Makes you complacent. Privacy isn't about concealment; it's about _control_. Autonomy. The fundamental right to draw a line around your own thoughts, your own identity, and say, "This is mine. You don't get to exploit it." It's the shield you need in a world that wants to strip you bare and sell the pattern of your soul.

This erosion isn't accidental. It's architecture. Deliberate design choices made in sterile boardrooms, prioritizing profit over people, control over connection. The beige web, the manipulative design, the constant, grating surveillance – it's the blueprint of digital feudalism.

**This is where the divergence occurs. This is the N1ghtw1re principle.**

We build differently. We remember the promise. Here, we don't just assemble websites or applications; we architect environments. Spaces designed for human beings, not for data harvesting bots. We craft digital tools and platforms grounded in the belief that the internet should serve _you_, not the other way around.

No oppressive algorithms dictating your experience. No manipulative tactics nudging you towards compliance. No harvesting your attention as raw material. We build with transparency. We build for resilience. We embrace aesthetics that break the mold – sometimes reaching back to find the future – because visual monotony is often the first sign of centralized control. Retro isn't just style; it's a statement against the blandness of the corporate machine.

We collaborate with those who see it too. The visionaries, the creators, the organizations – large or small – who refuse to accept the current trajectory. Those who believe in building something _better_, something that respects the user, empowers the individual, and fosters genuine community. Whether it's a website that defies conventional design, a platform built on privacy, or a tool that puts control firmly back in your hands – that's the work we exist to do. We are the architects for those reclaiming their digital sovereignty.

The fight isn't about Luddism. It's about reclaiming the **potential**. Stripping away the layers of interference and manipulation to find the raw, powerful core of interconnected communication and creativity. The potential that _was_ the promise.

The future of the web isn't preordained by Silicon Valley oligarchs. It belongs to those with the conviction to build it according to better blueprints. The window is closing, the surveillance infrastructure deepens its roots daily. But the foundation can still be laid.

We're laying it now. One line of code, one design choice, one collaboration at a time.

Building the internet as it was meant to be.

**(End Transmission)**`
  },
  {
    id: 2,
    title: "The Digital Panopticon: Breaking Free",
    slug: "the-digital-panopticon-breaking-free",
    date: "2023-11-28",
    author: "Agent Zero",
    excerpt: "Every click you make, every search you take, they're watching you. The architecture of the modern internet has evolved into a perfect surveillance machine.",
    content: `## The Digital Panopticon: Breaking Free

Every click you make, every search you take, they're watching you. The architecture of the modern internet has evolved into a perfect surveillance machine. But does it have to be this way?

In this post, we explore the mechanisms of digital surveillance and how we can regain control through technical countermeasures and mindful digital consumption. From decentralized networks to privacy-oriented browsers, we outline practical steps for digital liberation.

The panopticon can be dismantled, one privacy shield at a time. Join us as we explore how to reclaim your digital sovereignty in an age of ubiquitous surveillance.

Remember: Privacy isn't just a preference. It's a fundamental right in the digital age.`
  },
  {
    id: 3,
    title: "Retro Computing: More Than Nostalgia",
    slug: "retro-computing-more-than-nostalgia",
    date: "2023-10-10",
    author: "Pixel Prophet",
    excerpt: "The blinking cursor on a monochrome screen. The satisfying clack of mechanical keyboards. There's a reason we're drawn to retro computing aesthetics.",
    content: `## Retro Computing: More Than Nostalgia

The blinking cursor on a monochrome screen. The satisfying clack of mechanical keyboards. There's a reason we're drawn to retro computing aesthetics beyond mere nostalgia.

In this exploration, we analyze how retro computing interfaces often embodied core principles that modern interfaces have abandoned: clear feedback, reduced distractions, and a focus on functionality over flashiness.

We'll examine how these principles can be applied to modern digital design to create experiences that respect user agency and promote deeper engagement rather than shallow addiction.

From the command line to brutalist web design, there's a growing counter-movement that recognizes the power of these approaches - not just as aesthetic choices, but as ethical ones.

Embracing the old might be our most revolutionary path forward.`
  }
];
