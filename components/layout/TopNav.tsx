'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TopNav() {
  const pathname = usePathname()
  const Tab = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        pathname === href
          ? 'bg-blue-600 text-white shadow'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      {label}
    </Link>
  )

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded bg-blue-600" />
          <span className="font-semibold text-gray-900">Mockey Clone</span>
        </div>
        <nav className="flex items-center space-x-2">
          <Tab href="/" label="Color" />
          <Tab href="/upload" label="Upload Design" />
        </nav>
      </div>
    </header>
  )
}
