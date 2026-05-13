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
      icon: "https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png",
    },
    {
      name: "Instagram",
      url: `https://instagram.com/${selfData.socials_username.instagram}`,
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    },
    // ❌ Twitter removed (you said you don’t want it)
  ];

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* HEADER */}
          <Section style={header}>
            <Row>
              <Column style={{ width: "40px" }}>
                <Img
                  src="https://your-domain.vercel.app/images/logo.png"
                  alt="PH"
                  width="40"
                  height="40"
                />
              </Column>
              <Column>
                <Text style={brandText}>Prem Hari S</Text>
              </Column>
            </Row>
          </Section>

          {/* BODY */}
          <Section>
            <Text style={heading}>Hey {userName}! 🚀</Text>

            <Text style={text}>
              Thanks a bunch for reaching out! 🎉 <br />
              Your message just landed safely in my inbox, and I’ll get back to you soon.
            </Text>

            <Text style={text}>
              Here's a quick recap of your message:
            </Text>

            <Text style={label}>
              📌 Reason: <strong>{contactReason}</strong>
            </Text>

            <Text style={label}>💬 Message:</Text>
            <pre style={codeBlock}>{userMessage}</pre>

           <Text>
            I&apos;ll respond as soon as possible
           </Text>

            {/* SOCIALS */}
            <Section style={socialSection}>
              <table style={socialTable}>
                <tbody>
                  <tr>
                    {socials.map((social) => (
                      <td key={social.name} style={socialIconCol}>
                        <Link href={social.url}>
                          <Img
                            src={social.icon}
                            alt={social.name}
                            width="28"
                            height="28"
                            style={socialIcon}
                          />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </Section>

            <Text style={footerText}>
              You're receiving this email because you contacted me via my portfolio.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/* STYLES */
const main = {
  backgroundColor: "#0a0a0f",
  padding: "20px",
};

const container = {
  backgroundColor: "#111827",
  padding: "20px",
  borderRadius: "10px",
};

const header = {
  marginBottom: "20px",
};

const brandText = {
  fontSize: "18px",
  color: "#ffffff",
  fontWeight: "bold",
};

const heading = {
  fontSize: "22px",
  color: "#a855f7",
  fontWeight: "bold",
};

const text = {
  fontSize: "14px",
  color: "#e5e7eb",
  marginBottom: "10px",
};

const label = {
  fontSize: "14px",
  color: "#ffffff",
};

const codeBlock = {
  backgroundColor: "#1f2937",
  padding: "10px",
  borderRadius: "6px",
  color: "#d1d5db",
};

const socialSection = {
  marginTop: "20px",
};

const socialTable = {
  width: "100%",
};

const socialIconCol = {
  padding: "5px",
};

const socialIcon = {
  display: "block",
};

const footerText = {
  fontSize: "12px",
  color: "#9ca3af",
  marginTop: "20px",
};