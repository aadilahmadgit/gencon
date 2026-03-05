"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);

    } catch (error: any) {
      console.log("FULL ERROR:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10 max-w-4xl mx-auto">

      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-10">
        <input
          type="text"
          name="first_name"
          required
          placeholder="First name *"
          className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all duration-300 focus:border-blue-600 text-blue-600 placeholder:text-blue-400"
        />

        <input
          type="text"
          name="last_name"
          required
          placeholder="Last name *"
          className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all duration-300 focus:border-blue-600 text-blue-600 placeholder:text-blue-400"
        />
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-10">
        <input
          type="text"
          name="company"
          placeholder="Company"
          className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all duration-300 focus:border-blue-600 text-blue-600 placeholder:text-blue-400"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email *"
          className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all duration-300 focus:border-blue-600 text-blue-600 placeholder:text-blue-400"
        />
      </div>

      {/* Row 3 */}
      <div className="grid md:grid-cols-2 gap-10">
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone number *"
          className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all duration-300 focus:border-blue-600 text-blue-600 placeholder:text-blue-400"
        />

        <input
          type="text"
          name="budget"
          placeholder="Budget"
          className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all duration-300 focus:border-blue-600 text-blue-600 placeholder:text-blue-400"
        />
      </div>

      {/* Project Details */}
      <textarea
        name="message"
        rows={4}
        required
        placeholder="Project details *"
        className="w-full border-b border-gray-300 bg-transparent py-3 outline-none resize-none transition-all duration-300 focus:border-blue-600 text-blue-600 placeholder:text-blue-400"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className={`w-full mt-8 py-4 rounded-full font-semibold transition-all duration-300 ${
          status === "submitting"
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-black text-white hover:bg-gray-900 active:scale-95"
        }`}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm text-center">
          Thank you. Your message has been sent successfully.
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm text-center">
          Something went wrong. Please try again.
        </div>
      )}

    </form>
  );
}
