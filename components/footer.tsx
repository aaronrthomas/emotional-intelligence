import Link from "next/link"
import { Brain } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-teal-600" />
          <p className="text-sm leading-loose text-center md:text-left">© 2023 EmotionIQ. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}
