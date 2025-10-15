'use client'

import Viewer3D from '@/components/viewer/Viewer3D'
import { DesignerProvider } from '@/components/state/DesignerProvider'

export default function UploadPage() {
  return (
    <DesignerProvider>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-5 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Upload Design</h2>
              <div className="space-y-4">
                <input type="file" accept="image/png,image/jpeg" className="block w-full text-sm text-gray-600" />
                <div className="grid grid-cols-2 gap-2">
                  <button className="px-3 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200">Front</button>
                  <button className="px-3 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200">Back</button>
                  <button className="px-3 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200">Left Sleeve</button>
                  <button className="px-3 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200">Right Sleeve</button>
                </div>
              </div>
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
