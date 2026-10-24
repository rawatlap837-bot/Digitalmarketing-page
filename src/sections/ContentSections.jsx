import ContentBlock from '../components/ContentBlock'

// Copy for the problem, solution, agency, AI, and outcomes sections.
const contentSections = [
  {
    id: 'problem',
    h: 'Most Institutes Teach Marketing. Few Actually Do It',
    p: ["Look at the institutes around you. They teach digital marketing, yet their own Google rankings, ads and social pages tell a different story. If they can't market themselves, how will they teach you to market anyone else?"],
    l: [
      'Companies want people who can do the work, not just explain it.',
      'Marketing tools change every month, and random tutorials go out of date.',
      'Everyone says "use AI", but nobody shows you how to use it properly.',
    ],
  },
  {
    id: 'solution',
    h: 'Learn From a Working Agency, Not Just a Classroom',
    p: [
      'We run a digital marketing agency, so what we teach is what we do every day. The Digital Marketing Master Program takes you from basics to advanced in 24 weeks, with AI tools in every class and a real project to build. You never just watch. You build.',
      'Result: By the end, you have a brand, a website, live campaigns, a funnel and a portfolio you can show to employers and clients.',
    ],
  },
  {
    id: 'agency',
    h: 'We Market Our Own Business, So We Know What Works',
    p: ['We practice what we teach. Our own marketing runs on the same SEO, ads, social media and funnels you will learn. [Add proof: our Google ranking, lead numbers or ad results.]'],
    l: [
      'Agency methods, not textbook theory. You learn the workflows, tools and AI shortcuts a working agency uses.',
      'Skills that earn. We show you how to turn marketing into income: freelance clients, agency services, or a job as a skilled junior.',
      'Pricing and pitching included. Learn to package services, write proposals and win your first client.',
      'Local support. Classes in Sangam Vihar, with an online option and recordings.',
    ],
  },
  {
    id: 'ai',
    h: 'Marketing Is Now Powered by AI. Learn to Use It Like an Agency',
    p: ['AI is not one chapter in this course. It is used in every class, so you work faster and smarter, the way modern agencies do.'],
    l: [
      'Research and strategy: summarize markets, compare competitors and draft personas in minutes',
      'Content and design: write, design and edit posts, ads, emails and videos with AI tools',
      'SEO and ads: cluster keywords, write ad copy and test creative variations',
      'Funnels and analytics: build landing pages and email sequences, and turn data into clear insights',
      'Automation: build workflows, custom GPTs and chatbots that handle leads for you',
    ],
    after: ['You stay in charge. We teach responsible AI: fact-check every output, protect client data, respect copyright, and use AI to speed up work, never to replace thinking or strategy.'],
  },
  {
    id: 'can',
    h: 'After 6 Months, You Will Be Able To:',
    l: [
      'Plan a complete marketing strategy for any business',
      'Build a professional website, landing page and sales funnel',
      'Rank pages on Google with SEO',
      'Run paid campaigns on Meta, Google and YouTube',
      'Create content, designs and videos 10x faster with AI',
      'Track results with GA4, Tag Manager and dashboards',
      'Automate lead follow-up with email, WhatsApp and no-code tools',
      'Price and sell your services as a freelancer or agency',
    ],
  },
]

export default function ContentSections() {
  return <>
    {contentSections.map((block, index) => (
      <ContentBlock key={block.id} block={block} alternate={index % 2 === 0} />
    ))}
  </>
}
