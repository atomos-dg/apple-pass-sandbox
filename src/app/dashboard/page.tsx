'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [stats] = useState({
    totalPasses: 0,
    activeDevices: 0,
    notifications: 0,
    redemptions: 0
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">🍎 Apple Pass Sandbox</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Dashboard</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Dashboard
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage your Apple Wallet passes and monitor their performance
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🎫</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Passes</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.totalPasses}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📱</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Devices</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.activeDevices}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🔔</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Notifications</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.notifications}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🎟️</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Redemptions</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.redemptions}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <Link
                  href="/dashboard/designer"
                  className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">✨</span>
                    <div>
                      <p className="font-medium text-gray-900">Create New Pass</p>
                      <p className="text-sm text-gray-500">Design a new Apple Wallet pass</p>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </Link>

                <Link
                  href="/dashboard/passes"
                  className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📋</span>
                    <div>
                      <p className="font-medium text-gray-900">Manage Passes</p>
                      <p className="text-sm text-gray-500">View and edit existing passes</p>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </Link>

                <Link
                  href="/dashboard/notifications"
                  className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📤</span>
                    <div>
                      <p className="font-medium text-gray-900">Send Notification</p>
                      <p className="text-sm text-gray-500">Push updates to devices</p>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">System Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">API Endpoints</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Operational</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">Database</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Connected</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">Apple Certificates</span>
                  </div>
                  <span className="text-sm text-yellow-600 font-medium">Not Configured</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">Push Notifications</span>
                  </div>
                  <span className="text-sm text-yellow-600 font-medium">Not Configured</span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/dashboard/setup"
                  className="text-sm text-blue-600 hover:text-blue-500 font-medium"
                >
                  Configure Apple Certificates →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="text-center py-12">
              <span className="text-4xl mb-4 block">📊</span>
              <h4 className="text-lg font-medium text-gray-900 mb-2">No Recent Activity</h4>
              <p className="text-gray-500 mb-6">
                Start by creating your first Apple Wallet pass to see activity here
              </p>
              <Link
                href="/dashboard/designer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Create Your First Pass
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}