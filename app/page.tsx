'use client'

import { useState } from 'react'
import { Palette, Upload } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('colors')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">3D T-Shirt Designer</h1>
            </div>
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('colors')}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'colors'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Palette className="w-4 h-4 mr-2" />
                Colors
              </button>
              <button
                onClick={() => setActiveTab('upload')}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'upload'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Design
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              {activeTab === 'colors' ? (
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Customize Colors</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Click on different parts of the t-shirt to change colors.
                  </p>
                  {/* Color picker will be added in next step */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        T-Shirt Body
                      </label>
                      <div className="w-full h-10 bg-white border-2 border-gray-300 rounded cursor-pointer"></div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Collar
                      </label>
                      <div className="w-full h-10 bg-white border-2 border-gray-300 rounded cursor-pointer"></div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Buttons
                      </label>
                      <div className="w-full h-10 bg-black border-2 border-gray-300 rounded cursor-pointer"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Design</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload an image to place on your t-shirt.
                  </p>
                  {/* Image upload will be added in next step */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 3D Viewer */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👕</span>
                  </div>
                  <p className="text-gray-600">3D T-Shirt Viewer</p>
                  <p className="text-sm text-gray-500 mt-2">
                    3D viewer will be implemented in the next step
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}