import * as React from 'react';
import { Button } from '@react-email/button';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Tailwind } from '@react-email/tailwind';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <Tailwind
  config={{
    theme: {
      extend: {
        colors: {
          brand: '#007291',
        },
      },
    },
  }}
>
  <div>
       <Html lang="en">
      <Text>Hi {firstName} </Text>
      <Hr />
      <Button href="https://example.com"  className="bg-brand px-3 py-2 font-medium leading-4 text-white" >Click me</Button>
    </Html>
  </div>
</Tailwind>
);
