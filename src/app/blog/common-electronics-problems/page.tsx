import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CommonElectronicsProblemsPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">

        {/* ================= HERO SECTION ================= */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="/elec1.jpg"
                alt="Common Electronics Problems"
                width={800}
                height={400}
                className="rounded-lg shadow-lg mb-8"
              />
              <h1 className="text-4xl font-bold mb-4">
                Common Electronics Problems & Solutions
              </h1>
              <p className="text-gray-600 text-lg">
                Troubleshooting guide for your electronic devices and appliances.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Published on March 12, 2026 • By GenCon Team
              </div>
            </div>
          </div>
        </section>

        {/* ================= ARTICLE CONTENT ================= */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">

              <div className="bg-white rounded-lg shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-6">Why Electronics Fail</h2>
                <p className="text-gray-700 mb-6">
                  Electronic devices can develop problems for various reasons, from simple user errors to complex
                  component failures. Understanding common issues can help you troubleshoot problems before they
                  become major repairs. Our electronics repair specialists at GenCon have seen it all and can
                  help diagnose and fix any electronic issue.
                </p>

                <h2 className="text-2xl font-bold mb-6">Power Supply Issues</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">No Power Symptoms</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Device won't turn on</li>
                      <li>• LED indicators not working</li>
                      <li>• No response to power button</li>
                      <li>• Intermittent power loss</li>
                    </ul>
                    <Image src="/elec2.jpg" alt="Power Supply Issues" width={300} height={200} className="rounded-lg mt-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Common Causes</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Faulty power adapter</li>
                      <li>• Internal power supply failure</li>
                      <li>• Loose connections</li>
                      <li>• Circuit board damage</li>
                    </ul>
                    <Image src="/elec4.jpg" alt="Power Supply Components" width={300} height={200} className="rounded-lg mt-4" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Display Problems</h2>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li><strong>Black screen:</strong> Could be backlight failure, inverter issues, or main board problems</li>
                  <li><strong>Distorted display:</strong> Often caused by loose connections or damaged display cables</li>
                  <li><strong>Dead pixels:</strong> Individual pixel failures that may indicate display panel issues</li>
                  <li><strong>Color problems:</strong> Could be cable issues or graphics processor problems</li>
                  <li><strong>Flickering:</strong> Power supply issues or loose connections</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">Audio Problems</h2>
                <p className="text-gray-700 mb-6">
                  Sound issues are among the most common electronic problems:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li><strong>No sound:</strong> Check connections, volume settings, and speaker functionality</li>
                  <li><strong>Distorted audio:</strong> Could indicate amplifier issues or speaker damage</li>
                  <li><strong>Intermittent sound:</strong> Loose connections or faulty audio components</li>
                  <li><strong>Low volume:</strong> Speaker damage or amplifier problems</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">DIY Troubleshooting Steps</h3>
                  <ol className="text-blue-700 space-y-2">
                    <li>1. Check all cable connections and power sources</li>
                    <li>2. Try the device with different cables and adapters</li>
                    <li>3. Reset the device to factory settings if possible</li>
                    <li>4. Check for error codes or diagnostic indicators</li>
                    <li>5. Test with known working components</li>
                  </ol>
                </div>

                <h2 className="text-2xl font-bold mb-6">Overheating Issues</h2>
                <p className="text-gray-700 mb-6">
                  Overheating can cause various problems and reduce device lifespan:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                  <li>Clean dust from vents and fans regularly</li>
                  <li>Ensure proper ventilation around devices</li>
                  <li>Check and replace thermal paste on processors</li>
                  <li>Monitor operating temperatures</li>
                  <li>Replace failing cooling fans</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">Data and Storage Problems</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">Hard Drive Issues</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Clicking or grinding sounds</li>
                      <li>• Slow performance</li>
                      <li>• File corruption</li>
                      <li>• Failure to boot</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">SSD Problems</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Read/write errors</li>
                      <li>• Slow transfer speeds</li>
                      <li>• Firmware issues</li>
                      <li>• Controller failure</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h2 className="text-2xl font-bold mb-6">When to Seek Professional Help</h2>
                  <p className="text-gray-700 mb-6">
                    While some issues can be resolved with basic troubleshooting, complex problems require
                    professional expertise. Our certified technicians use specialized diagnostic equipment
                    and have access to genuine replacement parts. Don't risk further damage by attempting
                    repairs you're not qualified to perform.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
                  >
                    Get Expert Help
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
                  <Link href="/blog/appliance-maintenance" className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                    <h4 className="font-semibold mb-2">Appliance Maintenance Guide</h4>
                    <p className="text-gray-600 text-sm">Keep your appliances running efficiently with proper maintenance.</p>
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