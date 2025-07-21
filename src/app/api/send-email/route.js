import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const { name, email, message } = await req.json()

  // Validate input (same as your Nodemailer version)
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    // Validate environment variables
    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_FROM) {
      return NextResponse.json({ error: 'Email configuration is missing' }, { status: 500 })
    }

    // Send email with Resend (replaces Nodemailer logic)
    const { data, error } = await resend.emails.send({
      from: `"${name}" <${process.env.EMAIL_FROM}>`, // Same sender format
      reply_to: email, // replyTo becomes reply_to in Resend
      to: 'crisjahn.perez09@gmail.com', // Your recipient
      subject: `New message from ${name}`,
      text: message,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email', details: error }, { status: 500 })
    }

    // Same success response structure
    return NextResponse.json(
      {
        success: true,
        message: 'Email sent',
        info: data, // Resend's response data
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}
