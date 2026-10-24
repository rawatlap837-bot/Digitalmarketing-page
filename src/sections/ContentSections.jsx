import ContentBlock from '../components/ContentBlock'

// Copy for the problem, solution, agency, AI, and outcomes sections.
const contentSections = [
  {
    id: 'problem',
    h: 'Why Choose This Course?',
    p: ['24 weeks of practical learning, AI tools and guided projects to build your marketing skills and portfolio.'],
    l: [
      'Hands-on learning. Build websites, plan campaigns and create funnels through guided labs.',
      'AI in every class. Practice research, content and automation with ChatGPT, Claude and Gemini.',
      'A portfolio you can show. Create six hands-on projects and a final marketing capstone.',
      'Feedback that helps you grow. Get written project feedback, monthly reviews and capstone mentoring.',
      'Online or in the classroom. Follow the same syllabus in three live 90-minute sessions each week.',
      'Prepare for work. Practice client pitches, pricing and interviews. Build your resume and LinkedIn profile.',
    ],
  },
  {
    id: 'solution',
    h: 'About Creative Adhyayan',
    p: [
      'At **Creative Adhyayan**, we help you turn curiosity into practical digital marketing skills. Our **six-month Digital Marketing Master Program** takes you from the foundations to advanced strategy, combining live teaching, hands-on practice and __AI in every class__.',
      'Across **72 live sessions**, you build websites, create content, plan campaigns and automate marketing tasks. With guided projects, personal feedback and a **final capstone**, you develop __a portfolio__ to support your next step in a job, freelancing or your own business.',
      'Learn **in the classroom or live online**, with the same structured syllabus and a clear path from learning a concept to applying it.',
    ],
  },
  {
    id: 'modules',
    h: 'Course Modules',
    p: ['Six months. A clear path from marketing foundations to a complete marketing system.'],
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
    h: 'Practical Projects & Live Training',
    p: ['Learn through 72 live sessions, hands-on labs and project reviews. Build your portfolio one assignment at a time.'],
    l: [
      'Brand & Strategy. Research a practice business, define its audience and create a brand kit.',
      'Content & SEO. Build a 30-day calendar, produce three videos and write an optimized article.',
      'Website & Meta Campaign. Build a five-page website, audit its SEO and launch or simulate a Meta campaign.',
      'Funnels & Automation. Connect a landing page, lead magnet, CRM, email and WhatsApp follow-up.',
      'Analytics & AI Workflow. Set up tracking, create a dashboard and automate lead handling.',
      'Final Capstone. Present a complete marketing system, a 90-day growth plan and a pitch deck.',
    ],
    after: ['Live guidance. Each 90-minute class includes a concept demo, hands-on practice and time for doubts. Receive written project feedback and a mentor review before your capstone.'],
  },
]

export default function ContentSections() {
  return <>
    {contentSections.map((block, index) => (
      <ContentBlock key={block.id} block={block} alternate={index % 2 === 0} />
    ))}
  </>
}
