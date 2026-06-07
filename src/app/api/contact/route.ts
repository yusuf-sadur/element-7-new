import { NextRequest, NextResponse } from "next/server";

import { BRAND } from "@/lib/brand";
import { getEmailConfig, sendEnquiryEmails } from "@/lib/email/send";

/**
 * POST /api/contact
 *
 * Handles consultation form submissions via Resend (Next.js equivalent of
 * Supreme Town's send-email.php flow).
 *
 * Setup: copy .env.local.example → .env.local and add RESEND_API_KEY
 * Resend: https://resend.com
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

const fallbackPhoneMessage = `Please call us directly on ${BRAND.phone}.`;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

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

    const { hasApiKey } = getEmailConfig();

    if (!hasApiKey) {
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

    await sendEnquiryEmails({
      fullName,
      phone,
      email,
      serviceType,
      projectType,
      message,
    });

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
        message: `Failed to send enquiry. ${fallbackPhoneMessage}`,
      },
      { status: 500 }
    );
  }
}
