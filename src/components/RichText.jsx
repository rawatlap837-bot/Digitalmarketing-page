export default function RichText({ children }) {
  return String(children).split(/(\[[^\]]+\]|\*\*[^*]+\*\*|__[^_]+__)/).map((part, index) =>
    part.startsWith('**')
      ? <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>
      : part.startsWith('__')
      ? <span key={index} className="underline decoration-[#FFD84D]/80 decoration-2 underline-offset-4">{part.slice(2, -2)}</span>
      : part.startsWith('[')
      ? <mark key={index} className="bg-cta/15 text-cta rounded px-1">{part}</mark>
      : part,
  )
}
