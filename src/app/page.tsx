"use client";

import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Carousel />

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center bg-[url('/ac6.jpg')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Premium Cooling & Heating Solutions
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 tracking-wide">
            Expert technicians delivering precision, performance & reliability.
          </p>
        </motion.div>

        <motion.video
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          src="/freezing.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute bottom-10 right-10 w-72 md:w-96 rounded-2xl shadow-2xl border border-white/20"
        />
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            { title: "Happy Clients", value: "1200+" },
            { title: "Projects Completed", value: "950+" },
            { title: "Expert Technicians", value: "50+" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-lg border border-white/10"
            >
              <h2 className="text-4xl font-bold">{item.value}</h2>
              <p className="mt-3 text-gray-300 uppercase tracking-widest text-sm">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 bg-white" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Meet Our Professional Team
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {["eng1.jpg", "eng2.jpg", "eng4.jpg", "eng3.jpg"].map(
              (img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={`/${img}`}
                    alt="Engineer"
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}