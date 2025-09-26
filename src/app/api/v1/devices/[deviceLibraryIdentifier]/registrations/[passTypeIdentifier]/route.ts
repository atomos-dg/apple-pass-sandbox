import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

interface Params {
  deviceLibraryIdentifier: string
  passTypeIdentifier: string
}

// GET: Get updatable passes for device
export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { deviceLibraryIdentifier, passTypeIdentifier } = params
    const { searchParams } = new URL(request.url)
    const passesUpdatedSince = searchParams.get('passesUpdatedSince')

    // Get device
    const { data: device, error: deviceError } = await supabase
      .from('devices')
      .select('id')
      .eq('device_library_identifier', deviceLibraryIdentifier)
      .single()

    if (deviceError || !device) {
      return NextResponse.json({ error: 'Device not found' }, { status: 404 })
    }

    // Build query for passes
    let query = supabase
      .from('registrations')
      .select(`
        passes!inner (
          serial_number,
          updated_at,
          pass_types!inner (
            pass_type_identifier
          )
        )
      `)
      .eq('device_id', device.id)
      .eq('passes.pass_types.pass_type_identifier', passTypeIdentifier)

    // Filter by update time if provided
    if (passesUpdatedSince) {
      const updateTime = new Date(passesUpdatedSince).toISOString()
      query = query.gt('passes.updated_at', updateTime)
    }

    const { data: registrations, error: registrationsError } = await query

    if (registrationsError) {
      return NextResponse.json({ error: 'Failed to fetch passes' }, { status: 500 })
    }

    // Extract serial numbers and last updated timestamp
    const serialNumbers = registrations.map(reg => reg.passes.serial_number)
    const lastUpdated = registrations.reduce((latest, reg) => {
      const passUpdated = new Date(reg.passes.updated_at).getTime()
      return Math.max(latest, passUpdated)
    }, 0)

    if (serialNumbers.length === 0) {
      return NextResponse.json({}, { status: 204 }) // No Content
    }

    return NextResponse.json({
      serialNumbers,
      lastUpdated: new Date(lastUpdated).toISOString()
    })
  } catch (error) {
    console.error('Get passes error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}