import { BRAND } from "@/lib/brand";

import { escapeHtml, formatMessageHtml } from "./escape";

export interface EnquiryEmailData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  projectType: string;
  message: string;
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://element7.com.au";

const PUBLIC_CONTACT_EMAIL = "hello@element7.com.au";

const BRAND_COLORS = {
  cream: "#f2eee8",
  creamWarm: "#eae4db",
  white: "#ffffff",
  ink: "#0d0d0d",
  inkMuted: "#4a4a48",
  inkFaint: "#7a7874",
  olive: "#6f4e37",
  sage: "#c29a63",
  line: "#dfdbd3",
} as const;

function brandHeader(): string {
  return `
    <tr>
      <td style="background-color:${BRAND_COLORS.ink};padding:40px 40px 28px;text-align:center;">
        <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:300;letter-spacing:0.18em;color:${BRAND_COLORS.cream};">
          ELEMENT <span style="color:${BRAND_COLORS.sage};">7</span>
        </p>
        <p style="margin:0 0 22px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:${BRAND_COLORS.inkFaint};">
          ${escapeHtml(BRAND.tagline.toUpperCase())}
        </p>
        <table role="presentation" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td style="background-color:${BRAND_COLORS.sage};border-radius:999px;padding:7px 18px;">
              <span style="color:${BRAND_COLORS.ink};font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">
                New Enquiry Received
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function detailRow(
  label: string,
  value: string,
  options: { href?: string; accent?: boolean; alt?: boolean } = {}
): string {
  const bg = options.alt ? BRAND_COLORS.cream : BRAND_COLORS.white;
  const valueColor = options.accent ? BRAND_COLORS.olive : BRAND_COLORS.ink;
  const valueHtml = options.href
    ? `<a href="${options.href}" style="color:${BRAND_COLORS.olive};text-decoration:none;">${value}</a>`
    : value;

  return `
    <tr style="background-color:${bg};">
      <td width="42%" style="padding:14px 16px;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:${BRAND_COLORS.inkFaint};text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid ${BRAND_COLORS.line};">
        ${label}
      </td>
      <td style="padding:14px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${valueColor};font-weight:600;border-bottom:1px solid ${BRAND_COLORS.line};">
        ${valueHtml}
      </td>
    </tr>
  `;
}

function emailShell(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Element Seven</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND_COLORS.creamWarm};-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND_COLORS.creamWarm};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(13,13,13,0.08);">
          ${content}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function emailFooter(note: string): string {
  return `
    <tr>
      <td style="background-color:${BRAND_COLORS.sage};height:3px;font-size:0;line-height:0;">&nbsp;</td>
    </tr>
    <tr>
      <td style="background-color:${BRAND_COLORS.ink};padding:24px 40px;text-align:center;">
        <p style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:14px;color:${BRAND_COLORS.cream};letter-spacing:0.16em;">
          ELEMENT <span style="color:${BRAND_COLORS.sage};">7</span>
        </p>
        <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${BRAND_COLORS.inkFaint};">
          ${escapeHtml(BRAND.phone)} &nbsp;|&nbsp;
          <a href="mailto:${escapeHtml(PUBLIC_CONTACT_EMAIL)}" style="color:${BRAND_COLORS.inkFaint};text-decoration:none;">${escapeHtml(PUBLIC_CONTACT_EMAIL)}</a>
        </p>
        <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${BRAND_COLORS.inkFaint};">
          <a href="${SITE_URL}" style="color:${BRAND_COLORS.inkFaint};text-decoration:none;">${SITE_URL.replace(/^https?:\/\//, "")}</a>
        </p>
        <p style="margin:12px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#555;">
          ${note}
        </p>
      </td>
    </tr>
  `;
}

export function buildEnquiryNotificationEmail(data: EnquiryEmailData): {
  html: string;
  text: string;
} {
  const fullName = escapeHtml(data.fullName.trim());
  const phone = escapeHtml(data.phone.trim());
  const email = escapeHtml(data.email.trim());
  const serviceType = escapeHtml(data.serviceType.trim());
  const projectType = escapeHtml(data.projectType.trim());
  const messageHtml = formatMessageHtml(data.message.trim());
  const submittedAt = new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Melbourne",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const html = emailShell(`
    ${brandHeader()}
    <tr>
      <td style="background-color:${BRAND_COLORS.white};padding:22px 40px 8px;border-bottom:1px solid ${BRAND_COLORS.line};">
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${BRAND_COLORS.inkMuted};line-height:1.7;text-align:center;">
          A consultation enquiry was submitted via the website.<br>
          <strong style="color:${BRAND_COLORS.ink};">Please respond within 24 hours.</strong>
        </p>
      </td>
    </tr>
    <tr>
      <td style="background-color:${BRAND_COLORS.white};padding:0 40px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid ${BRAND_COLORS.line};">
          ${detailRow("Name", fullName)}
          ${detailRow("Email", email, { href: `mailto:${email}`, accent: true, alt: true })}
          ${detailRow("Phone", phone)}
          ${detailRow("Service", serviceType, { alt: true })}
          ${detailRow("Project Type", projectType)}
        </table>
      </td>
    </tr>
    <tr>
      <td style="background-color:${BRAND_COLORS.white};padding:0 40px 28px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid ${BRAND_COLORS.line};">
          <tr>
            <td style="background-color:${BRAND_COLORS.cream};padding:8px 16px;border-bottom:1px solid ${BRAND_COLORS.line};">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:${BRAND_COLORS.inkFaint};text-transform:uppercase;letter-spacing:0.12em;">
                Message
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:${BRAND_COLORS.white};padding:18px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${BRAND_COLORS.inkMuted};line-height:1.75;">
              ${messageHtml}
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="background-color:${BRAND_COLORS.white};padding:0 40px 36px;text-align:center;">
        <a href="mailto:${email}?subject=${encodeURIComponent(`Re: Your Element Seven enquiry — ${data.serviceType.trim()}`)}"
           style="display:inline-block;background-color:${BRAND_COLORS.olive};color:${BRAND_COLORS.cream};font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:999px;letter-spacing:0.04em;">
          Reply to ${fullName} &rarr;
        </a>
      </td>
    </tr>
    ${emailFooter(`Submitted ${submittedAt} AEST via the Element Seven contact form.`)}
  `);

  const text = [
    "New Element Seven Consultation Enquiry",
    "",
    `Name: ${data.fullName.trim()}`,
    `Email: ${data.email.trim()}`,
    `Phone: ${data.phone.trim()}`,
    `Service: ${data.serviceType.trim()}`,
    `Project Type: ${data.projectType.trim()}`,
    "",
    "Message:",
    data.message.trim(),
    "",
    `Submitted ${submittedAt} AEST`,
  ].join("\n");

  return { html, text };
}

export function buildEnquiryAutoReplyEmail(data: EnquiryEmailData): {
  html: string;
  text: string;
} {
  const fullName = escapeHtml(data.fullName.trim());
  const serviceType = escapeHtml(data.serviceType.trim());

  const html = emailShell(`
    ${brandHeader()}
    <tr>
      <td style="background-color:${BRAND_COLORS.white};padding:32px 40px 8px;">
        <h1 style="margin:0 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:300;letter-spacing:0.06em;color:${BRAND_COLORS.ink};">
          Thank you, ${fullName}
        </h1>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${BRAND_COLORS.inkMuted};line-height:1.8;">
          We&apos;ve received your enquiry about <strong style="color:${BRAND_COLORS.olive};">${serviceType}</strong>.
        </p>
      </td>
    </tr>
    <tr>
      <td style="background-color:${BRAND_COLORS.white};padding:8px 40px 28px;">
        <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${BRAND_COLORS.inkMuted};line-height:1.8;">
          A member of our studio will be in touch within 24 hours to arrange your no-obligation consultation.
        </p>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${BRAND_COLORS.inkMuted};line-height:1.8;">
          If your project is time-sensitive, call us directly and we&apos;ll prioritise your request.
        </p>
      </td>
    </tr>
    <tr>
      <td style="background-color:${BRAND_COLORS.white};padding:0 40px 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid ${BRAND_COLORS.line};">
          <tr>
            <td style="background-color:${BRAND_COLORS.cream};padding:18px 20px;border-left:4px solid ${BRAND_COLORS.sage};">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:${BRAND_COLORS.olive};letter-spacing:0.12em;text-transform:uppercase;">
                Element Seven
              </p>
              <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${BRAND_COLORS.ink};">
                ${escapeHtml(BRAND.phone)}
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${BRAND_COLORS.inkMuted};">
                <a href="mailto:${escapeHtml(PUBLIC_CONTACT_EMAIL)}" style="color:${BRAND_COLORS.olive};text-decoration:none;">${escapeHtml(PUBLIC_CONTACT_EMAIL)}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    ${emailFooter("This is an automated confirmation from the Element Seven website.")}
  `);

  const text = [
    `Thank you, ${data.fullName.trim()}`,
    "",
    `We've received your enquiry about ${data.serviceType.trim()}.`,
    "A member of our studio will be in touch within 24 hours.",
    "",
    `Phone: ${BRAND.phone}`,
    `Email: ${PUBLIC_CONTACT_EMAIL}`,
  ].join("\n");

  return { html, text };
}
