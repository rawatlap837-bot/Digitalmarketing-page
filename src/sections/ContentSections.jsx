import ContentBlock from '../components/ContentBlock'

// Page copy lives here. Update the heading, paragraphs, lists, or modules
// without needing to change the layout component.
const contentSections = [
  {
    id: 'problem',
    title: 'Why Choose',
    highlight: 'Us',
    paragraphs: ['Live training. Practical work. A portfolio that shows what you can do.'],
    items: [
      '100% Live Classes. 72 interactive sessions with demos, guided labs and time for questions.',
      'Hands-on Projects. Six practical projects and a final capstone to apply your skills.',
      'Proof In Your Portfolio. Build a website, campaign plans, a dashboard and automation workflows.',
      'Personal Mentor Feedback. Get written project reviews and one-to-one capstone guidance.',
    ],
  },
  {
    id: 'solution',
    title: 'About',
    highlight: 'Creative Adhyayan',
    paragraphs: [
      '**Creative Adhyayan** brings you **six months** of practical digital marketing with __AI in every class__.',
    ],
  },
  {
    id: 'modules',
    title: 'Course',
    highlight: 'Modules',
    paragraphs: ['**Six months.** A clear path from __marketing foundations__ to a **complete marketing system**.'],
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
    title: 'AI Tools',
    highlight: 'You Will Learn',
    paragraphs: ['Use AI throughout the course to research, create and automate, with guided practice and human review.'],
    items: [
      'ChatGPT & Claude: Draft content, refine prompts and create custom marketing assistants.',
      'Gemini & Perplexity: Research markets, explore audience insights and verify sources.',
      'Canva Magic Studio & Adobe Firefly: Create brand visuals, social designs and campaign creatives.',
      'CapCut, ElevenLabs & HeyGen: Practice video editing and explore AI voiceovers and avatars.',
      'Zapier & Make: Connect forms, CRM and email into marketing workflows, with an n8n demo.',
      'AI Image & Video Demos: Explore Midjourney or Ideogram, plus Runway or Pika, through trainer-led demonstrations.',
    ],
  },
  {
    id: 'can',
    title: '100% Practical',
    highlight: 'Projects & Live Training',
    items: [
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
