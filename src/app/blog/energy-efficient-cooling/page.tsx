import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EnergyEfficientCoolingPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">

        {/* ================= HERO SECTION ================= */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="/ac4.jpg"
                alt="Energy Efficient Cooling"
                width={800}
                height={400}
                className="rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl font-bold mb-4">
                Energy Efficient Cooling Solutions
              </h1>
              <p className="text-gray-600 text-lg">
                Save money and reduce your environmental impact with smart cooling choices.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Published on March 20, 2026 • By GenCon Team
              </div>
            </div>
          </div>
        </section>

        {/* ================= ARTICLE CONTENT ================= */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">

              <div className="bg-white rounded-lg shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-6">The Cost of Inefficient Cooling</h2>
                <p className="text-gray-700 mb-6">
                  Air conditioning accounts for a significant portion of household energy costs. Older, inefficient
                  systems can waste hundreds of dollars annually while contributing to environmental harm. At GenCon,
                  we help homeowners transition to energy-efficient cooling solutions that save money and reduce
                  carbon footprints.
                </p>

                <h2 className="text-2xl font-bold mb-6">Energy Efficiency Ratings</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">SEER Rating</h3>
                    <p className="text-gray-700 mb-4">
                      Seasonal Energy Efficiency Ratio measures air conditioner efficiency. Higher SEER ratings
                      (16-25+) indicate more efficient systems that use less electricity.
                    </p>
                    <Image src="/ac2.jpg" alt="SEER Rating" width={300} height={200} className="rounded-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">EER Rating</h3>
                    <p className="text-gray-700 mb-4">
                      Energy Efficiency Ratio measures efficiency at peak load. Look for EER ratings above 12
                      for energy-efficient operation.
                    </p>
                    <Image src="/ac1.jpg" alt="EER Rating" width={300} height={200} className="rounded-lg" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Modern Cooling Technologies</h2>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li><strong>Inverter Technology:</strong> Variable speed compressors that adjust output based on cooling needs</li>
                  <li><strong>Smart Thermostats:</strong> Learning systems that optimize temperature settings and schedules</li>
                  <li><strong>Zoning Systems:</strong> Multiple zones allow cooling only occupied areas</li>
                  <li><strong>High-Efficiency Filters:</strong> Better filtration with less energy consumption</li>
                  <li><strong>Reflective Insulation:</strong> Reduces heat transfer through walls and ceilings</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">Maintenance for Efficiency</h2>
                <p className="text-gray-700 mb-6">
                  Regular maintenance is crucial for maintaining energy efficiency:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li>Change air filters every 1-3 months</li>
                  <li>Clean evaporator and condenser coils annually</li>
                  <li>Check and seal ductwork for leaks</li>
                  <li>Ensure proper refrigerant levels</li>
                  <li>Schedule annual professional tune-ups</li>
                </ul>

                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">Energy-Saving Tips</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Set thermostat to 78°F (26°C) when home</li>
                    <li>• Use ceiling fans to circulate cool air</li>
                    <li>• Close curtains during peak sun hours</li>
                    <li>• Seal windows and doors to prevent air leaks</li>
                    <li>• Consider a programmable thermostat</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6">ROI of Energy-Efficient Upgrades</h2>
                <p className="text-gray-700 mb-6">
                  Energy-efficient cooling systems typically pay for themselves within 3-7 years through
                  reduced utility bills. Consider these potential savings:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li>High-efficiency AC units can save 20-50% on cooling costs</li>
                  <li>Smart thermostats reduce energy use by 10-15%</li>
                  <li>Proper insulation can cut cooling costs by up to 20%</li>
                  <li>Zoning systems save energy by cooling only needed areas</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">Government Incentives</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">Federal Tax Credits</h4>
                    <p className="text-gray-600 text-sm">Available for high-efficiency HVAC systems and electrical upgrades</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Utility Rebates</h4>
                    <p className="text-gray-600 text-sm">Local utility companies offer rebates for energy-efficient installations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">State Programs</h4>
                    <p className="text-gray-600 text-sm">Many states offer additional incentives for green energy upgrades</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Financing Options</h4>
                    <p className="text-gray-600 text-sm">Low-interest loans available for energy-efficient home improvements</p>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h2 className="text-2xl font-bold mb-6">Choose GenCon for Energy-Efficient Solutions</h2>
                  <p className="text-gray-700 mb-6">
                    Our team specializes in energy-efficient cooling installations and retrofits. We can assess
                    your current system, recommend the best upgrades for your home, and help you take advantage
                    of available incentives. Contact us today to start saving energy and money.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
                  >
                    Get Energy Audit
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
                  <Link href="/blog/refrigerant-safety" className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                    <h4 className="font-semibold mb-2">Refrigerant Safety Guide</h4>
                    <p className="text-gray-600 text-sm">Understanding the safe handling and environmental impact of refrigerants.</p>
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