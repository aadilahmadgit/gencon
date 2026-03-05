import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
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
                alt="GenCon Blog"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
                Our Blog
              </p>

              <h1 className="text-4xl font-bold mb-6">
                Tips, Tricks & Insights for Cooling & Electronics
              </h1>

              <p className="text-gray-600 mb-6">
                Stay informed with the latest tips on AC maintenance, electronics troubleshooting,
                and industry insights from GenCon's expert technicians. Learn how to keep your
                home comfortable and your devices running smoothly.
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

        {/* ================= BLOG POSTS ================= */}
        <section className="py-16">
          <div className="container mx-auto px-6">

            <h2 className="text-3xl font-bold mb-12 text-center">
              Latest Articles
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Blog Post 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="/ac6.jpg" alt="AC Maintenance Tips" width={400} height={250} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Essential AC Maintenance Tips</h3>
                  <p className="text-gray-600 mb-4">Learn how to maintain your air conditioner for optimal performance and longevity.</p>
                  <Link href="/blog/ac-maintenance-tips" className="text-blue-600 hover:text-blue-800 font-semibold">Read More →</Link>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="/elec5.jpg" alt="Electronics Installation" width={400} height={250} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Home Theater Setup Guide</h3>
                  <p className="text-gray-600 mb-4">Complete guide to setting up the perfect home entertainment system.</p>
                  <Link href="/blog/home-theater-setup" className="text-blue-600 hover:text-blue-800 font-semibold">Read More →</Link>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="/gas.avif" alt="Refrigerant Safety" width={400} height={250} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Understanding Refrigerant Safety</h3>
                  <p className="text-gray-600 mb-4">Important safety information about refrigerants and professional servicing.</p>
                  <Link href="/blog/refrigerant-safety" className="text-blue-600 hover:text-blue-800 font-semibold">Read More →</Link>
                </div>
              </div>

              {/* Blog Post 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="/elec3.jpg" alt="Circuit Board Repair" width={400} height={250} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Common Electronics Problems</h3>
                  <p className="text-gray-600 mb-4">Identify and fix common issues with your electronic devices.</p>
                  <Link href="/blog/common-electronics-problems" className="text-blue-600 hover:text-blue-800 font-semibold">Read More →</Link>
                </div>
              </div>

              {/* Blog Post 5 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="/com.jpg" alt="Energy Efficiency" width={400} height={250} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Energy-Efficient Cooling Solutions</h3>
                  <p className="text-gray-600 mb-4">Save energy and money with modern cooling technologies.</p>
                  <Link href="/blog/energy-efficient-cooling" className="text-blue-600 hover:text-blue-800 font-semibold">Read More →</Link>
                </div>
              </div>

              {/* Blog Post 6 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="/ac2.jpg" alt="Appliance Care" width={400} height={250} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Appliance Maintenance Guide</h3>
                  <p className="text-gray-600 mb-4">Keep your home appliances running smoothly with regular maintenance.</p>
                  <Link href="/blog/appliance-maintenance" className="text-blue-600 hover:text-blue-800 font-semibold">Read More →</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= NEWSLETTER ================= */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 text-center">

            <h2 className="text-3xl font-bold mb-6">
              Stay Updated
            </h2>

            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest tips, service updates, and industry insights.
            </p>

            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* ================= CALL TO ACTION ================= */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">
              Need Expert Help?
            </h2>

            <p className="text-gray-600 mb-6">
              Our team of professionals is ready to assist with all your cooling and electronics needs.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
            >
              Get in Touch
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}