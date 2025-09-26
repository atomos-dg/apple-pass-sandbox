import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍎 Apple Pass Sandbox
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Design, test, and deploy Apple Wallet passes with full notification and redemption capabilities
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link href="/dashboard" className="group">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group-hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pass Designer</h3>
              <p className="text-gray-600">
                Create and customize Apple Wallet passes with visual design tools and real-time preview
              </p>
            </div>
          </Link>

          <Link href="/dashboard/passes" className="group">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group-hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎫</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pass Management</h3>
              <p className="text-gray-600">
                Manage your passes, track installations, and monitor device registrations
              </p>
            </div>
          </Link>

          <Link href="/dashboard/notifications" className="group">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group-hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔔</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Push Notifications</h3>
              <p className="text-gray-600">
                Send push notifications and updates to devices with installed passes
              </p>
            </div>
          </Link>

          <Link href="/dashboard/coupons" className="group">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group-hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎟️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coupon Redemption</h3>
              <p className="text-gray-600">
                Generate scannable coupons and track in-store redemptions with analytics
              </p>
            </div>
          </Link>

          <Link href="/dashboard/analytics" className="group">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group-hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600">
                Track pass performance, user engagement, and redemption metrics
              </p>
            </div>
          </Link>

          <Link href="/dashboard/testing" className="group">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group-hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing Dashboard</h3>
              <p className="text-gray-600">
                Comprehensive testing environment for all pass features and workflows
              </p>
            </div>
          </Link>
        </div>

        {/* Quick Start */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Create your first Apple Wallet pass in minutes with our intuitive design tools
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Launch Dashboard →
          </Link>
        </div>

        {/* Status Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-green-800 font-medium">API Endpoints Active</span>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-blue-800 font-medium">Database Connected</span>
            </div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <span className="text-purple-800 font-medium">PassKit Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
