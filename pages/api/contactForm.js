import { type } from 'os';

let nodemailer = require('nodemailer');

export default function sendMail(req, res) {
  // Define the transporter email account
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bundfib.webseite@gmail.com',
      pass: process.env.EMAIL_PW,
    },
    secure: true,
  });
  console.log(typeof req.body);

  // Define mail that is sent to website owner
  const mailData = {
    from: 'bundfib.webseite@gmail.com',
    to: 'pavel.kickler@gmail.com',
    subject: 'Neue Anfrage über Webseite',
    text: req.body.name,
    html: `
      <div>
        Name: ${req.body.name} <br /> Email: ${req.body.email} <br /> Nachricht: ${req.body.message}
      </div>
    `,
  };
  // Send mail
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).json({ message: 'Success' });
}
