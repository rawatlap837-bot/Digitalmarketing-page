import ContentBlock from '../components/ContentBlock'

// Copy for the class format, portfolio, audience, careers, certificate, team, and stories sections.
const programDetails = [
  {
    id: 'classes',
    h: 'Practical, Supported and Flexible',
    l: [
      '3 live classes a week, 90 minutes each: concept day, tools day, practical day',
      'Offline or online: same syllabus, same certificate. Missed a class? Watch the recording, shared within 24 hours',
      'Written feedback on every project from your trainer',
      'Doubt support through a student group and a weekly doubt-clearing slot',
      'Mentor review one-to-one before your capstone',
      'Small batches: 15 to 25 students offline, 20 to 30 online, with a support assistant',
    ],
  },
  {
    id: 'portfolio',
    h: 'Walk Out With Proof of Skill',
    p: ['Employers and clients hire based on what you can show. You will finish with:'],
    l: [
      'A brand kit and 10 designs',
      'A published 5-page website',
      'A Meta ad campaign and report',
      'A working funnel demo',
      'An analytics dashboard and client-style report',
      'An AI automation workflow',
      'A full capstone marketing system and 90-day growth plan',
    ],
  },
  {
    id: 'who',
    h: 'This Program Is Built for You If You Are:',
    l: [
      'A student or fresh graduate starting a career',
      'A job seeker or career changer who wants an in-demand skill',
      'A freelancer adding marketing services',
      'A business owner, coach or educator who wants to market your own business',
      'A working professional upgrading to AI-powered marketing',
    ],
    after: ['Not for you if you are looking for a shortcut without practice. You will need about 3 to 4 hours a week outside class. No prior marketing knowledge is needed.'],
  },
  {
    id: 'careers',
    h: 'Open the Door to In-Demand Roles',
    chips: 'Digital Marketing Executive | Social Media Manager | SEO Executive | Performance Marketer (Meta and Google Ads) | Content and Copywriting Specialist | Marketing Automation Specialist | Freelancer or Agency Founder',
  },
  {
    id: 'cert',
    h: 'Earn a Certificate That Reflects Real Work',
    p: ['Graded on assignments, monthly tests, a panel-reviewed capstone and a final exam. Score 85% or above for Distinction, 75% to 84% for Merit.'],
  },
  {
    id: 'trainers',
    h: 'Learn From the Agency Team That Does This Work Every Day',
    p: ['[Trainer name], [years of experience], [notable brands or results]. [Photo and one-line credential for each trainer]'],
  },
  {
    id: 'stories',
    h: 'What Our Students Say',
    l: [
      '"[Real testimonial: before situation, what changed, result.]" - [Name, role or city]',
      '"[Real testimonial: before situation, what changed, result.]" - [Name, role or city]',
      '"[Real testimonial: before situation, what changed, result.]" - [Name, role or city]',
    ],
  },
]

export default function ProgramDetails() {
  return <>
    {programDetails.map((block, index) => (
      !['who', 'careers', 'trainers', 'stories'].includes(block.id) && <ContentBlock key={block.id} block={block} alternate={index % 2 === 1} />
    ))}
  </>
}
