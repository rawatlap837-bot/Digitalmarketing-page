const categories = [
  ['Writing & AI Assistants', 'Create & Refine', 'Draft content, refine prompts and build custom marketing assistants.', [['ChatGPT', 'chatgpt'], ['Claude', 'claude']]],
  ['Research & Insights', 'Explore & Verify', 'Compare competitors, understand audiences and check sources.', [['Gemini', 'gemini'], ['Perplexity', 'perplexity']]],
  ['Design & Brand Visuals', 'Design & Create', 'Create social posts, brand assets and campaign visuals.', [['Canva Magic Studio', 'canva'], ['Adobe Firefly', 'firefly']]],
  ['Video, Voice & Avatars', 'Edit & Produce', 'Edit short videos and explore AI voiceovers and presenter avatars.', [['CapCut', 'capcut'], ['ElevenLabs', 'elevenlabs'], ['HeyGen', 'heygen']]],
  ['Marketing Automation', 'Connect & Automate', 'Connect Meta and Google ad leads, forms, CRM and email into follow-up workflows.', [['Meta Ads', 'meta'], ['Google Ads', 'google-ads'], ['Zapier', 'zapier'], ['Make', 'make'], ['n8n · Demo', 'n8n']]],
  ['Image & Video Generation', 'Trainer Demos', 'Explore Midjourney or Ideogram, and Runway or Pika, in guided demos.', [['Midjourney', 'midjourney'], ['Ideogram', 'ideogram'], ['Runway', 'runway'], ['Pika', 'pika']]],
]

export default function AiToolsGrid() {
  return (
    <ul className="ai-tools-grid mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {categories.map(([title, label, description, tools]) => (
        <li key={title} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#432079] shadow-[0_10px_30px_rgba(28,9,57,.12)]">
          <div className="flex min-w-0 flex-1 flex-col p-4">
            <span className="mb-1.5 text-xs font-bold uppercase tracking-[.14em] text-[#EFBF04]">{label}</span>
            <h3 className="mb-2 text-xl font-bold leading-snug text-white sm:text-[22px]">{title}</h3>
            <p className="!mb-0 text-[13px] leading-relaxed text-[#DDD0EE]">{description}</p>
            <div className="mt-4 flex flex-wrap gap-4">
            {tools.map(([name, logo]) => (
              <div key={logo} className="flex flex-col items-center gap-1">
                <span className="grid h-14 w-14 place-items-center rounded-xl border border-white/20 bg-white shadow-sm sm:h-16 sm:w-16">
                  <img src={`/images/tools/${logo}.webp`} alt="" width="40" height="40" loading="lazy" className="h-10 w-10 object-contain sm:h-11 sm:w-11" />
                </span>
                <span className="max-w-[96px] text-center text-xs font-medium leading-snug text-[#E8DCF6]">{name}</span>
              </div>
            ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
