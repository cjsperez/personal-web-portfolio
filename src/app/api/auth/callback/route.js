import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID)
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  )

  try {
    const { tokens } = await oauth2Client.getToken(code)
    console.log('Success! Tokens:', {
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
    })

    return NextResponse.json({ tokens })
  } catch (error) {
    console.error('Error getting tokens:', error)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
