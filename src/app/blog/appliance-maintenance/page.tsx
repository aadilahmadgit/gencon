import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ApplianceMaintenancePage() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">

        {/* ================= HERO SECTION ================= */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="/elec6.jpg"
                alt="Appliance Maintenance Guide"
                width={800}
                height={400}
                className="rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl font-bold mb-4">
                Appliance Maintenance Guide
              </h1>
              <p className="text-gray-600 text-lg">
                Keep your appliances running efficiently with proper maintenance and care.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Published on March 28, 2026 • By GenCon Team
              </div>
            </div>
          </div>
        </section>

        {/* ================= ARTICLE CONTENT ================= */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">

              <div className="bg-white rounded-lg shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-6">Why Regular Maintenance Matters</h2>
                <p className="text-gray-700 mb-6">
                  Regular appliance maintenance extends lifespan, improves efficiency, prevents breakdowns,
                  and saves money on energy bills and repairs. At GenCon, we offer comprehensive appliance
                  maintenance services to keep your home running smoothly. Most appliance failures can be
                  prevented with proper care and timely maintenance.
                </p>

                <h2 className="text-2xl font-bold mb-6">Refrigerator Maintenance</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Monthly Tasks</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Clean door seals and gaskets</li>
                      <li>• Check temperature settings</li>
                      <li>• Organize contents for better airflow</li>
                      <li>• Clean condenser coils</li>
                    </ul>
                    <Image src="/elec3.jpg" alt="Refrigerator Maintenance" width={300} height={200} className="rounded-lg mt-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Annual Tasks</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Deep clean interior and exterior</li>
                      <li>• Check door alignment</li>
                      <li>• Inspect water lines (if applicable)</li>
                      <li>• Professional servicing</li>
                    </ul>
                    <Image src="/elec5.jpg" alt="Annual Maintenance" width={300} height={200} className="rounded-lg mt-4" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Washing Machine Care</h2>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li><strong>Clean after each use:</strong> Wipe down the door seal and detergent dispenser</li>
                  <li><strong>Monthly cleaning:</strong> Run an empty hot water cycle with vinegar or washing machine cleaner</li>
                  <li><strong>Check hoses:</strong> Inspect for leaks, cracks, or bulges every 6 months</li>
                  <li><strong>Balance loads:</strong> Avoid overloading to prevent excessive vibration</li>
                  <li><strong>Clean lint filter:</strong> Remove lint buildup from the filter housing</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">Dishwasher Maintenance</h2>
                <p className="text-gray-700 mb-6">
                  Keep your dishwasher running efficiently with these maintenance tips:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li><strong>Scrape food first:</strong> Remove large food particles before loading</li>
                  <li><strong>Clean filter:</strong> Remove and clean the filter monthly</li>
                  <li><strong>Check spray arms:</strong> Ensure arms rotate freely and holes aren't clogged</li>
                  <li><strong>Clean door seal:</strong> Wipe down the rubber gasket regularly</li>
                  <li><strong>Run vinegar cycle:</strong> Monthly cleaning cycle to remove mineral deposits</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">Oven and Range Care</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Clean spills immediately to prevent baked-on residue</li>
                    <li>• Remove and clean oven racks monthly</li>
                    <li>• Check burner caps and ensure they're properly seated</li>
                    <li>• Clean range hood filters every 3-6 months</li>
                    <li>• Professional cleaning annually for deep cleaning</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6">Microwave Maintenance</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">Daily Care</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Clean after each use</li>
                      <li>• Use microwave-safe containers</li>
                      <li>• Avoid metal objects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Monthly Maintenance</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Deep clean interior</li>
                      <li>• Check door seal</li>
                      <li>• Clean exterior</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Common Appliance Problems</h2>
                <p className="text-gray-700 mb-6">
                  Recognize these signs that your appliance needs attention:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li><strong>Unusual noises:</strong> Grinding, squealing, or banging sounds indicate mechanical issues</li>
                  <li><strong>Excessive energy use:</strong> Higher than normal utility bills may indicate inefficiency</li>
                  <li><strong>Water leaks:</strong> Could be hose issues, seal problems, or drainage issues</li>
                  <li><strong>Strange odors:</strong> May indicate mold, mildew, or electrical problems</li>
                  <li><strong>Reduced performance:</strong> Clothes not getting clean, food not heating properly</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">When to Call a Professional</h2>
                <p className="text-gray-700 mb-6">
                  While regular cleaning and basic maintenance can be done at home, certain issues require
                  professional expertise:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li>Gas line repairs or adjustments</li>
                  <li>Electrical component replacement</li>
                  <li>Refrigerant handling</li>
                  <li>Major mechanical repairs</li>
                  <li>Warranty work (to avoid voiding warranty)</li>
                </ul>

                <div className="border-t pt-8">
                  <h2 className="text-2xl font-bold mb-6">Professional Appliance Maintenance Services</h2>
                  <p className="text-gray-700 mb-6">
                    GenCon offers comprehensive appliance maintenance packages to keep your home running
                    efficiently. Our certified technicians provide thorough inspections, cleaning, and repairs
                    for all major appliances. Regular maintenance prevents costly breakdowns and extends
                    the life of your appliances.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
                  >
                    Schedule Maintenance
                  </Link>
                </div>

              </div>

              {/* Related Articles */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/common-electronics-problems" className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                    <h4 className="font-semibold mb-2">Common Electronics Problems</h4>
                    <p className="text-gray-600 text-sm">Troubleshooting guide for your electronic devices and appliances.</p>
                  </Link>
                  <Link href="/blog/energy-efficient-cooling" className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                    <h4 className="font-semibold mb-2">Energy Efficient Cooling</h4>
                    <p className="text-gray-600 text-sm">Save money and reduce your environmental impact with smart cooling choices.</p>
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