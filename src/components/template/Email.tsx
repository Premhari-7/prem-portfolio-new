/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Img,
  Link,
  Row,
  Column,
} from "@react-email/components";

import { selfData } from "@/constant";

interface EmailTemplateProps {
  userName: string;
  userEmail: string;
  contactReason: string;
  userMessage: string;
}

export function EmailTemplate({
  userName,
  contactReason,
  userMessage,
}: EmailTemplateProps) {
  const socials = [
    {
      name: "GitHub",
      url: `https://github.com/${selfData.socials_username.github}`,
      icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
    {
      name: "LinkedIn",
      url: `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
    },
    {
      name: "LeetCode",
      url: `https://leetcode.com/${selfData.socials_username.leetcode}`,
      icon:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    },
    {
      name: "Instagram",
      url: `https://instagram.com/${selfData.socials_username.instagram}`,
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    },
  ];

  return (
    <Html>
      <Head />

      <Body style={main}>
        <Container style={container}>
          {/* HEADER */}
          <Section style={header}>
            <Row>
              <Column width={60}>
                <div style={logoWrapper}>
                  <Text style={logoEmoji}>👋</Text>
                </div>
              </Column>

              <Column>
                <Text style={brandText}>Prem Hari S</Text>

                <Text style={subText}>
                  Portfolio Communication Confirmation
                </Text>
              </Column>
            </Row>
          </Section>

          {/* HERO SECTION */}
          <Section style={heroSection}>
            <Text style={heading}>
              Your Message Has Been Received 🚀
            </Text>

            <Text style={text}>
              Hello {userName},
            </Text>

            <Text style={text}>
              Thank you sincerely for taking the time to connect with me through
              my portfolio website.
            </Text>

            <Text style={text}>
              I truly appreciate your interest and your message has been safely
              delivered to my inbox. I’ll review it carefully and get back to
              you as soon as possible.
            </Text>

            <Text style={text}>
              In the meantime, feel free to explore my professional profiles and
              connect with me across platforms below.
            </Text>
          </Section>

          {/* DETAILS */}
          <Section style={detailsBox}>
            <Text style={detailItem}>
              <strong>Discussion Category</strong>
              <br />
              {contactReason}
            </Text>

            <Text style={messageTitle}>
              Your Message
            </Text>

            <Section style={messageBox}>
              <Text style={messageText}>
                {userMessage}
              </Text>
            </Section>
          </Section>

          {/* CONNECT */}
          <Section style={connectSection}>
            <Text style={connectTitle}>
              Let’s Stay Connected
            </Text>

            <Text style={connectText}>
              You can explore my work, projects, and professional journey
              through the platforms below.
            </Text>
          </Section>

          {/* SOCIAL LINKS */}
          <Section style={socialSection}>
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
            >
              <tbody>
                <tr>
                  {socials.map((social) => (
                    <td
                      key={social.name}
                      align="center"
                      style={socialIconCol}
                    >
                      <Link href={social.url}>
                        <Img
                          src={social.icon}
                          alt={social.name}
                          width="34"
                          height="34"
                          style={socialIcon}
                        />
                      </Link>

                      <Text style={socialName}>
                        {social.name}
                      </Text>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Section>

          {/* FOOTER */}
          <Section style={footer}>
            <Text style={footerText}>
              Thank you once again for reaching out to Prem Hari S Portfolio.
            </Text>

            <Text style={footerText}>
              This is an automated confirmation email acknowledging your
              message submission.
            </Text>

            <Text style={footerCopyright}>
              © 2026 Prem Hari S. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/* =========================
   STYLES
========================= */

const main = {
  backgroundColor: "#050816",
  padding: "24px 12px",
  fontFamily: "Arial, sans-serif",
};

const container = {
  background:
    "linear-gradient(135deg, #0f172a 0%, #111827 50%, #1e1b4b 100%)",
  borderRadius: "20px",
  padding: "24px",
  maxWidth: "680px",
  margin: "0 auto",
  border: "1px solid #312e81",
};

const header = {
  marginBottom: "30px",
};

const logoWrapper = {
  width: "46px",
  height: "46px",
  borderRadius: "50%",
  backgroundColor: "#7c3aed",
  textAlign: "center" as const,
};

const logoEmoji = {
  fontSize: "24px",
  lineHeight: "46px",
  margin: "0",
};

const brandText = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0",
};

const subText = {
  color: "#94a3b8",
  fontSize: "13px",
  marginTop: "6px",
};

const heroSection = {
  marginBottom: "28px",
};

const heading = {
  fontSize: "26px",
  fontWeight: "700",
  color: "#a855f7",
  marginBottom: "18px",
  lineHeight: "36px",
  textAlign: "left" as const,
};

const text = {
  color: "#dbe4ee",
  fontSize: "15px",
  lineHeight: "30px",
  marginBottom: "14px",
};

const detailsBox = {
  backgroundColor: "#111827",
  borderRadius: "14px",
  padding: "22px",
  border: "1px solid #374151",
};

const detailItem = {
  color: "#f8fafc",
  fontSize: "15px",
  marginBottom: "16px",
  lineHeight: "28px",
};

const messageTitle = {
  color: "#ffffff",
  fontSize: "17px",
  fontWeight: "700",
  marginBottom: "12px",
};

const messageBox = {
  backgroundColor: "#1e293b",
  borderRadius: "10px",
  padding: "18px",
};

const messageText = {
  color: "#e2e8f0",
  fontSize: "14px",
  lineHeight: "26px",
};

const connectSection = {
  marginTop: "34px",
  marginBottom: "22px",
};

const connectTitle = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "700",
  marginBottom: "10px",
};

const connectText = {
  color: "#cbd5e1",
  fontSize: "14px",
  lineHeight: "26px",
};

const socialSection = {
  marginBottom: "28px",
};

const socialIconCol = {
  padding: "10px",
};

const socialIcon = {
  display: "block",
  margin: "0 auto",
};

const socialName = {
  color: "#94a3b8",
  fontSize: "12px",
  marginTop: "8px",
};

const footer = {
  borderTop: "1px solid #1e293b",
  paddingTop: "22px",
};

const footerText = {
  color: "#94a3b8",
  fontSize: "12px",
  textAlign: "center" as const,
  marginBottom: "8px",
  lineHeight: "22px",
};

const footerCopyright = {
  color: "#64748b",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "14px",
};