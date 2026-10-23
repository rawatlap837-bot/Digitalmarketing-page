import C from '../content'
import RichText from './RichText'

export default function Footer() {
  return <footer className="border-t border-line bg-surf py-8 text-center text-muted text-sm"><RichText>{C.brand}</RichText></footer>
}
