'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PassesManagement() {
  const [passes] = useState([
    {
      id: '1',
      name: 'VIP Membership',
      type: 'Store Card',
      status: 'Active',
      installations: 23,
      lastUpdated: '2025-09-25',
      color: '#4F46E5'
    },
    {
      id: '2',
      name: 'Concert Ticket',
      type: 'Event Ticket',
      status: 'Active',
      installations: 157,
      lastUpdated: '2025-09-24',
      color: '#EF4444'
    },
    {
      id: '3',
      name: 'Coffee Loyalty',
      type: 'Store Card',
      status: 'Draft',
      installations: 0,
      lastUpdated: '2025-09-23',
      color: '#F59E0B'
    }
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800'
      case 'Inactive':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Store Card':
        return '💳'
      case 'Event Ticket':
        return '🎪'
      case 'Coupon':
        return '🎟️'
      case 'Boarding Pass':
        return '✈️'
      default:
        return '🎫'
    }
  }

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
                <span className="text-blue-600 px-3 py-2 text-sm font-medium">Passes</span>
              </nav>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Pass Management
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              View and manage all your Apple Wallet passes
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Link
              href="/dashboard/designer"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              ✨ Create New Pass
            </Link>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl">🎫</span>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Passes</dt>
                    <dd className="text-lg font-medium text-gray-900">{passes.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl">✅</span>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Passes</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {passes.filter(p => p.status === 'Active').length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Installs</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {passes.reduce((sum, p) => sum + p.installations, 0)}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Passes Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {passes.map((pass) => (
              <li key={pass.id}>
                <div className="px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12">
                      <div
                        className="h-12 w-12 rounded-lg flex items-center justify-center text-white text-xl"
                        style={{ backgroundColor: pass.color }}
                      >
                        {getTypeIcon(pass.type)}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <p className="text-lg font-medium text-gray-900 mr-2">{pass.name}</p>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(pass.status)}`}>
                          {pass.status}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <span>{pass.type}</span>
                        <span className="mx-2">•</span>
                        <span>{pass.installations} installations</span>
                        <span className="mx-2">•</span>
                        <span>Updated {pass.lastUpdated}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                      Edit
                    </button>
                    <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                      View
                    </button>
                    <button className="text-green-600 hover:text-green-500 text-sm font-medium">
                      Download
                    </button>
                    <div className="flex-shrink-0">
                      <button className="bg-white rounded-full flex items-center text-gray-400 hover:text-gray-600">
                        <span className="sr-only">Open options</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {passes.length === 0 && (
          <div className="bg-white shadow rounded-lg p-12 text-center">
            <span className="text-6xl mb-4 block">🎫</span>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No passes yet</h3>
            <p className="text-gray-500 mb-6">
              Get started by creating your first Apple Wallet pass
            </p>
            <Link
              href="/dashboard/designer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Create Your First Pass
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}