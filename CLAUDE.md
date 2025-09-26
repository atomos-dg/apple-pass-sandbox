# Apple Pass Sandbox - Development Tracking

## Project Overview
**Objective**: Create a comprehensive Apple Wallet Pass sandbox platform for designing, deploying, and testing various types of passes with full notification and update capabilities.

**Current Status**: Phase 1 - Foundation Setup (In Progress)

## Architecture Overview

### Tech Stack
- **Frontend**: Next.js with TypeScript on Vercel (serverless)
- **Backend**: Supabase (PostgreSQL + Edge Functions)
- **CI/CD**: GitHub → Vercel auto-deployment
- **Key Libraries**:
  - `passkit-generator`: Pass creation engine
  - `passkit-visual-designer`: Web-based design interface
  - `passkit-webservice-toolkit`: Apple-compliant web services
  - `hapns`: Apple Push Notifications

### Database Architecture (Supabase)
```sql
-- Core Tables
users              // User accounts and authentication
pass_types          // Pass type definitions and templates
passes              // Individual pass instances
devices             // User devices and registration tokens
registrations       // Device-to-pass relationships
notifications       // Push notification history
redemptions         // Coupon usage tracking
analytics           // Usage metrics and reporting
```

## Command Reference

### Development Commands
```bash
# Project setup
npm create next-app@latest apple-pass-sandbox --typescript --tailwind --app
cd apple-pass-sandbox
npm install

# Core PassKit libraries
npm install @walletpass/pass-js passkit-generator
npm install @supabase/supabase-js @supabase/ssr

# Development server
npm run dev

# Build and deployment
npm run build
npm run start

# Linting and type checking
npm run lint
npm run type-check
```

### Supabase Commands
```bash
# Initialize Supabase
npx supabase init
npx supabase start

# Database migrations
npx supabase migration new <migration_name>
npx supabase db push

# Generate types
npx supabase gen types typescript --local > src/types/database.ts
```

### Vercel Commands
```bash
# Deploy to Vercel
vercel deploy

# Production deployment
vercel --prod

# Environment variables
vercel env add <name>
vercel env list
```

## Progress Tracking

### Phase 1: Foundation Setup ✅ COMPLETED
- [x] Project planning and PRD creation
- [x] Next.js project initialization
- [x] Supabase project setup
- [x] GitHub repository with CI/CD
- [x] Database schema design
- [x] Core library installation
- [x] Basic API endpoints
- [x] Dashboard UI implementation
- [x] Production deployment

### Phase 2: Pass Generation Engine ⏳ IN PROGRESS
- [x] Visual designer UI
- [x] Pass style selection
- [x] Real-time preview
- [ ] Pass creation service integration
- [ ] Template system
- [ ] Certificate management
- [ ] .pkpass file generation

### Phase 3: Device Management (Pending)
- [x] Apple-compliant API endpoints structure
- [ ] Device registration testing
- [ ] Push notification service implementation
- [ ] Pass update mechanism testing
- [ ] Real device integration

### Phase 4: Advanced Features (Pending)
- [ ] Coupon redemption system
- [ ] Testing dashboard
- [ ] Analytics and reporting
- [ ] Performance optimization

## Issue Log

### Current Issues
- None at this time

### Resolved Issues
- None at this time

## Apple Developer Requirements

### Certificates Needed
- [ ] Apple Developer Program membership
- [ ] Pass Type ID certificate
- [ ] Apple Push Notification certificate
- [ ] WWDR (Worldwide Developer Relations) certificate

### Required Endpoints (Apple PassKit Web Service)
```
POST   /v1/devices/{deviceLibraryIdentifier}/registrations/{passTypeIdentifier}/{serialNumber}
DELETE /v1/devices/{deviceLibraryIdentifier}/registrations/{passTypeIdentifier}/{serialNumber}
GET    /v1/devices/{deviceLibraryIdentifier}/registrations/{passTypeIdentifier}
GET    /v1/passes/{passTypeIdentifier}/{serialNumber}
POST   /v1/log
```

## Environment Configuration

### Required Environment Variables
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Apple Certificates
APPLE_PASS_TYPE_IDENTIFIER=
APPLE_TEAM_IDENTIFIER=
APPLE_CERTIFICATE_PATH=
APPLE_CERTIFICATE_PASSWORD=

# Push Notifications
APPLE_PUSH_CERT_PATH=
APPLE_PUSH_KEY_PATH=
APPLE_PUSH_KEY_ID=

# Vercel
VERCEL_URL=
VERCEL_ENV=
```

## Testing Procedures

### Development Testing
- [ ] Local development server testing
- [ ] Supabase local development
- [ ] Pass generation testing
- [ ] API endpoint validation

### Production Testing
- [ ] End-to-end pass creation workflow
- [ ] Device installation testing
- [ ] Push notification delivery
- [ ] Coupon redemption flow

## Deployment Notes

### Vercel Configuration
- Auto-deployment from `main` branch
- Preview deployments for PR branches
- Environment variables configured
- Custom domain setup (if applicable)

### Supabase Configuration
- Row Level Security policies
- Database migrations
- Edge Functions deployment
- Real-time subscriptions

## Security Considerations

### Data Protection
- User data encryption
- Certificate secure storage
- API rate limiting
- Input validation and sanitization

### Apple Requirements
- Certificate rotation schedule
- Pass signing validation
- Web service authentication
- Push notification security

## Current Production URLs

### Live Application
- **Production Site**: https://apple-pass-sandbox-liubfjuw1.vercel.app
- **Dashboard**: https://apple-pass-sandbox-liubfjuw1.vercel.app/dashboard
- **Pass Designer**: https://apple-pass-sandbox-liubfjuw1.vercel.app/dashboard/designer
- **Pass Management**: https://apple-pass-sandbox-liubfjuw1.vercel.app/dashboard/passes

### API Endpoints (Live)
- **Device Registration**: `POST /api/v1/devices/{deviceId}/registrations/{passType}/{serial}`
- **Device Unregistration**: `DELETE /api/v1/devices/{deviceId}/registrations/{passType}/{serial}`
- **Get Updated Passes**: `GET /api/v1/devices/{deviceId}/registrations/{passType}`
- **Get Pass**: `GET /api/v1/passes/{passType}/{serial}`
- **Device Logs**: `POST /api/v1/log`

### Development Resources
- **Vercel Project**: https://vercel.com/christopher-ortegas-projects-1dc78691/apple-pass-sandbox
- **Supabase Dashboard**: https://supabase.com/dashboard/project/bqkmddmbtcuibkjmmugc

---

**Last Updated**: September 26, 2025
**Current Phase**: Phase 2 - Pass Generation Engine
**Next Milestone**: Implement actual pass generation with PassKit libraries