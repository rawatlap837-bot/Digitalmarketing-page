const categories = [
  ['Writing & AI Assistants', 'Create & Refine', 'Draft content, refine prompts and build custom marketing assistants.', [['ChatGPT', 'chatgpt'], ['Claude', 'claude']]],
  ['Research & Insights', 'Explore & Verify', 'Compare competitors, understand audiences and check sources.', [['Gemini', 'gemini'], ['Perplexity', 'perplexity']]],
  ['Design & Brand Visuals', 'Design & Create', 'Create social posts, brand assets and campaign visuals.', [['Canva Magic Studio', 'canva'], ['Adobe Firefly', 'firefly']]],
  ['Video, Voice & Avatars', 'Edit & Produce', 'Edit short videos and explore AI voiceovers and presenter avatars.', [['CapCut', 'capcut'], ['ElevenLabs', 'elevenlabs'], ['HeyGen', 'heygen']]],
  ['Marketing Automation', 'Connect & Automate', 'Connect forms, CRM and email into lead-handling workflows.', [['Zapier', 'zapier'], ['Make', 'make'], ['n8n · Demo', 'n8n']]],
  ['Image & Video Generation', 'Trainer Demos', 'Explore Midjourney or Ideogram, and Runway or Pika, in guided demos.', [['Midjourney', 'midjourney'], ['Ideogram', 'ideogram'], ['Runway', 'runway'], ['Pika', 'pika']]],
]

export default function AiToolsGrid() {
  return (
    <ul className="ai-tools-grid mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {categories.map(([title, label, description, tools], index) => (
        <li key={title} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#432079] shadow-[0_10px_30px_rgba(28,9,57,.12)]">
          <div className="overflow-hidden border-b border-white/15">
            <img
              src={`/images/ai-training/${['writing', 'research-v3', 'design', 'video', 'automation', 'generation'][index]}.webp`}
              alt={`Illustrative training scene: ${title}`}
              width="960"
              height="640"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col p-4">
            <span className="mb-1.5 text-[9px] font-bold uppercase tracking-[.14em] text-[#FFD84D]">{label}</span>
            <h3 className="mb-1.5 text-base font-bold leading-snug text-white">{title}</h3>
            <p className="!mb-0 text-[13px] leading-relaxed text-[#DDD0EE]">{description}</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
            {tools.map(([name, logo]) => (
              <div key={logo} className="flex flex-col items-center gap-1">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/20 bg-white shadow-sm">
                  <img src={`/images/tools/${logo}.webp`} alt="" width="24" height="24" loading="lazy" className="h-6 w-6 object-contain" />
                </span>
                <span className="max-w-[88px] text-center text-[10px] font-medium leading-tight text-[#E8DCF6]">{name}</span>
              </div>
            ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
