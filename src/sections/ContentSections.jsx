import ContentBlock from '../components/ContentBlock'

// Copy for the problem, solution, agency, AI, and outcomes sections.
const contentSections = [
  {
    id: 'problem',
    h: 'Why Choose Us',
    p: ['Live training. Practical work. A portfolio that shows what you can do.'],
    l: [
      '100% Live Classes. 72 interactive sessions with demos, guided labs and time for questions.',
      'Hands-on Projects. Six practical projects and a final capstone to apply your skills.',
      'Proof In Your Portfolio. Build a website, campaign plans, a dashboard and automation workflows.',
      'Personal Mentor Feedback. Get written project reviews and one-to-one capstone guidance.',
    ],
  },
  {
    id: 'solution',
    h: 'About Creative Adhyayan',
    p: [
      '**Creative Adhyayan** brings you **six months** of practical digital marketing with __AI in every class__.',
      '**72 live sessions.** Build projects and __a portfolio__, with mentor guidance. Learn **offline or live online**.',
    ],
  },
  {
    id: 'modules',
    h: 'Course Modules',
    p: ['**Six months.** A clear path from __marketing foundations__ to a **complete marketing system**.'],
    modules: [
      { title: 'Foundations & AI Literacy', topics: 'Marketing basics, prompting, audience research and branding.', project: 'Brand kit & strategy document' },
      { title: 'Content, Social Media & SEO', topics: 'Copywriting, social strategy, short-form video and keyword research.', project: '30-day calendar, 3 videos & SEO article' },
      { title: 'Websites, Technical SEO & Meta Ads', topics: 'WordPress, local SEO, campaign setup and retargeting.', project: 'Business website & Meta campaign' },
      { title: 'Google Ads, Funnels & Automation', topics: 'Search and YouTube ads, landing pages, email and WhatsApp workflows.', project: 'Complete funnel with automation' },
      { title: 'Analytics, Conversion & Advanced AI', topics: 'GA4, tracking, dashboards, conversion testing and AI workflows.', project: 'Analytics dashboard & AI automation' },
      { title: 'Strategy, Business & Capstone', topics: 'Growth planning, pricing, client pitches and career preparation.', project: 'Full marketing system & capstone presentation' },
    ],
  },
  {
    id: 'ai',
    h: 'AI Tools You Will Learn',
    p: ['Use AI throughout the course to research, create and automate, with guided practice and human review.'],
    l: [
      'ChatGPT & Claude: Draft content, refine prompts and create custom marketing assistants.',
      'Gemini & Perplexity: Research markets, explore audience insights and verify sources.',
      'Canva Magic Studio & Adobe Firefly: Create brand visuals, social designs and campaign creatives.',
      'CapCut, ElevenLabs & HeyGen: Practice video editing and explore AI voiceovers and avatars.',
      'Zapier & Make: Connect forms, CRM and email into marketing workflows, with an n8n demo.',
      'AI Image & Video Demos: Explore Midjourney or Ideogram, plus Runway or Pika, through trainer-led demonstrations.',
    ],
    after: ['Practice responsibly. Check facts, protect client data and review AI outputs. Most tools offer free plans or trials; paid tools are demonstrated where student purchases are not needed.'],
  },
  {
    id: 'can',
    h: '100% Practical Projects & Live Training',
    l: [
      'Brand & Strategy. Research a practice business, define its audience and create a brand kit.',
      'Content & SEO. Build a 30-day calendar, produce three videos and write an optimized article.',
      'Website & Meta Campaign. Build a five-page website, audit its SEO and launch or simulate a Meta campaign.',
      'Funnels & Automation. Connect a landing page, lead magnet, CRM, email and WhatsApp follow-up.',
      'Analytics & AI Workflow. Set up tracking, create a dashboard and automate lead handling.',
      'Final Capstone. Present a complete marketing system, a 90-day growth plan and a pitch deck.',
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
