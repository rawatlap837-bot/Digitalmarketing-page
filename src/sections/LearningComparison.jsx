const creativeAdhyayanPoints = [
    { text: 'Run by a real marketing agency', highlight: 'real marketing agency' },
    { text: 'Practical-first learning approach', highlight: 'Practical-first learning' },
    { text: 'Work on live client projects', highlight: 'live client projects' },
    { text: 'Separate experts for each specialization', highlight: 'Separate experts' },
    { text: 'Learn strategies used in actual campaigns', highlight: 'actual campaigns' },
    { text: 'Understand real marketing challenges', highlight: 'real marketing challenges' },
]

const otherInstitutePoints = [
    { text: 'Mostly education-focused', highlight: 'education-focused' },
    { text: 'Mostly theory-based teaching', highlight: 'theory-based teaching' },
    { text: 'Limited real-world exposure', highlight: 'Limited real-world exposure' },
    { text: 'Often one trainer teaches everything', highlight: 'one trainer' },
    { text: 'Mostly learn from textbook examples', highlight: 'textbook examples' },
    { text: 'Limited industry experience', highlight: 'Limited industry experience' },
]

function HighlightedText({ text, highlight }) {
    const start = text.indexOf(highlight)
    return <>{text.slice(0, start)}<strong className="font-bold">{highlight}</strong>{text.slice(start + highlight.length)}</>
}

function ComparisonPanel({ title, items, positive }) {
    const tone = positive
        ? { panel: 'bg-[#DDF5E8]', icon: 'bg-[#18A957] shadow-[0_6px_16px_rgba(24,169,87,.28)]', symbol: '\u2713' }
        : { panel: 'bg-[#FCE5E9]', icon: 'bg-[#EF4545] shadow-[0_6px_16px_rgba(239,69,69,.28)]', symbol: '\u00D7' }

    return (
        <div className={`rounded-[28px] border-[3px] border-white p-4 shadow-[0_18px_42px_rgba(36,47,65,.08)] sm:p-6 lg:p-8 ${tone.panel}`}>
            <div className="mx-auto mb-5 flex w-fit items-center gap-3 rounded-full border border-white/80 bg-white/90 py-2.5 pl-3 pr-5 shadow-[0_8px_24px_rgba(36,47,65,.08)] sm:mb-7 sm:py-3 sm:pl-4 sm:pr-6">
                <span aria-hidden="true" className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-3xl font-bold leading-none text-white sm:h-14 sm:w-14 ${tone.icon}`}>
                    {tone.symbol}
                </span>
                <h2 className="font-['Bricolage_Grotesque'] text-lg font-bold leading-tight text-[#18315A] sm:text-2xl">{title}</h2>
            </div>
            <ul className="grid gap-3">
                {items.map(({ text, highlight }) => <li key={text} className="flex min-h-[68px] items-center gap-3 rounded-2xl border border-white/80 bg-white/75 px-3 py-3 shadow-[0_6px_18px_rgba(36,47,65,.05)] sm:min-h-[76px] sm:gap-4 sm:px-5 sm:py-4">
                    <span aria-hidden="true" className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-2xl font-bold leading-none text-white ${tone.icon}`}>
                        {tone.symbol}
                    </span>
                    <span className="text-sm font-medium leading-snug text-[#18315A] sm:text-base"><HighlightedText text={text} highlight={highlight} /></span>
                </li>)}
            </ul>
        </div>
    )
}

export default function LearningComparison() {
    return (
        <section aria-label="Creative Adhyayan compared with other institutes" className="relative overflow-hidden border-b border-[#E8E7E5] bg-[#F7F8F7] px-4 py-12 sm:px-7 sm:py-16 lg:px-10 lg:py-20">
            <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
                <ComparisonPanel title="Creative Adhyayan" items={creativeAdhyayanPoints} positive />
                <span aria-hidden="true" className="relative z-10 mx-auto -my-5 grid h-[76px] w-[76px] place-items-center rounded-full border-[6px] border-[#F7F8F7] bg-[#7147B8] text-xl font-black uppercase text-white shadow-[0_8px_22px_rgba(68,39,112,.25)] lg:-mx-5 lg:my-0 lg:h-[88px] lg:w-[88px] lg:text-2xl">VS</span>
                <ComparisonPanel title="Other Institutes" items={otherInstitutePoints} />
            </div>
        </section>
    )
}