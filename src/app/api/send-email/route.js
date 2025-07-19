import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const { name, email, message } = await req.json()

  // Validate input
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    // Validate environment variables
    if (!process.env.GMAIL_HOST || !process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      return NextResponse.json({ error: 'Email configuration is missing' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.GMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER, // Note: Fixed typo from GMAIL_USER to GMAIL_USER
        pass: process.env.GMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`, // Using your authorized email as sender
      replyTo: email, // So replies go to the submitter
      to: 'crisjahn.perez09@gmail.com',
      subject: `New message from ${name}`,
      text: message,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Email sent', info: info.response },
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
