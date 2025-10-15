'use client'

import Viewer3D from '@/components/viewer/Viewer3D'
import PartSwatchGroup from '@/components/ui/PartSwatchGroup'
import { DesignerProvider } from '@/components/state/DesignerProvider'

export default function ColorPage() {
  return (
    <DesignerProvider>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-5 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Colors</h2>
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
    </DesignerProvider>
  )
}
