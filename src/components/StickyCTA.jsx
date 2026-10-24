import { PrimaryButton } from './Buttons'

export default function StickyCTA() {
  return <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-ink/90 backdrop-blur border-t border-line"><PrimaryButton className="w-full">Reserve My Seat</PrimaryButton></div>
}
