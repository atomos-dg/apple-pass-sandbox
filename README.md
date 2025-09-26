# 🍎 Apple Pass Sandbox

A comprehensive platform for designing, testing, and deploying Apple Wallet passes with full notification and redemption capabilities.

[![Deploy](https://github.com/atomos-dg/apple-pass-sandbox/actions/workflows/deploy.yml/badge.svg)](https://github.com/atomos-dg/apple-pass-sandbox/actions/workflows/deploy.yml)
[![Code Quality](https://github.com/atomos-dg/apple-pass-sandbox/actions/workflows/code-quality.yml/badge.svg)](https://github.com/atomos-dg/apple-pass-sandbox/actions/workflows/code-quality.yml)

## 🚀 Live Demo

- **Production**: https://apple-pass-sandbox-liubfjuw1.vercel.app
- **Dashboard**: https://apple-pass-sandbox-liubfjuw1.vercel.app/dashboard

## ✨ Features

### 📱 Pass Designer
- Visual drag-drop interface for all pass types (boarding pass, event ticket, coupon, etc.)
- Real-time preview with Apple Wallet emulation
- Support for images, logos, icons, barcodes, QR codes
- Custom fields, buttons, and links configuration
- Template library for quick start

### 🎫 Pass Management
- Pass type configuration and templates
- Serial number generation and tracking
- Certificate management interface
- Pass distribution via QR codes/links

### 📱 Device Integration
- Pass installation workflows
- Device registration tracking
- Pass status monitoring (installed, updated, removed)

### 🔔 Notifications & Updates
- Real-time pass updates
- Scheduled notifications
- Location-based triggers
- Custom push notification campaigns

### 🎟️ Coupon & Redemption
- Scannable coupon generation
- In-store redemption tracking
- Usage analytics and reporting
- Expiration and validity management

### 🧪 Testing Dashboard
- Device simulation environment
- Pass lifecycle testing
- Notification testing interface
- Analytics and metrics dashboard

## 🛠 Tech Stack

- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Edge Functions)
- **Deployment**: Vercel with automatic CI/CD
- **PassKit Libraries**:
  - `passkit-generator`: Pass creation engine
  - `passkit-visual-designer`: Web-based design interface
  - `passkit-webservice-toolkit`: Apple-compliant web services
  - `hapns`: Apple Push Notifications

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Yarn or npm
- Apple Developer Account (for production passes)
- Supabase account
- Vercel account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/atomos-dg/apple-pass-sandbox.git
   cd apple-pass-sandbox
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Apple Developer Configuration
   APPLE_PASS_TYPE_IDENTIFIER=pass.com.yourcompany.passtype
   APPLE_TEAM_IDENTIFIER=your_team_id
   APPLE_CERTIFICATE_PATH=path/to/certificate.p12
   APPLE_CERTIFICATE_PASSWORD=certificate_password

   # Apple Push Notifications
   APPLE_PUSH_CERT_PATH=path/to/push_cert.p12
   APPLE_PUSH_KEY_PATH=path/to/push_key.p8
   APPLE_PUSH_KEY_ID=your_key_id
   ```

4. **Start the development server**
   ```bash
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── api/v1/                 # Apple PassKit API endpoints
│   │   ├── devices/           # Device registration endpoints
│   │   ├── passes/            # Pass delivery endpoints
│   │   └── log/               # Device logging endpoint
│   ├── dashboard/             # Dashboard UI pages
│   │   ├── designer/          # Pass designer interface
│   │   ├── passes/            # Pass management
│   │   ├── notifications/     # Push notification center
│   │   └── analytics/         # Analytics dashboard
│   └── page.tsx               # Landing page
├── lib/
│   ├── supabase.ts           # Supabase client configuration
│   └── types.ts              # TypeScript type definitions
└── components/               # Reusable UI components
```

## 🔗 API Endpoints

### Apple PassKit Web Service (Compliant with Apple's Specification)

- `POST /api/v1/devices/{deviceId}/registrations/{passType}/{serial}` - Register device for pass updates
- `DELETE /api/v1/devices/{deviceId}/registrations/{passType}/{serial}` - Unregister device
- `GET /api/v1/devices/{deviceId}/registrations/{passType}` - Get passes for device
- `GET /api/v1/passes/{passType}/{serial}` - Get latest pass
- `POST /api/v1/log` - Device error logging

## 🗄 Database Schema

The project uses Supabase with the following main tables:

- `users` - User accounts and authentication
- `pass_types` - Pass type definitions and templates
- `passes` - Individual pass instances
- `devices` - User devices and registration tokens
- `registrations` - Device-to-pass relationships
- `notifications` - Push notification history
- `redemptions` - Coupon usage tracking

## 🚀 Deployment

### Automatic Deployment (Recommended)

The project is configured for automatic deployment via GitHub Actions:

1. **Push to main branch** - Automatically deploys to production
2. **Create pull request** - Creates preview deployment
3. **Merge PR** - Triggers production deployment

### Manual Deployment

```bash
# Deploy to Vercel
vercel deploy

# Deploy to production
vercel deploy --prod
```

## 🧪 Development

### Available Scripts

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Run linting
yarn lint

# Type checking (when configured)
yarn type-check
```

### Code Quality

The project includes automated code quality checks:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking
- **Security audits** for dependency vulnerabilities

## 🔒 Apple Developer Setup

To use this sandbox with real Apple Wallet passes, you'll need:

1. **Apple Developer Program** membership
2. **Pass Type ID** certificate
3. **Apple Push Notification** certificate
4. **Web Service URL** configuration

See the [Apple Developer Documentation](https://developer.apple.com/wallet/) for detailed setup instructions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](https://docs.claude.com)
- 🐛 [Issue Tracker](https://github.com/atomos-dg/apple-pass-sandbox/issues)
- 💬 [Discussions](https://github.com/atomos-dg/apple-pass-sandbox/discussions)

## 🙏 Acknowledgments

- [Apple PassKit Documentation](https://developer.apple.com/documentation/passkit)
- [Alexander Cerutti's PassKit Libraries](https://github.com/alexandercerutti)
- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Vercel](https://vercel.com/)

---

Built with ❤️ using [Claude Code](https://claude.ai/code)