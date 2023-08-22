import { EmailTemplate } from '../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import fs from 'fs'
import path from 'path';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const pdfFilePath = path.join(__dirname, '../../../../../public',"static","petFile.pdf");
  const pdfFileBuffer =  fs.readFileSync(pdfFilePath)

  const csvFilePath = path.join(__dirname, '../../../../../public',"static","dogsList.csv");
  const csvFIleBuffer =  fs.readFileSync(csvFilePath)

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['haison.ohara@outlook.com'],
      subject: 'Developer Success Engineer - Take-Home Challenge',
      react: EmailTemplate({ repoLink: 'https://github.com/HaisonOhara/Resend-attachments' }),
      attachments: [
        {
          content: pdfFileBuffer,
          path: pdfFilePath,
          filename: 'petFile.pdf',
        },
        {
          content: csvFIleBuffer,
          path: csvFilePath,
          filename: 'dogsList.csv',
        }
      ],
      text: 'Sending Email with attachments using Resend'
      
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
