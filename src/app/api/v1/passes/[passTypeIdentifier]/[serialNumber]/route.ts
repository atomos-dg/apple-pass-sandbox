import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

interface Params {
  passTypeIdentifier: string
  serialNumber: string
}

// GET: Get latest version of pass
export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { passTypeIdentifier, serialNumber } = params
    const authToken = request.headers.get('Authorization')?.replace('ApplePass ', '')
    const ifModifiedSince = request.headers.get('If-Modified-Since')

    if (!authToken) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    // Get pass with pass type info
    const { data: pass, error: passError } = await supabase
      .from('passes')
      .select(`
        *,
        pass_types!inner (
          pass_type_identifier,
          template_data,
          style,
          background_color,
          foreground_color,
          label_color,
          logo_text
        )
      `)
      .eq('serial_number', serialNumber)
      .eq('pass_types.pass_type_identifier', passTypeIdentifier)
      .single()

    if (passError || !pass) {
      return NextResponse.json({ error: 'Pass not found' }, { status: 404 })
    }

    // Verify authentication token
    if (pass.authentication_token !== authToken) {
      return NextResponse.json({ error: 'Invalid authentication token' }, { status: 401 })
    }

    // Check if pass has been modified since client's last request
    if (ifModifiedSince) {
      const clientLastModified = new Date(ifModifiedSince)
      const passLastModified = new Date(pass.updated_at)

      if (passLastModified <= clientLastModified) {
        return new NextResponse(null, { status: 304 }) // Not Modified
      }
    }

    // TODO: Generate actual .pkpass file using passkit-generator
    // For now, return pass data in JSON format for development
    const passData = {
      formatVersion: 1,
      passTypeIdentifier: pass.pass_types.pass_type_identifier,
      serialNumber: pass.serial_number,
      teamIdentifier: process.env.APPLE_TEAM_IDENTIFIER,
      webServiceURL: process.env.VERCEL_URL || 'https://localhost:3000',
      authenticationToken: pass.authentication_token,
      ...pass.pass_types.template_data,
      ...pass.data,
      backgroundColor: pass.pass_types.background_color,
      foregroundColor: pass.pass_types.foreground_color,
      labelColor: pass.pass_types.label_color,
      logoText: pass.pass_types.logo_text,
    }

    const response = NextResponse.json(passData)
    response.headers.set('Last-Modified', pass.updated_at)
    response.headers.set('Content-Type', 'application/vnd.apple.pkpass')

    return response
  } catch (error) {
    console.error('Get pass error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}