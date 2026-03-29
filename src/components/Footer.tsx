import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* ===== COMPANY INFO ===== */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            GenCon
          </h2>

          <p className="text-gray-400 mb-6">
            Your trusted cooling and heating service provider in Abu Dhabi.
            We specialize in AC repair, electronics repair, and home appliance services.
          </p>

          <p className="text-gray-400">+971 55 635 5106</p>
          <p className="text-gray-400">info@gencon</p>
        </div>

        {/* ===== SERVICES (MATCH NAVBAR) ===== */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-3">
            <li><Link href="/ac-repair" className="hover:text-white transition">HVAC Systems</Link></li>
            <li><Link href="/electronics-repair" className="hover:text-white transition">Electro Mechanical</Link></li>
            <li><Link href="/working" className="hover:text-white transition">MEP</Link></li>
            <li><Link href="/working" className="hover:text-white transition">Renewable Energy</Link></li>
            <li><Link href="/working" className="hover:text-white transition">Home Appliances</Link></li>
          </ul>
        </div>

        {/* ===== NAVIGATION (ONLY NAVBAR LINKS) ===== */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* ===== NEWSLETTER ===== */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Subscribe to Newsletter
          </h3>

          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:border-gray-500"
            />

            <button
              type="submit"
              className="bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-gray-800"></div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

        <p>
          © {new Date().getFullYear()} GenCon. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition">
            Terms of Service
          </Link>
        </div>
      </div>

    </footer>
  );
}
