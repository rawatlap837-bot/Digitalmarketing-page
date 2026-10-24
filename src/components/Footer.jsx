import { brand } from '../content'
import RichText from './RichText'

export default function Footer() {
  return <footer className="border-t border-[#E8E1F0] bg-white py-6 text-center font-['Bricolage_Grotesque'] text-lg font-bold text-[#432078]"><RichText>{brand}</RichText></footer>
}
