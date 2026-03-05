import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomeTheaterSetupPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">

        {/* ================= HERO SECTION ================= */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="/elec5.jpg"
                alt="Home Theater Setup Guide"
                width={800}
                height={400}
                className="rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl font-bold mb-4">
                Home Theater Setup Guide
              </h1>
              <p className="text-gray-600 text-lg">
                Complete guide to setting up the perfect home entertainment system.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Published on February 25, 2026 • By GenCon Team
              </div>
            </div>
          </div>
        </section>

        {/* ================= ARTICLE CONTENT ================= */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">

              <div className="bg-white rounded-lg shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-6">Planning Your Home Theater</h2>
                <p className="text-gray-700 mb-6">
                  Creating the perfect home theater experience requires careful planning and the right equipment.
                  Whether you're a movie enthusiast or a gaming fan, a well-designed home theater can transform
                  your entertainment experience. At GenCon, we specialize in professional home theater installation
                  and setup services.
                </p>

                <h2 className="text-2xl font-bold mb-6">Essential Components</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Display Device</h3>
                    <p className="text-gray-700 mb-4">
                      Choose between LED/LCD TVs, projectors, or OLED displays based on your room size and budget.
                      Consider screen size, resolution (4K/8K), and smart features.
                    </p>
                    <Image src="/elec3.jpg" alt="Display Device" width={300} height={200} className="rounded-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Audio System</h3>
                    <p className="text-gray-700 mb-4">
                      A good sound system is crucial for immersion. Consider 5.1, 7.1, or Dolby Atmos surround sound
                      systems for the best experience.
                    </p>
                    <Image src="/ac2.jpg" alt="Audio System" width={300} height={200} className="rounded-lg" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Room Setup Considerations</h2>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li><strong>Room Size:</strong> Measure your space carefully - too small a screen or too large speakers can ruin the experience</li>
                  <li><strong>Lighting:</strong> Install blackout curtains and eliminate light sources that could cause glare</li>
                  <li><strong>Acoustics:</strong> Use sound-absorbing materials to reduce echo and improve sound quality</li>
                  <li><strong>Seating:</strong> Position seats for optimal viewing angle, typically 2-3 times screen height away</li>
                  <li><strong>Ventilation:</strong> Ensure proper airflow to prevent equipment overheating</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">Cable Management</h2>
                <p className="text-gray-700 mb-6">
                  Proper cable management is essential for both aesthetics and performance. Our installation experts
                  use professional cable management solutions including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li>Concealed cable runs through walls or floors</li>
                  <li>High-quality HDMI and audio cables</li>
                  <li>Surge protection and signal boosters</li>
                  <li>Wireless connectivity options where possible</li>
                </ul>

                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">Professional Installation Benefits</h3>
                  <p className="text-green-700">
                    While DIY setup is possible, professional installation ensures optimal performance,
                    proper calibration, and warranty protection. Our technicians handle complex wiring,
                    equipment calibration, and system optimization.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-6">Common Setup Mistakes to Avoid</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">Poor Speaker Placement</h4>
                    <p className="text-gray-600 text-sm">Incorrect speaker positioning can ruin surround sound effects</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ignoring Calibration</h4>
                    <p className="text-gray-600 text-sm">Uncalibrated systems deliver suboptimal audio and video quality</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cheap Cables</h4>
                    <p className="text-gray-600 text-sm">Low-quality cables can degrade signal quality significantly</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">No Surge Protection</h4>
                    <p className="text-gray-600 text-sm">Power surges can damage expensive equipment</p>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h2 className="text-2xl font-bold mb-6">Let GenCon Handle Your Home Theater Setup</h2>
                  <p className="text-gray-700 mb-6">
                    Don't settle for mediocre entertainment. Contact our experts for professional home theater
                    installation, equipment recommendations, and system optimization. We work with all major
                    brands and can design a system that fits your space and budget.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
                  >
                    Get Started
                  </Link>
                </div>

              </div>

              {/* Related Articles */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/ac-maintenance-tips" className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                    <h4 className="font-semibold mb-2">Essential AC Maintenance Tips</h4>
                    <p className="text-gray-600 text-sm">Learn how to maintain your air conditioner for optimal performance.</p>
                  </Link>
                  <Link href="/blog/common-electronics-problems" className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                    <h4 className="font-semibold mb-2">Common Electronics Problems</h4>
                    <p className="text-gray-600 text-sm">Identify and fix common issues with your electronic devices.</p>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}