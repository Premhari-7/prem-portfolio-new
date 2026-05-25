import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render, pretty } from "@react-email/render";
import validator from "validator";

import { EmailTemplate } from "@/components/template/Email";
import { NotificationEmail } from "@/components/template/NotificationEmail";

export async function POST(request: Request) {
  const body = await request.json();

  const {
    senderName,
    senderEmail,
    reasonToContact,
    senderMsg,
  } = body;

  // Input Validation
  if (
    !senderName ||
    !senderEmail ||
    !reasonToContact ||
    !senderMsg ||
    typeof senderName !== "string" ||
    typeof senderEmail !== "string" ||
    typeof reasonToContact !== "string" ||
    typeof senderMsg !== "string"
  ) {
    return NextResponse.json(
      { error: "Invalid input data" },
      { status: 400 }
    );
  }

  // Email Validation
  if (!validator.isEmail(senderEmail)) {
    return NextResponse.json(
      { error: "Email format is not valid" },
      { status: 400 }
    );
  }

  // EMAIL FOR YOU (Notification Mail)
  const ownerHtml = await pretty(
    await render(
      NotificationEmail({
        userName: senderName,
        userEmail: senderEmail,
        contactReason: reasonToContact,
        userMessage: senderMsg,
      })
    )
  );

  // EMAIL FOR SENDER (Auto Reply Mail)
  const senderHtml = await pretty(
    await render(
      EmailTemplate({
        userName: senderName,
        userEmail: senderEmail,
        contactReason: reasonToContact,
        userMessage: senderMsg,
      })
    )
  );

  // Mail sent to YOU
  const ownerMessage = {
    from: `"Portfolio Contact" <${process.env.email_from}>`,
    to: process.env.email_from,
    replyTo: senderEmail,
    subject: `New Portfolio Contact - ${reasonToContact}`,
    html: ownerHtml,
  };

  // Mail sent to SENDER
  const senderMessage = {
    from: `"Prem Hari S" <${process.env.email_from}>`,
    to: senderEmail,
    subject: "Thanks for contacting me !!",
    html: senderHtml,
  };

  // Nodemailer Transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email_from,
      pass: process.env.email_password,
    },
  });

  try {
    // Send both mails
    await transporter.sendMail(ownerMessage);
    await transporter.sendMail(senderMessage);

    return NextResponse.json(
      {
        message: "Emails sent successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error sending email:", err);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}