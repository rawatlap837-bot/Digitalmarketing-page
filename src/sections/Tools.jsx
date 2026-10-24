import Section from '../components/Section'
import { HugeiconsIcon } from '@hugeicons/react'
import { AiBrain01Icon } from '@hugeicons/core-free-icons'

const sectionTitle = 'Learn the Exact Tools Agencies Use Every Day'
const tools = 'ChatGPT | Claude | Gemini | Perplexity | Canva | CapCut | WordPress | Elementor | Google Search Console | Meta Ads Manager | Google Ads | YouTube Ads | GA4 | Tag Manager | Looker Studio | Mailchimp | WhatsApp Business | Zapier | Make | n8n | Notion'
const note = 'Most tools have free plans or trials, and the trainer demonstrates paid tools in class.'

export default function Tools() {
  const chipColors = [
    'border-[#D8CCEC] bg-[#F2EDFA] text-[#49316F]',
    'border-[#DCD5EA] bg-[#F8F6FB] text-[#514762]',
    'border-[#E7E1EE] bg-white text-[#514762]',
  ]

  return (
    <Section id="tools" title={sectionTitle} light>
      <ul className="mb-6 flex flex-wrap gap-2 sm:gap-3">
        {tools.split(' | ').map((tool, index) => (
          <li
            key={tool}
            className={`rounded-full border px-3 py-2 text-sm sm:px-4 sm:text-base ${chipColors[index % chipColors.length]}`}
          >
            {tool}
          </li>
        ))}
      </ul>

      <p className="flex max-w-3xl items-start gap-3 rounded-2xl border border-[#E6DDF2] bg-[#F7F4FB] p-4 text-[#594D6B]">
        <HugeiconsIcon
          icon={AiBrain01Icon}
          size={20}
          className="mt-0.5 shrink-0 text-[#704DD0]"
          aria-hidden="true"
        />
        <span>{note}</span>
      </p>
    </Section>
  )
}
