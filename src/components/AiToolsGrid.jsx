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
    <ul className="ai-tools-grid mt-3 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {categories.map(([title, label, description, tools], index) => (
        <li key={title} style={{ '--stack-index': index }} className={`ai-tool-card group flex min-w-0 flex-col overflow-hidden rounded-2xl border shadow-[0_8px_24px_rgba(38,20,64,.1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(38,20,64,.16)] ${[
          'border-[#BDA3E2] bg-[#E9DDF8]',
          'border-[#A7D2D7] bg-[#DCEFF0]',
          'border-[#E4C3A6] bg-[#F5E4D4]',
          'border-[#BFD4A8] bg-[#E6EFD9]',
          'border-[#AFC3E5] bg-[#DDE7F7]',
          'border-[#D9BD69] bg-[#F7EAC0]',
        ][index % 6]}`}>
          <div className="flex min-w-0 flex-1 flex-col px-3 py-2 sm:p-6">
            <span className="mb-1 w-fit rounded-full border border-[#7147B8]/10 bg-white/55 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[.13em] text-[#7147B8]">{label}</span>
            <h3 className="mb-1 min-h-0 font-['Bricolage_Grotesque'] text-xl font-bold leading-snug text-[#302342] sm:mb-4 sm:min-h-[2.8rem] sm:text-2xl">{title}</h3>
            <div className="mt-auto flex flex-wrap items-start gap-x-4 gap-y-1 border-t border-[#49345F]/10 pt-1 sm:gap-y-3 sm:pt-4">
            {tools.map(([name, logo]) => (
              <div key={logo} className="flex w-[72px] flex-col items-center gap-1.5">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/80 bg-white shadow-[0_4px_12px_rgba(43,25,72,.1)] transition-transform duration-200 group-hover:scale-[1.03] sm:h-16 sm:w-16">
                  <img src={`/images/tools/${logo}.webp`} alt="" width="40" height="40" loading="lazy" className="h-10 w-10 object-contain sm:h-11 sm:w-11" />
                </span>
                <span className="min-h-8 text-center text-xs font-semibold leading-snug text-[#49345F]">{name}</span>
              </div>
            ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
