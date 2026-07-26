import { Resend } from "resend";

import { BRAND } from "@/lib/brand";

import type { EnquiryEmailData } from "./templates";
import {
  buildEnquiryAutoReplyEmail,
  buildEnquiryNotificationEmail,
} from "./templates";

let resendClient: Resend | null = null;

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

export function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const rawTo = process.env.CONTACT_EMAIL_TO?.trim() || BRAND.email;
  const toEmails = rawTo
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);

  return {
    toEmail: toEmails[0] || BRAND.email,
    toEmails,
    fromEmail:
      process.env.CONTACT_EMAIL_FROM?.trim() || "onboarding@resend.dev",
    hasApiKey: Boolean(apiKey),
  };
}

export async function sendEnquiryEmails(data: EnquiryEmailData) {
  const { toEmails, fromEmail } = getEmailConfig();
  const resend = getResendClient();

  const notification = buildEnquiryNotificationEmail(data);

  // Send to recipients individually so trial/testing mode restrictions on unverified domains
  // do not fail the entire enquiry if one email recipient is rejected by Resend.
  const results = await Promise.allSettled(
    toEmails.map((recipient) =>
      resend.emails.send({
        from: `${BRAND.name} Enquiries <${fromEmail}>`,
        to: [recipient],
        reply_to: data.email.trim(),
        subject: `New Consultation Enquiry — ${data.serviceType.trim()} | ${data.fullName.trim()}`,
        html: notification.html,
        text: notification.text,
      })
    )
  );

  let atLeastOneSuccess = false;
  let lastError: unknown = null;

  for (const res of results) {
    if (res.status === "fulfilled") {
      if (res.value.error) {
        console.error("Resend notification error for recipient:", res.value.error);
        lastError = res.value.error;
      } else {
        atLeastOneSuccess = true;
      }
    } else {
      console.error("Resend notification dispatch failed:", res.reason);
      lastError = res.reason;
    }
  }

  if (!atLeastOneSuccess && lastError) {
    const errorObj = lastError as any;
    const msg = errorObj?.message || errorObj?.name || (typeof errorObj === 'object' ? JSON.stringify(errorObj) : String(errorObj));
    throw new Error(msg);
  }

  const autoReply = buildEnquiryAutoReplyEmail(data);
  resend.emails
    .send({
      from: `${BRAND.name} <${fromEmail}>`,
      to: [data.email.trim()],
      subject: "We've received your enquiry — Element Seven",
      html: autoReply.html,
      text: autoReply.text,
    })
    .catch((error) => {
      console.error("Auto-reply failed:", error);
    });

  return { success: true };
}
