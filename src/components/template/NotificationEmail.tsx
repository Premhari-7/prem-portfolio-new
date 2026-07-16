import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
} from "@react-email/components";

interface NotificationEmailProps {
  userName: string;
  userEmail: string;
  contactReason: string;
  userMessage: string;
}

export function NotificationEmail({
  userName,
  userEmail,
  contactReason,
  userMessage,
}: NotificationEmailProps) {
  return (
    <Html>
      <Head />

      <Body style={main}>
        <Container style={container}>
          <Text style={heading}>
            New Portfolio Contact 🚀
          </Text>

          <Text style={text}>
            Someone submitted your portfolio contact form.
          </Text>

          <Section style={box}>
            <Text style={item}>
              <strong>Name:</strong> {userName}
            </Text>

            <Text style={item}>
              <strong>Email:</strong> {userEmail}
            </Text>

            <Text style={item}>
              <strong>Reason:</strong> {contactReason}
            </Text>

            <Text style={messageTitle}>
              Message:
            </Text>

            <Section style={messageBox}>
              <Text style={messageText}>
                {userMessage}
              </Text>
            </Section>
          </Section>

          <Text style={footer}>
            Reply directly to this email to contact the sender.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#050816",
  padding: "30px",
  fontFamily: "Arial, sans-serif",
};

const container = {
  backgroundColor: "#0f172a",
  borderRadius: "16px",
  padding: "30px",
  maxWidth: "650px",
  margin: "0 auto",
};

const heading = {
  color: "#a855f7",
  fontSize: "30px",
  fontWeight: "bold",
};

const text = {
  color: "#cbd5e1",
  fontSize: "15px",
};

const box = {
  backgroundColor: "#111827",
  padding: "20px",
  borderRadius: "12px",
  marginTop: "20px",
};

const item = {
  color: "#f8fafc",
  fontSize: "15px",
  marginBottom: "10px",
};

const messageTitle = {
  color: "#ffffff",
  fontSize: "16px",
  marginTop: "20px",
  fontWeight: "bold",
};

const messageBox = {
  backgroundColor: "#1e293b",
  padding: "15px",
  borderRadius: "10px",
};

const messageText = {
  color: "#e2e8f0",
  lineHeight: "24px",
};

const footer = {
  color: "#94a3b8",
  marginTop: "25px",
  fontSize: "13px",
};