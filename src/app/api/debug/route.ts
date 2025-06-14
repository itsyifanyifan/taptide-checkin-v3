import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'edge'

export async function GET() {
  try {
    return NextResponse.json({
      status: 'ok',
      environment: {
        nodeEnv: process.env.NODE_ENV,
        databaseUrl: process.env.DATABASE_URL ? 'Set (but hidden for security)' : 'Not set',
        vercelEnv: process.env.VERCEL_ENV,
        vercelRegion: process.env.VERCEL_REGION,
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 500 })
  }
} 