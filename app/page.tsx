'use client'

import PartSwatchGroup from '@/components/ui/PartSwatchGroup'
import Viewer3D from '@/components/viewer/Viewer3D'
import { DesignerProvider } from '@/components/state/DesignerProvider'
import { Palette } from 'lucide-react'

export default function EditorPage() {
  return (
    <DesignerProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-gray-900">3D Polo T-Shirt Editor</h1>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-5">
                <div className="flex items-center mb-4">
                  <Palette className="w-5 h-5 text-blue-600 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-900">Customize Colors</h2>
                </div>
                <PartSwatchGroup label="Body" part="body" />
                <PartSwatchGroup label="Neck" part="neck" />
                <PartSwatchGroup label="Neck Border" part="neckBorder" />
                <PartSwatchGroup label="Cuff" part="cuff" />
                <PartSwatchGroup label="Buttons" part="buttons" />
                <PartSwatchGroup label="Ribbed Hem" part="ribbedHem" />
              </div>
            </aside>
            <section className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow overflow-hidden h-[70vh]">
                <Viewer3D />
              </div>
            </section>
          </div>
        </main>
      </div>
    </DesignerProvider>
  )
}
