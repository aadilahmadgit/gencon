import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LearnMorePage() {
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
                src="/ac1.png"
                alt="Learn More About GenCon"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
                Learn More
              </p>

              <h1 className="text-4xl font-bold mb-6">
                Discover Our Comprehensive Cooling & Electronics Solutions
              </h1>

              <p className="text-gray-600 mb-6">
                At GenCon, we offer a wide range of professional services designed to keep your home comfortable
                and your electronic devices running smoothly. From AC repair and maintenance to electronics installation
                and troubleshooting, our expert technicians are here to help.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* ================= DETAILED SERVICES ================= */}
        <section className="py-16">
          <div className="container mx-auto px-6">

            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Services in Detail
            </h2>

            <div className="grid md:grid-cols-2 gap-12">

              {/* AC Services */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Air Conditioning Services</h3>
                <div className="space-y-6">

                  <div className="flex gap-4">
                    <Image src="/ac6.jpg" alt="AC Repair" width={100} height={100} className="rounded-lg object-cover" />
                    <div>
                      <h4 className="font-semibold mb-2">AC Repair & Maintenance</h4>
                      <p className="text-gray-600">Professional repair and regular maintenance to ensure your AC system runs efficiently year-round.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Image src="/gas.avif" alt="Refrigerant Service" width={100} height={100} className="rounded-lg object-cover" />
                    <div>
                      <h4 className="font-semibold mb-2">Refrigerant Recharge</h4>
                      <p className="text-gray-600">Safe and effective refrigerant recharge services to restore cooling performance.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Image src="/com.jpg" alt="Component Replacement" width={100} height={100} className="rounded-lg object-cover" />
                    <div>
                      <h4 className="font-semibold mb-2">Component Replacement</h4>
                      <p className="text-gray-600">Expert replacement of compressors, fans, thermostats, and other AC components.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Electronics Services */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Electronics Services</h3>
                <div className="space-y-6">

                  <div className="flex gap-4">
                    <Image src="/elec5.jpg" alt="Electronics Installation" width={100} height={100} className="rounded-lg object-cover" />
                    <div>
                      <h4 className="font-semibold mb-2">Installation Services</h4>
                      <p className="text-gray-600">Professional installation of CCTV, home theaters, sound systems, and networking equipment.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Image src="/elec3.jpg" alt="PCB Repair" width={100} height={100} className="rounded-lg object-cover" />
                    <div>
                      <h4 className="font-semibold mb-2">PCB Repair & Upgrades</h4>
                      <p className="text-gray-600">Advanced diagnosis and repair of circuit boards with performance optimization.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Image src="/ac2.jpg" alt="Home Appliances" width={100} height={100} className="rounded-lg object-cover" />
                    <div>
                      <h4 className="font-semibold mb-2">Home Appliance Repair</h4>
                      <p className="text-gray-600">Comprehensive repair services for TVs, refrigerators, washing machines, and more.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 text-center">

            <h2 className="text-3xl font-bold mb-10">
              Why Choose GenCon?
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

        {/* ================= CALL TO ACTION ================= */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience Our Services?
            </h2>

            <p className="text-gray-600 mb-6">
              Contact us today for professional cooling and electronics solutions tailored to your needs.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
            >
              Contact Us Now
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}