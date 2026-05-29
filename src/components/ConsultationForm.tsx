"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2, CheckCircle, AlertCircle, Lock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import FormSelect from "@/components/ui/FormSelect";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  projectType: string;
  message: string;
}

interface FormStatus {
  loading: boolean;
  success: boolean;
  error: boolean;
  message: string;
}

const serviceTypes = [
  "Traditional Dry Sauna",
  "Infrared Sauna",
  "Hybrid Sauna",
  "Hammam & Steam Room",
  "Recovery Pool",
  "Stainless Steel Plunge Pool",
  "Complete Recovery Suite",
  "Commercial Fit-Out",
  "Not sure yet",
];

const projectTypes = ["Residential", "Commercial", "Both"];

/**
 * ConsultationForm — mirrors Supreme Town ContactForm.jsx submit logic exactly:
 * - Validates required fields client-side
 * - POSTs to /api/contact (Next.js API route)
 * - Shows loading, success, error states with consistent UX
 * - On success, navigates to /thank-you
 */
export default function ConsultationForm({
  compact = false,
  theme = "dark",
  embedded = false,
  showHeader = true,
  defaultServiceType = "",
  lockServiceType = false,
}: {
  compact?: boolean;
  theme?: "dark" | "light";
  embedded?: boolean;
  showHeader?: boolean;
  defaultServiceType?: string;
  lockServiceType?: boolean;
}) {
  const isLight = theme === "light";
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    serviceType: defaultServiceType,
    projectType: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation — same pattern as Supreme Town
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.serviceType ||
      !formData.message
    ) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message:
          "Please fill in all required fields (Name, Phone, Email, Service Type & Message).",
      });
      return;
    }

    setFormStatus({ loading: true, success: false, error: false, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        router.push("/thank-you");
      } else {
        setFormStatus({
          loading: false,
          success: false,
          error: true,
          message:
            result.message ||
            "Submission failed. Please call us directly on 1300 000 000.",
        });
      }
    } catch (error) {
      const isNetworkError =
        error instanceof TypeError && error.message?.includes("fetch");
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: isNetworkError
          ? "Network error. Please check your connection and try again, or call us on 1300 000 000."
          : "Something went wrong. Please call us directly on 1300 000 000.",
      });
    }
  };

  const inputClass = `form-input ${compact ? "py-3" : "py-3.5"}`;
  const labelClass = isLight
    ? "mb-1.5 block font-sans text-[10px] font-semibold uppercase tracking-label text-ink-faint"
    : "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-sand/60";
  const requiredMark = isLight ? "text-olive" : "text-gold";
  const wrapperClass = isLight
    ? "rounded-2xl border border-line/60 bg-white"
    : "rounded-2xl border border-sand/[0.12] bg-obsidian-mid/82 backdrop-blur-md";
  const paddingClass = embedded ? "" : "p-8 md:p-10";

  const formEl = (
      <form onSubmit={handleSubmit} className="space-y-5" id="consultation-form">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className={requiredMark}>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone <span className={requiredMark}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="0412 345 678"
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span className={requiredMark}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Service Type & Project Type */}
        <div
          className={`grid grid-cols-1 gap-4 ${lockServiceType ? "" : "sm:grid-cols-2"}`}
        >
          {lockServiceType ? null : (
            <div>
              <label htmlFor="serviceType" className={labelClass}>
                Service Interested In <span className={requiredMark}>*</span>
              </label>
              <FormSelect
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                theme={isLight ? "light" : "dark"}
                compact={compact}
                placeholder="Select a service"
                options={serviceTypes}
              />
            </div>
          )}
          <div>
            <label htmlFor="projectType" className={labelClass}>
              Project Type
            </label>
            <FormSelect
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              theme={isLight ? "light" : "dark"}
              compact={compact}
              placeholder="Select project type"
              options={projectTypes}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass}>
            Tell Us About Your Project <span className={requiredMark}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={compact ? 3 : 5}
            className={`${inputClass} resize-none`}
            placeholder="Describe your property, build scope, timeline, and any technical requirements..."
          />
        </div>

        {/* Status messages — mirror Supreme Town exactly */}
        {formStatus.success && (
          <div
            className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm ${
              isLight
                ? "border-sage/30 bg-sage/10 text-olive"
                : "border-gold/30 bg-gold/10 text-gold"
            }`}
          >
            <CheckCircle size={18} className="flex-shrink-0" />
            <span className="font-medium">{formStatus.message}</span>
          </div>
        )}
        {formStatus.error && (
          <div
            className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm ${
              isLight
                ? "border-rust/25 bg-rust/10 text-rust"
                : "border-rust/35 bg-rust/15 text-rust-light"
            }`}
          >
            <AlertCircle size={18} className="flex-shrink-0" />
            <span className="font-medium">{formStatus.message}</span>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          id="consultation-submit"
          disabled={formStatus.loading}
          className={`${isLight ? "btn-primary" : "btn-gold"} w-full justify-center text-sm disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {formStatus.loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send enquiry
            </>
          )}
        </button>

        <p
          className={`flex items-center justify-center gap-1.5 text-center text-xs ${
            isLight ? "text-ink-faint" : "text-sand/30"
          }`}
        >
          <Lock size={11} />
          Your information is kept private and secure
        </p>
      </form>
  );

  const inner = (
    <>
      {showHeader && (
        <>
          <h3
            className={`mb-2 font-display text-2xl font-light ${
              isLight ? "text-ink" : "text-sand"
            }`}
          >
            Begin a conversation
          </h3>
          <p
            className={`mb-8 text-xs leading-relaxed ${
              isLight ? "text-ink-muted" : "text-sand/40"
            }`}
          >
            Share your vision — we&apos;ll respond within one business day to arrange a calm,
            no-obligation consultation.
          </p>
        </>
      )}
      {formEl}
    </>
  );

  if (embedded) {
    return inner;
  }

  return (
    <Reveal variant="up" delay={0.1}>
      <div className={`${wrapperClass} ${paddingClass}`}>{inner}</div>
    </Reveal>
  );
}
