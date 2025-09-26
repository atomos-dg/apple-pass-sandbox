'use client'

import { useState } from 'react'
import Link from 'next/link'

type PassStyle = 'boardingPass' | 'coupon' | 'eventTicket' | 'generic' | 'storeCard'

export default function PassDesigner() {
  const [selectedStyle, setSelectedStyle] = useState<PassStyle>('generic')
  const [passData, setPassData] = useState({
    organizationName: '',
    description: '',
    logoText: '',
    backgroundColor: '#ffffff',
    foregroundColor: '#000000',
    labelColor: '#000000'
  })

  const passStyles = [
    { id: 'generic', name: 'Generic', icon: '🎫', description: 'General purpose pass' },
    { id: 'coupon', name: 'Coupon', icon: '🎟️', description: 'Discount and promotional offers' },
    { id: 'eventTicket', name: 'Event Ticket', icon: '🎪', description: 'Concerts, sports, theater' },
    { id: 'storeCard', name: 'Store Card', icon: '💳', description: 'Loyalty and membership cards' },
    { id: 'boardingPass', name: 'Boarding Pass', icon: '✈️', description: 'Travel and transportation' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">🍎 Apple Pass Sandbox</h1>
              </Link>
              <nav className="ml-6 flex space-x-8">
                <Link href="/dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Dashboard
                </Link>
                <span className="text-blue-600 px-3 py-2 text-sm font-medium">Designer</span>
              </nav>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Pass Designer
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Create and customize your Apple Wallet pass
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Design Panel */}
          <div className="space-y-6">
            {/* Pass Style Selection */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Pass Style</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {passStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id as PassStyle)}
                    className={`p-4 border-2 rounded-lg text-left transition-colors ${
                      selectedStyle === style.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{style.icon}</span>
                      <span className="font-medium text-gray-900">{style.name}</span>
                    </div>
                    <p className="text-sm text-gray-500">{style.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Basic Information */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    value={passData.organizationName}
                    onChange={(e) => setPassData({ ...passData, organizationName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., My Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <input
                    type="text"
                    value={passData.description}
                    onChange={(e) => setPassData({ ...passData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., VIP Membership Card"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Logo Text
                  </label>
                  <input
                    type="text"
                    value={passData.logoText}
                    onChange={(e) => setPassData({ ...passData, logoText: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., COMPANY"
                  />
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Colors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Background
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={passData.backgroundColor}
                      onChange={(e) => setPassData({ ...passData, backgroundColor: e.target.value })}
                      className="w-10 h-10 border border-gray-300 rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={passData.backgroundColor}
                      onChange={(e) => setPassData({ ...passData, backgroundColor: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Foreground
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={passData.foregroundColor}
                      onChange={(e) => setPassData({ ...passData, foregroundColor: e.target.value })}
                      className="w-10 h-10 border border-gray-300 rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={passData.foregroundColor}
                      onChange={(e) => setPassData({ ...passData, foregroundColor: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Label
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={passData.labelColor}
                      onChange={(e) => setPassData({ ...passData, labelColor: e.target.value })}
                      className="w-10 h-10 border border-gray-300 rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={passData.labelColor}
                      onChange={(e) => setPassData({ ...passData, labelColor: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Generate Pass
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Save Template
                </button>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div>
            <div className="bg-white shadow rounded-lg p-6 sticky top-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>

              {/* Pass Preview */}
              <div className="mx-auto max-w-sm">
                <div
                  className="rounded-lg shadow-lg overflow-hidden border-2"
                  style={{
                    backgroundColor: passData.backgroundColor,
                    color: passData.foregroundColor,
                    borderColor: passData.foregroundColor + '20'
                  }}
                >
                  {/* Pass Header */}
                  <div className="px-4 py-3 border-b" style={{ borderColor: passData.foregroundColor + '20' }}>
                    <div className="flex items-center justify-between">
                      <div>
                        {passData.logoText && (
                          <h4 className="font-bold text-sm tracking-wide" style={{ color: passData.foregroundColor }}>
                            {passData.logoText}
                          </h4>
                        )}
                        {passData.organizationName && (
                          <p className="text-xs opacity-75" style={{ color: passData.labelColor }}>
                            {passData.organizationName}
                          </p>
                        )}
                      </div>
                      <div className="text-2xl">
                        {passStyles.find(s => s.id === selectedStyle)?.icon}
                      </div>
                    </div>
                  </div>

                  {/* Pass Body */}
                  <div className="px-4 py-4">
                    {passData.description ? (
                      <h3 className="font-semibold text-lg mb-2" style={{ color: passData.foregroundColor }}>
                        {passData.description}
                      </h3>
                    ) : (
                      <h3 className="font-semibold text-lg mb-2 opacity-50" style={{ color: passData.foregroundColor }}>
                        Pass Title
                      </h3>
                    )}

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs" style={{ color: passData.labelColor }}>MEMBER ID</span>
                        <span className="text-sm font-mono" style={{ color: passData.foregroundColor }}>1234567890</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs" style={{ color: passData.labelColor }}>VALID UNTIL</span>
                        <span className="text-sm font-mono" style={{ color: passData.foregroundColor }}>12/31/2025</span>
                      </div>
                    </div>

                    {/* Barcode placeholder */}
                    <div className="mt-4 pt-4 border-t" style={{ borderColor: passData.foregroundColor + '20' }}>
                      <div className="text-center">
                        <div
                          className="inline-block px-4 py-2 rounded text-xs font-mono"
                          style={{
                            backgroundColor: passData.foregroundColor + '10',
                            color: passData.foregroundColor
                          }}
                        >
                          ████ ██ ████ ██ ████
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Real-time preview of your Apple Wallet pass
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}