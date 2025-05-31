import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();

    // Define the transporter email account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bundfib.webseite@gmail.com',
        pass: process.env.EMAIL_PW,
      },
      secure: true,
    });

    // Define mail that is sent to website <owner></owner>
    const mailData = {
      from: 'bundfib.webseite@gmail.com',
      to: 'verwaltung@bund-fib.de',
      subject: 'Neue Anfrage über Webseite',
      text: body.name,
      html: `
        <div>
          Name: ${body.name} <br /> Email: ${body.email} <br /> Nachricht: ${body.message}
        </div>
      `,
    };

    // Send mail if body.url is empty
    if (body.url === '') {
      await transporter.sendMail(mailData);
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    }

    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
