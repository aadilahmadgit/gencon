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

    // Debug env values
    console.log("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

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
      console.log("TEXT:", error?.text);
      console.log("STATUS:", error?.status);

      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10 max-w-4xl mx-auto"
    >
      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="group">
          <label className="block text-sm font-medium text-gray-500 mb-2 tracking-wide">
            First name *
          </label>
          <input
            type="text"
            name="first_name"
            required
            className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all duration-300 focus:border-black"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-500 mb-2 tracking-wide">
            Last name *
          </label>
          <input
            type="text"
            name="last_name"
            required
            className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all duration-300 focus:border-black"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="group">
          <label className="block text-sm font-medium text-gray-500 mb-2 tracking-wide">
            Company
          </label>
          <input
            type="text"
            name="company"
            className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all duration-300 focus:border-black"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-500 mb-2 tracking-wide">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all duration-300 focus:border-black"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="group">
          <label className="block text-sm font-medium text-gray-500 mb-2 tracking-wide">
            Phone number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all duration-300 focus:border-black"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-500 mb-2 tracking-wide">
            Budget
          </label>
          <input
            type="text"
            name="budget"
            className="w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-all duration-300 focus:border-black"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="group">
        <label className="block text-sm font-medium text-gray-500 mb-2 tracking-wide">
          Project details *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full border-b border-gray-300 bg-transparent py-3 outline-none resize-none transition-all duration-300 focus:border-black"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className={`w-full mt-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 ${
          status === "submitting"
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-black text-white hover:bg-gray-900 hover:shadow-xl active:scale-95"
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