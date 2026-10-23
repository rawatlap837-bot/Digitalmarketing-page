import C from '../content'
import RichText from './RichText'
import { PrimaryButton } from './Buttons'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-16 md:h-[72px] backdrop-blur border-b border-line bg-ink/60">
      <nav aria-label="Main" className="mx-auto max-w-[1200px] h-full px-5 sm:px-8 lg:px-10 flex items-center justify-between">
        <a href="#main" className="font-head font-bold text-2xl"><RichText>{C.brand}</RichText></a>
        <div className="hidden md:flex gap-8 text-muted text-[15px]"><a href="#roadmap" className="hover:text-main">Roadmap</a><a href="#tools" className="hover:text-main">Tools</a><a href="#faq" className="hover:text-main">FAQ</a></div>
        <PrimaryButton className="!min-h-[44px] !py-2 !px-5 text-sm">{C.hero.b1}</PrimaryButton>
      </nav>
    </header>
  )
}
