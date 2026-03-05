"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      <section className="bg-gray-100 min-h-screen flex items-center justify-center py-16 px-6">
        <div className="bg-white rounded-2xl shadow-lg max-w-7xl w-full grid md:grid-cols-2 overflow-hidden">

          {/* LEFT SIDE */}
          <div className="p-10 md:p-16">
            <h1 className="text-4xl font-bold mb-10 text-gray-900">
              Contact GenCon
            </h1>

            <ContactForm />
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="h-[500px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928032.0743286734!2d54.39895947207771!3d24.68821940512634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab700538f49bd%3A0x48091803a1c0d70c!2sGenCon%20General%20Contracting%20and%20Maintenance%20LLC!5e0!3m2!1sen!2sin!4v1772049748441!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}