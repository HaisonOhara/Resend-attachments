# Resend-attachments ☕️

# Companion Tutorial ✨
### Prerequisites

To get the most out of this guide, you’ll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)
- [NextJs basic app](https://nextjs.org/docs/getting-started/installation)

### 1. Install

Get the Resend Node.js SDK.

`npm install resend`

### 2. Create an email template

Start by creating your email template on `components/email-template.tsx`.

```jsx
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
```

### 3. Send email using React

Create an API file under `pages/api/send.ts` if you’re using the [Pages Router](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) or create a route file under `app/api/send/route.ts` if you’re using the [App Router](https://nextjs.org/docs/app/building-your-application/routing/router-handlers). For this example we used App Router.

Import the React email template and send an email using the `react` parameter.

```jsx
import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
```

```jsx
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
```

### 4. Send email with attachments

If you want to send email with attachments all you need to do is use attachments property.

```jsx
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
      from: 'Name <onboarding@resend.dev>',
      to: ['some.email@outlook.com'],
      subject: 'some subject',
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
```

As you can see inside attachments the **filename** key holds the name of the file you want to attach, while the **content** key should hold the contents of that file and path contains the **path** leading to the file’s directory. it is advisable to use **fs** to read file path to avoid some problems with path references.

Do note that there's a maximum size limit for the attachments, with a maximum of 40 megabytes allowed per email.

For testing your code you can make a POST request to the endpoint created with NextJs. You can put your personal email as **to** property so you will be able to see the email. Or you can use Resend tests emails, you can check its details here:https://resend.com/docs/dashboard/emails/send-test-emails#test-delivered-emails

For practical examples of emails with attachments, you can consult : https://resend.com/docs/examples.

# Support Responses 📜
### I've been waiting 24 hours for my domain to be verified, why is it still pending?
When the status of your domain is "Pending" it means that Resend is still trying to verify it. Please note that it can take up to 72 hours for domain verification to be completed, if the verification fails fail  you'll receive an email from Resend.If it has been over 72 hours and your domain is still pending, you might need to delete and recreate your domain. You can see more details about emails domain here: https://resend.com/docs/dashboard/domains/introduction#understand-a-domain-status

### How do i create an email?
You can create an email through Resend using several programming languages, including Node.js, Python, Ruby, Go, Elixir, PHP, and more. Here's how you can generally do it:
- Initialize the Resend client with your <strong>RESEND_API_KEY</strong>.
- Use the send function of the emails service with the appropriate parameters: from, to, subject & html.

 Here's an example using Node.js:

![Screenshot from 2023-08-22 10-27-01](https://github.com/HaisonOhara/Resend-attachments/assets/39864254/4b304d75-5bdf-4cac-9700-066df5f4ad9a)


You can also set a '<strong>reply_to address</strong>' if you want to direct any responses to a different location.
Remember to use your actual Resend API key.
You can check more examples here: https://resend.com/docs/introduction#quickstart


### I  need to be able to receive emails from Resend. How do I do that?
Currently, the feature to receive emails directly within Resend is not available . However, there are some useful workarounds that allow you to manage replies and responses. You can set a reply_to address while sending an email that should receive any responses. This could be an existing inbox or even a Slack channel.
For example, if you want the responses to be directed to your personal email address, you can set that email as your <strong>reply_to address</strong>. Consequently, if a recipient replies to your email, it will be sent to the designated <strong>reply_to address</strong> .
Additionally, if you would like to receive responses in a Slack channel, you can set the <strong>reply_to as</strong> the email address of that Slack channel. 

You can check here fore more details: https://resend.com/docs/api-reference/emails/send-email
