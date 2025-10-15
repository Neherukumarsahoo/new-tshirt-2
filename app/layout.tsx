'use client'

import TopNav from '@/components/layout/TopNav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      {children}
    </div>
  )
}
