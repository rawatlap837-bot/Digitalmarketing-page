import { Fragment } from 'react'
import ContentBlock from '../components/ContentBlock'
import FinalCTA from './FinalCTA'
import LearningComparison from './LearningComparison'

// Page copy lives here. Update the heading, paragraphs, lists, or modules
// without needing to change the layout component.
const contentSections = [
  {
    id: 'problem',
    title: 'Why Choose',
    highlight: 'Us',
    hideHeading: true,
    hideParagraphs: true,
    hideCta: true,
    paragraphs: ['Live training. Practical work. A portfolio that shows what you can do.'],
    items: [
      '100% Live Classes. 72 interactive sessions with demos, guided labs and time for questions.',
      'Hands-on Projects. Six practical projects and a final project to apply your skills.',
      '100% Practical Training. Learn through guided, hands-on projects and real-world practice.',
      '100% Job Assistance. Get career guidance, portfolio support and help preparing for interviews.',
    ],
  },
  {
    id: 'solution',
    title: 'About',
    highlight: 'Creative Adhyayan',
    paragraphs: [
      'At Creative Adhyayan, we focus more on **practical learning** alongside theoretical knowledge.',
      'Since our institute is backed by a **real digital marketing agency**, we understand what the industry actually demands.',
      "That's why we prioritise **hands-on experience** and **real-world projects** to prepare our students for successful careers.",
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
      { title: 'Strategy, Business & Final Project', topics: 'Growth planning, pricing, client pitches and career preparation.', project: 'Full marketing system & final project presentation' },
    ],
  },
  {
    id: 'ai',
    title: 'AI Tools',
    highlight: 'You Will Learn',
    paragraphs: [],
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
      'Final Project. Present a complete marketing system, a 90-day growth plan and a pitch deck.',
    ],
  },
]

export default function ContentSections() {
  return <>
    {contentSections.map((block, index) => <Fragment key={block.id}>
      <ContentBlock block={block} alternate={index % 2 === 0} />
      {block.id === 'solution' && <LearningComparison />}
      {block.id === 'ai' && <FinalCTA />}
    </Fragment>)}
  </>
}
