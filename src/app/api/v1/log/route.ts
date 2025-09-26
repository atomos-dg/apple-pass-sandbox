import { NextRequest, NextResponse } from 'next/server'

// POST: Log messages from devices (Apple's requirement)
export async function POST(request: NextRequest) {
  try {
    const logs = await request.json()

    // Log to console for development
    console.log('Device logs:', logs)

    // TODO: In production, you might want to store these logs in a database
    // or send them to a logging service

    return NextResponse.json({ message: 'Logs received' }, { status: 200 })
  } catch (error) {
    console.error('Logging error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}