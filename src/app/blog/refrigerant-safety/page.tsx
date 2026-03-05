import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RefrigerantSafetyPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">

        {/* ================= HERO SECTION ================= */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="/ac1.jpg"
                alt="Refrigerant Safety Guide"
                width={800}
                height={400}
                className="rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl font-bold mb-4">
                Refrigerant Safety: What You Need to Know
              </h1>
              <p className="text-gray-600 text-lg">
                Understanding the safe handling and environmental impact of refrigerants.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Published on March 5, 2026 • By GenCon Team
              </div>
            </div>
          </div>
        </section>

        {/* ================= ARTICLE CONTENT ================= */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">

              <div className="bg-white rounded-lg shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-6">The Importance of Refrigerant Safety</h2>
                <p className="text-gray-700 mb-6">
                  Refrigerants are the lifeblood of your air conditioning system, but they can be dangerous if not
                  handled properly. Understanding refrigerant safety is crucial for homeowners, technicians, and
                  anyone working with HVAC systems. At GenCon, we prioritize safety in all our refrigerant handling
                  and system maintenance services.
                </p>

                <h2 className="text-2xl font-bold mb-6">Types of Refrigerants</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Traditional Refrigerants (R-22)</h3>
                    <p className="text-gray-700 mb-4">
                      Older systems often use R-22 (Freon), which is being phased out due to environmental concerns.
                      These systems require careful handling and proper disposal.
                    </p>
                    <Image src="/ac3.jpg" alt="Traditional Refrigerant" width={300} height={200} className="rounded-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Modern Refrigerants (R-410A, R-32)</h3>
                    <p className="text-gray-700 mb-4">
                      Newer, eco-friendly refrigerants that are more efficient and less harmful to the ozone layer.
                      These require different handling procedures and equipment.
                    </p>
                    <Image src="/gas.avif" alt="Modern Refrigerant" width={300} height={200} className="rounded-lg" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Safety Precautions</h2>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li><strong>Never attempt DIY refrigerant work:</strong> Refrigerant handling requires EPA certification and specialized equipment</li>
                  <li><strong>Proper ventilation:</strong> Work in well-ventilated areas to avoid inhaling refrigerant vapors</li>
                  <li><strong>Protective equipment:</strong> Use gloves, safety glasses, and appropriate PPE when working with refrigerants</li>
                  <li><strong>Leak detection:</strong> Regular inspection for leaks prevents safety hazards and environmental damage</li>
                  <li><strong>Proper disposal:</strong> Never release refrigerants into the atmosphere - use certified recovery equipment</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">Environmental Impact</h2>
                <p className="text-gray-700 mb-6">
                  Refrigerants can have significant environmental impacts if not handled properly:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li>Ozone depletion from older refrigerants like R-22</li>
                  <li>Global warming potential of various refrigerant types</li>
                  <li>Proper recovery and recycling reduces environmental harm</li>
                  <li>Modern refrigerants have lower environmental impact</li>
                </ul>

                <div className="bg-red-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-red-800">Warning Signs of Refrigerant Issues</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• Reduced cooling performance</li>
                    <li>• Hissing or bubbling sounds from the unit</li>
                    <li>• Ice buildup on evaporator coils</li>
                    <li>• Higher than normal energy bills</li>
                    <li>• Warm air blowing from vents</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6">EPA Regulations</h2>
                <p className="text-gray-700 mb-6">
                  The Environmental Protection Agency regulates refrigerant handling through strict guidelines:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li>Section 608 certification required for technicians</li>
                  <li>Mandatory leak inspections for systems over certain sizes</li>
                  <li>Proper record-keeping for refrigerant usage</li>
                  <li>Penalties for improper handling or venting</li>
                </ul>

                <div className="border-t pt-8">
                  <h2 className="text-2xl font-bold mb-6">Trust GenCon for Safe Refrigerant Services</h2>
                  <p className="text-gray-700 mb-6">
                    Our certified technicians are EPA Section 608 certified and follow all safety protocols.
                    We use state-of-the-art recovery equipment and environmentally responsible practices.
                    Contact us for safe, professional refrigerant handling and system maintenance.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
                  >
                    Schedule Service
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
                  <Link href="/blog/energy-efficient-cooling" className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                    <h4 className="font-semibold mb-2">Energy Efficient Cooling Solutions</h4>
                    <p className="text-gray-600 text-sm">Discover ways to reduce energy costs while staying cool.</p>
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