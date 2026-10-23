export default function RichText({ children }) {
  return String(children).split(/(\[[^\]]+\])/).map((part, index) =>
    part.startsWith('[')
      ? <mark key={index} className="bg-cta/15 text-cta rounded px-1">{part}</mark>
      : part,
  )
}
