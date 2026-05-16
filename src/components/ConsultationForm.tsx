"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2, CheckCircle, AlertCircle, Lock } from "lucide-react";

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
  "Custom Sauna",
  "Infrared Sauna",
  "Steam Room",
  "Cold Plunge System",
  "Contrast Therapy",
  "Recovery Room",
  "Outdoor Wellness",
  "Commercial Wellness",
  "Multiple / Full Suite",
  "Not Sure — Need Advice",
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
}: {
  compact?: boolean;
}) {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "",
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
  const labelClass =
    "block text-xs font-semibold tracking-wider text-sand/60 uppercase mb-1.5";

  return (
    <div className="rounded-2xl bg-obsidian-mid/82 backdrop-blur-md border border-sand/[0.12] p-8 md:p-10">
      <h3 className="font-display text-2xl font-light text-sand mb-2">
        Book Your Consultation
      </h3>
      <p className="text-sand/40 text-xs mb-8 leading-relaxed">
        Complete the form and we&apos;ll be in touch within 24 hours to arrange
        your no-obligation consultation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5" id="consultation-form">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-gold">*</span>
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
              Phone <span className="text-gold">*</span>
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
              Email <span className="text-gold">*</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="serviceType" className={labelClass}>
              Service Interested In <span className="text-gold">*</span>
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceTypes.map((s) => (
                <option key={s} value={s} className="bg-obsidian">
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="projectType" className={labelClass}>
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="" disabled>
                Select type
              </option>
              {projectTypes.map((t) => (
                <option key={t} value={t} className="bg-obsidian">
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass}>
            Tell Us About Your Project <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={compact ? 3 : 5}
            className={`${inputClass} resize-none`}
            placeholder="Describe your space, goals, and any specific requirements..."
          />
        </div>

        {/* Status messages — mirror Supreme Town exactly */}
        {formStatus.success && (
          <div className="flex items-center gap-3 bg-gold/10 border border-gold/30 text-gold px-4 py-3 text-sm">
            <CheckCircle size={18} className="flex-shrink-0" />
            <span className="font-medium">{formStatus.message}</span>
          </div>
        )}
        {formStatus.error && (
          <div className="flex items-center gap-3 bg-rust/15 border border-rust/35 text-rust-light px-4 py-3 text-sm">
            <AlertCircle size={18} className="flex-shrink-0" />
            <span className="font-medium">{formStatus.message}</span>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          id="consultation-submit"
          disabled={formStatus.loading}
          className="btn-gold w-full justify-center text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formStatus.loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Request Consultation
            </>
          )}
        </button>

        <p className="text-xs text-sand/30 text-center flex items-center justify-center gap-1.5">
          <Lock size={11} />
          Your information is kept private and secure
        </p>
      </form>
    </div>
  );
}
