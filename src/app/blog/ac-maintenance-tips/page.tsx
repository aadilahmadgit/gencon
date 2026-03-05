import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ACMaintenanceTipsPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">

        {/* ================= HERO SECTION ================= */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="/ac6.jpg"
                alt="AC Maintenance Tips"
                width={800}
                height={400}
                className="rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl font-bold mb-4">
                Essential AC Maintenance Tips
              </h1>
              <p className="text-gray-600 text-lg">
                Learn how to maintain your air conditioner for optimal performance and longevity.
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

                <h2 className="text-2xl font-bold mb-6">Why Regular AC Maintenance Matters</h2>
                <p className="text-gray-700 mb-6">
                  Regular air conditioner maintenance is crucial for ensuring your system runs efficiently,
                  lasts longer, and provides the cool comfort you need during hot Abu Dhabi summers.
                  Neglecting maintenance can lead to higher energy bills, frequent breakdowns, and
                  potentially expensive repairs.
                </p>

                <h2 className="text-2xl font-bold mb-6">Monthly Maintenance Tasks</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Clean or Replace Air Filters</h3>
                    <p className="text-gray-700 mb-4">
                      Dirty air filters restrict airflow and make your AC work harder. Check filters monthly
                      and clean or replace them when they're dirty. This simple task can improve efficiency by up to 15%.
                    </p>
                    <Image src="/ac1.png" alt="Air Filter" width={300} height={200} className="rounded-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Check Air Vents</h3>
                    <p className="text-gray-700 mb-4">
                      Ensure all air vents are open and unobstructed. Blocked vents can reduce cooling efficiency
                      and cause uneven temperature distribution throughout your home.
                    </p>
                    <Image src="/gas.avif" alt="Air Vents" width={300} height={200} className="rounded-lg" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Seasonal Maintenance Checklist</h2>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li><strong>Spring Preparation:</strong> Clean condenser coils, check refrigerant levels, inspect electrical connections</li>
                  <li><strong>Summer Operation:</strong> Monitor thermostat settings, check for unusual noises, ensure proper drainage</li>
                  <li><strong>Fall Shutdown:</strong> Clean and cover outdoor unit, drain water from system, schedule professional inspection</li>
                  <li><strong>Winter Storage:</strong> Protect system from cold weather, perform any necessary repairs</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">Professional Maintenance Services</h2>
                <p className="text-gray-700 mb-6">
                  While DIY maintenance is important, professional servicing is essential for optimal AC performance.
                  Our certified technicians at GenCon provide comprehensive maintenance services including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li>Deep cleaning of evaporator and condenser coils</li>
                  <li>Refrigerant level checks and adjustments</li>
                  <li>Electrical system inspections</li>
                  <li>Thermostat calibration</li>
                  <li>Performance efficiency testing</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">Pro Tip</h3>
                  <p className="text-blue-700">
                    Schedule professional maintenance twice a year - once before summer and once before winter.
                    This proactive approach can prevent costly breakdowns and extend your AC's lifespan.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-6">Common AC Problems to Watch For</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Weak Airflow</h4>
                    <p className="text-gray-600 text-sm">Could indicate dirty filters or duct issues</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Unusual Noises</h4>
                    <p className="text-gray-600 text-sm">May signal loose parts or motor problems</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Higher Bills</h4>
                    <p className="text-gray-600 text-sm">Often caused by inefficient operation</p>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h2 className="text-2xl font-bold mb-6">Contact GenCon for Professional Service</h2>
                  <p className="text-gray-700 mb-6">
                    Don't let AC problems disrupt your comfort. Our expert technicians are ready to help
                    with all your air conditioning needs. From routine maintenance to emergency repairs,
                    we're here to keep you cool.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Schedule Service
                  </Link>
                </div>

              </div>

              {/* Related Articles */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/home-theater-setup" className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                    <h4 className="font-semibold mb-2">Home Theater Setup Guide</h4>
                    <p className="text-gray-600 text-sm">Complete guide to setting up the perfect home entertainment system.</p>
                  </Link>
                  <Link href="/blog/energy-efficient-cooling" className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                    <h4 className="font-semibold mb-2">Energy-Efficient Cooling Solutions</h4>
                    <p className="text-gray-600 text-sm">Save energy and money with modern cooling technologies.</p>
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