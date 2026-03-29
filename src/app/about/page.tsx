import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main>

        {/* ================= HERO SECTION ================= */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT IMAGE */}
            <div>
              <Image
                src="/siteeng.jpg"  // Using existing image
                alt="About GenCon"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
                Who We Are
              </p>

              <h1 className="text-4xl font-bold mb-6 text-black">
                Your Trusted Cooling and Heating Service Provider
              </h1>

              <p className="text-gray-600 mb-6">
                GenCon is a professional service-based company specializing in
                air conditioning repair, electronics repair, and home appliance services.
                Our mission is to provide innovative, reliable, and scalable solutions
                that keep your home comfortable and your devices running smoothly.
                With a team of best technicians, we deliver high-quality services
                tailored to your needs.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SERVICES HIGHLIGHTS ================= */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">

            <h2 className="text-3xl font-bold mb-12">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">AC Repair</h3>
                <p className="text-gray-600">
                  Professional air conditioning repair services for residential and commercial properties.
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">Electronics Repair</h3>
                <p className="text-gray-600">
                  Expert repair for TVs, home theaters, computers, and all electronic devices.
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">Installation & Maintenance</h3>
                <p className="text-gray-600">
                  Complete installation and regular maintenance services to keep everything running smoothly.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6 text-center">

            <h2 className="text-3xl font-bold mb-10">
              Why Choose Us?
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

              <div>
                <h3 className="text-2xl font-bold">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">1000+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= OUR LOCATION ================= */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Our Location
            </h2>
            <p className="text-gray-600 mb-8">
              Visit us at our office in Abu Dhabi, UAE
            </p>
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928032.0743286734!2d54.39895947207771!3d24.68821940512634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab700538f49bd%3A0x48091803a1c0d70c!2sGenCon%20General%20Contracting%20and%20Maintenance%20LLC!5e0!3m2!1sen!2sin!4v1772049748441!5m2!1sen!2sin"
                width="70%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
            <p className="text-gray-600 mt-4">
              4 شارع المُنشئات 6 - Industrial Area - Batha Al Hayer - Abu Dhabi - United Arab Emirates
            </p>
          </div>
        </section>

        {/* ================= CALL TO ACTION ================= */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">
              Ready To Work With Us?
            </h2>

            <p className="text-gray-600 mb-6">
              Let’s discuss your cooling, heating, or electronics needs and create something amazing together.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
