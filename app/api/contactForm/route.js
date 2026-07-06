import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT = 'verwaltung@bund-fib.de';
const SENDER = 'bundfib.webseite@gmail.com';

/** Escape user input before interpolating it into the HTML mail body. */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Receives submissions from the contact form (components/KontaktFormular.jsx)
 * and forwards them via Gmail to the association's admin address.
 *
 * The form contains a hidden "url" field as a honeypot: humans leave it
 * empty, spam bots tend to fill it. Filled honeypot => request is rejected.
 *
 * Required environment variable: EMAIL_PW (Gmail app password, see README).
 */
export async function POST(request) {
  try {
    const body = await request.json();

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const honeypot = typeof body.url === 'string' ? body.url : '';

    // Honeypot filled => bot. Respond with 400 without sending anything.
    if (honeypot !== '') {
      return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, E-Mail und Nachricht sind erforderlich.' },
        { status: 400 }
      );
    }

    if (name.length > 200 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ message: 'Eingabe zu lang.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: 'Ungültige E-Mail-Adresse.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SENDER,
        pass: process.env.EMAIL_PW,
      },
    });

    await transporter.sendMail({
      from: SENDER,
      to: RECIPIENT,
      replyTo: email,
      subject: 'Neue Anfrage über Webseite',
      text: `Name: ${name}\nEmail: ${email}\nNachricht:\n${message}`,
      html: `
        <div>
          Name: ${escapeHtml(name)} <br />
          Email: ${escapeHtml(email)} <br />
          Nachricht: ${escapeHtml(message).replace(/\n/g, '<br />')}
        </div>
      `,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
