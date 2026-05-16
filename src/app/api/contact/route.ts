import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Handles consultation form submissions.
 * Uses Resend for email delivery (mirrors Supreme Town PHP email pattern).
 *
 * Setup: Add RESEND_API_KEY and CONTACT_EMAIL_TO in .env.local
 * Resend free tier: https://resend.com
 */

interface ContactPayload {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  projectType?: string;
  message: string;
}

function validatePayload(data: ContactPayload): string | null {
  if (!data.fullName?.trim()) return "Full name is required.";
  if (!data.phone?.trim()) return "Phone number is required.";
  if (!data.email?.trim()) return "Email address is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "Please provide a valid email address.";
  if (!data.serviceType?.trim()) return "Service type is required.";
  if (!data.message?.trim()) return "Message is required.";
  if (data.message.length > 5000)
    return "Message is too long (max 5000 characters).";
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Validate
    const validationError = validatePayload(body);
    if (validationError) {
      return NextResponse.json(
        { success: false, message: validationError },
        { status: 400 }
      );
    }

    const {
      fullName,
      phone,
      email,
      serviceType,
      projectType = "Not specified",
      message,
    } = body;

    // Check env vars
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.CONTACT_EMAIL_TO || "hello@element7.com.au";
    const FROM_EMAIL =
      process.env.CONTACT_EMAIL_FROM || "noreply@element7.com.au";

    if (!RESEND_API_KEY) {
      // Dev fallback — log to console if no API key configured
      console.log("=== ELEMENT 7 CONSULTATION ENQUIRY (DEV MODE) ===");
      console.log(`Name: ${fullName}`);
      console.log(`Phone: ${phone}`);
      console.log(`Email: ${email}`);
      console.log(`Service: ${serviceType}`);
      console.log(`Project Type: ${projectType}`);
      console.log(`Message: ${message}`);
      console.log("================================================");

      return NextResponse.json({
        success: true,
        message:
          "Thank you! We'll be in touch within 24 hours. (Dev mode — email logged to console)",
      });
    }

    // Build HTML email body
    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Consultation Enquiry — Element 7</title>
        </head>
        <body style="font-family: Georgia, serif; background: #212B21; color: #ffffff; padding: 40px 20px; margin: 0;">
          <div style="max-width: 600px; margin: 0 auto; background: #2B362B; border: 1px solid #5C665C; padding: 40px;">
            <div style="border-bottom: 2px solid #C9A84C; padding-bottom: 20px; margin-bottom: 30px;">
              <h1 style="color: #C9A84C; font-size: 22px; margin: 0; letter-spacing: 2px; text-transform: uppercase; font-weight: 400;">
                New Consultation Enquiry
              </h1>
              <p style="color: #666; font-size: 13px; margin: 8px 0 0; letter-spacing: 1px;">ELEMENT 7 — ENGINEERED ENVIRONMENTS</p>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ["Name", fullName],
                ["Phone", phone],
                ["Email", email],
                ["Service Interested In", serviceType],
                ["Project Type", projectType],
              ]
                .map(
                  ([label, value]) => `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; width: 40%;">${label}</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #ffffff; font-size: 14px;">${value}</td>
                </tr>
              `
                )
                .join("")}
            </table>

            <div style="margin-top: 24px;">
              <p style="color: #888; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">Message</p>
              <p style="color: #cccccc; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 36px; padding-top: 20px; border-top: 1px solid #222;">
              <p style="color: #555; font-size: 11px; margin: 0;">
                Submitted via Element 7 website contact form — ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" })} AEST
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send via Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Element 7 Enquiries <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New Consultation Enquiry — ${serviceType} | ${fullName}`,
        html: htmlBody,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error("Resend API error:", errorData);
      return NextResponse.json(
        {
          success: false,
          message:
            "Failed to send enquiry. Please call us directly on 1300 000 000.",
        },
        { status: 500 }
      );
    }

    // Send auto-reply to the enquirer
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Georgia, serif; background: #212B21; color: #ffffff; padding: 40px 20px; margin: 0;">
          <div style="max-width: 600px; margin: 0 auto; background: #2B362B; border: 1px solid #5C665C; padding: 40px;">
            <div style="border-bottom: 2px solid #C9A84C; padding-bottom: 20px; margin-bottom: 30px;">
              <h1 style="color: #C9A84C; font-size: 20px; margin: 0; letter-spacing: 2px; text-transform: uppercase; font-weight: 400;">
                Thank You, ${fullName}
              </h1>
            </div>
            <p style="color: #cccccc; font-size: 14px; line-height: 1.8;">
              Thank you for your enquiry about <strong style="color: #C9A84C;">${serviceType}</strong>.
            </p>
            <p style="color: #cccccc; font-size: 14px; line-height: 1.8;">
              A member of our team will be in touch within 24 hours to arrange your no-obligation consultation.
            </p>
            <p style="color: #cccccc; font-size: 14px; line-height: 1.8;">
              If you have any urgent questions in the meantime, please don't hesitate to call us directly.
            </p>
            <div style="margin-top: 32px; padding: 20px; background: #212B21; border-left: 2px solid #C9A84C;">
              <p style="color: #C9A84C; font-size: 13px; margin: 0 0 6px; letter-spacing: 1px; text-transform: uppercase;">Element 7</p>
              <p style="color: #888; font-size: 13px; margin: 0;">hello@element7.com.au</p>
              <p style="color: #888; font-size: 13px; margin: 4px 0 0;">1300 000 000</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Fire auto-reply (non-blocking — don't fail the submission if this fails)
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Element 7 <${FROM_EMAIL}>`,
        to: [email],
        subject: "We've received your enquiry — Element 7",
        html: autoReplyHtml,
      }),
    }).catch((err) => console.error("Auto-reply failed:", err));

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your enquiry has been received. We'll be in touch within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred. Please call us directly on 1300 000 000.",
      },
      { status: 500 }
    );
  }
}
