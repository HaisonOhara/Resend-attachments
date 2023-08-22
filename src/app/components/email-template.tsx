import * as React from 'react';
import { Button } from '@react-email/button';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';

import {
  Body,
  Container,
  Head,
  Img,
  Link,
  Preview,
  Section,
} from '@react-email/components';

interface EmailTemplateProps {
  repoLink: string;
}
const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  width: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
};

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
};

const button = {
  fontSize: '20px',
  color: '#6a737d',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  padding: '0.75em 1.5em',
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  repoLink,
}) => (
    <Html>
    <Head />
    <Preview>
    Haison Ohara already finished the Take-Home Challenge
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={title}>
          <strong>@Resend</strong>, Haison Ohara already finished the Take-Home Challenge
        </Text>

        <Section style={section}>
          <Text style={text}>
            Hey <strong>Resend</strong>!
          </Text>
          <Text style={text}>
          Please check the repo with Challenge Solution. This Email was sent using Resend, as you can see i sent 2 attached files too.
          </Text>
          <Button href = {repoLink} style={button}>View Repo</Button>
        </Section>
        <Text style={footer}>
          Haison Ohara - haison.ohara@outlook.com
        </Text>
      </Container>
    </Body>
  </Html>
);
