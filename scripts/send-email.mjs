import 'dotenv/config';
import { Resend } from 'resend';

const { RESEND_API_KEY, MAIL_FROM, MAIL_TO } = process.env;

function fail(msg) {
  console.error(`Erreur configuration: ${msg}`);
  console.error('Assurez-vous de définir RESEND_API_KEY, MAIL_FROM, MAIL_TO dans votre fichier .env');
  process.exit(1);
}

if (!RESEND_API_KEY) fail('RESEND_API_KEY manquant.');
if (!MAIL_FROM) fail('MAIL_FROM manquant.');
if (!MAIL_TO) fail('MAIL_TO manquant.');

const resend = new Resend(RESEND_API_KEY);

async function main() {
  try {
    const result = await resend.emails.send({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });
    console.log('Email envoyé:', result);
  } catch (err) {
    console.error('Échec envoi email:', err?.message || err);
    process.exit(1);
  }
}

main();
