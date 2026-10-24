
import { useState } from 'react'
const tools = [
  ['ChatGPT', 'chatgpt.com'], ['Claude', 'claude.ai'],
  ['Gemini', 'gemini.google.com'], ['Perplexity', 'perplexity.ai'],
  ['Canva', 'canva.com'], ['CapCut', 'capcut.com'],
  ['WordPress', 'wordpress.org'], ['Elementor', 'elementor.com'],
  ['Google Search Console', 'search.google.com'], ['Meta Ads Manager', 'meta.com'],
  ['Google Ads', 'ads.google.com'], ['YouTube Ads', 'youtube.com'],
  ['GA4', 'analytics.google.com'], ['Tag Manager', 'tagmanager.google.com'],
  ['Looker Studio', 'lookerstudio.google.com'], ['Mailchimp', 'mailchimp.com'],
  ['WhatsApp Business', 'whatsapp.com'], ['Zapier', 'zapier.com'],
  ['Make', 'make.com'], ['n8n', 'n8n.io'], ['Notion', 'notion.so'],
]

function ToolLogo({ name, domain }) {
  const [failed, setFailed] = useState(false)
  const logoNames = {
    'Google Search Console': 'search-console', 'Meta Ads Manager': 'meta',
    'Google Ads': 'google-ads', 'YouTube Ads': 'youtube', 'GA4': 'ga4',
    'Tag Manager': 'tag-manager', 'WhatsApp Business': 'whatsapp',
  }
  const logoSrc = name === 'Looker Studio'
    ? '/images/tools/looker-studio.svg'
    : `/images/tools/${logoNames[name] || name.toLowerCase()}.webp`
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-xs font-bold text-[#6346B4] sm:h-11 sm:w-11 sm:rounded-xl">
      {failed ? name.slice(0, 2).toUpperCase() : (
        <img src={logoSrc} alt="" width="28" height="28" className="h-6 w-6 object-contain sm:h-7 sm:w-7" loading="lazy" onError={() => setFailed(true)} />
      )}
    </span>
  )
}

export default function Tools() {
  return (
    <div id="tools" role="region" aria-label="Tools you will learn" className="relative z-10 mt-7 sm:mt-12">
      <div className="tools-carousel overflow-hidden" tabIndex={0} aria-label="Marketing tools carousel. Hover or focus to pause.">
        <div className="tools-track flex w-max">
          {[0, 1].map(copy => (
            <ul key={copy} aria-hidden={copy === 1 ? true : undefined} className="flex shrink-0 items-center gap-3 py-2 pr-3 sm:gap-4 sm:py-3 sm:pr-4">
              {tools.map(([name, domain]) => (
                <li key={name} className="flex w-max shrink-0 items-center gap-2.5 border border-white/15 bg-white/[.08] shadow-sm backdrop-blur sm:gap-3">
                  <ToolLogo name={name} domain={domain} />
                  <span className="whitespace-nowrap text-xs font-semibold text-white/90 sm:text-sm">{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

