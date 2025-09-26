import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

interface Params {
  deviceLibraryIdentifier: string
  passTypeIdentifier: string
  serialNumber: string
}

// POST: Register device for pass updates
export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { deviceLibraryIdentifier, passTypeIdentifier, serialNumber } = params
    const authToken = request.headers.get('Authorization')?.replace('ApplePass ', '')

    if (!authToken) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    // Verify pass exists and auth token is valid
    const { data: pass, error: passError } = await supabase
      .from('passes')
      .select('id, authentication_token')
      .eq('serial_number', serialNumber)
      .single()

    if (passError || !pass || pass.authentication_token !== authToken) {
      return NextResponse.json({ error: 'Pass not found or invalid token' }, { status: 401 })
    }

    // Get or create device
    const { data: device, error: deviceError } = await supabase
      .from('devices')
      .select('id')
      .eq('device_library_identifier', deviceLibraryIdentifier)
      .single()

    let deviceId = device?.id

    if (!device) {
      const { data: newDevice, error: createDeviceError } = await supabase
        .from('devices')
        .insert({
          device_library_identifier: deviceLibraryIdentifier,
        })
        .select('id')
        .single()

      if (createDeviceError) {
        return NextResponse.json({ error: 'Failed to create device' }, { status: 500 })
      }
      deviceId = newDevice.id
    }

    // Register device for this pass
    const { error: registrationError } = await supabase
      .from('registrations')
      .upsert({
        device_id: deviceId,
        pass_id: pass.id,
      })

    if (registrationError) {
      return NextResponse.json({ error: 'Failed to register device' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Device registered successfully' }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE: Unregister device from pass updates
export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { deviceLibraryIdentifier, serialNumber } = params
    const authToken = request.headers.get('Authorization')?.replace('ApplePass ', '')

    if (!authToken) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    // Verify pass exists and auth token is valid
    const { data: pass, error: passError } = await supabase
      .from('passes')
      .select('id, authentication_token')
      .eq('serial_number', serialNumber)
      .single()

    if (passError || !pass || pass.authentication_token !== authToken) {
      return NextResponse.json({ error: 'Pass not found or invalid token' }, { status: 401 })
    }

    // Get device
    const { data: device, error: deviceError } = await supabase
      .from('devices')
      .select('id')
      .eq('device_library_identifier', deviceLibraryIdentifier)
      .single()

    if (deviceError || !device) {
      return NextResponse.json({ error: 'Device not found' }, { status: 404 })
    }

    // Remove registration
    const { error: unregisterError } = await supabase
      .from('registrations')
      .delete()
      .eq('device_id', device.id)
      .eq('pass_id', pass.id)

    if (unregisterError) {
      return NextResponse.json({ error: 'Failed to unregister device' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Device unregistered successfully' }, { status: 200 })
  } catch (error) {
    console.error('Unregistration error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}