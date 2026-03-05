import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function ACRepair() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-[url('/ac2.jpg')] w-full h-120 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4 tracking-widest text-2xl">
          <h2 className="text-4xl font-bold mb-6">GenCon Repair</h2>
          <button className="bg-blue-600 rounded-xl p-2 m-5 hover:bg-gray-500">
            <a href="#contact">Request a Quote</a>
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto p-8" id="service">
        <h2 className="text-3xl font-bold mb-6 text-center">Our AC Repair Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="shadow-lg p-6 rounded-xl bg-[url('/dia.jpg')] bg-cover bg-center bg-blend-overlay bg-black/40 text-white">
            <h3 className="text-xl font-semibold mb-4">Diagnostic Services</h3>
            <p>We provide comprehensive diagnostic services to identify issues with your AC system quickly and accurately.</p>
          </div>
          <div className="shadow-lg p-6 rounded-xl bg-[url('/gas.avif')] bg-cover bg-center bg-blend-overlay bg-black/40 text-white">
            <h3 className="text-xl font-semibold mb-4">Refrigerant Recharge</h3>
            <p>If your AC is low on refrigerant, we can safely recharge it to ensure optimal cooling performance.</p>
          </div>
          <div className="shadow-lg p-6 rounded-xl bg-[url('/com.jpg')] bg-cover bg-center bg-blend-overlay bg-black/40 text-white">
            <h3 className="text-xl font-semibold mb-4">Component Replacement</h3>
            <p>We replace faulty components such as compressors, fans, and thermostats to restore your AC's functionality.</p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex mt-10 justify-center items-center gap-10 p-10 bg-[url('/ac6.jpg')] bg-cover bg-center h-screen bg-fixed bg-blend-overlay bg-black/40 text-white">
        <div>
          <h1 className="font-bold capitalize text-center text-3xl">Welcome to best cooling and heating service center</h1>
          <p className="font-thin text-xl text-center mt-8 tracking-widest">we have best technicians</p>
        </div>
        <div>
          <video src="/tools.mp4" autoPlay muted loop playsInline></video>
        </div>
      </div>

      {/* Why Choose Us */}
      <div>
        <h1 className="font-bold text-3xl capitalize text-center mt-8 border-y-2" id="service">WHY CHOOSE US?</h1>
        <div className="m-10 p-10 shadow-xl rounded-xl">
          <ul>
            <li className="m-10 p-10 shadow-xl rounded-xl bg-[url('/W1.jpg')] bg-cover bg-center capitalize text-3xl text-center text-white font-bold bg-blend-overlay bg-black/40">BEST WORKERS</li>
            <li className="m-10 p-10 shadow-xl rounded-xl bg-[url('/mon1.jpg')] bg-cover bg-center capitalize text-3xl text-center text-white font-bold bg-blend-overlay bg-black/40">AFFORDABLE PRICING</li>
            <li className="m-10 p-10 shadow-xl rounded-xl bg-[url('/tele.jpg')] bg-cover bg-center capitalize text-3xl text-center text-white font-bold bg-blend-overlay bg-black/40">QUICK RESPONSE</li>
            <li className="m-10 p-10 shadow-xl rounded-xl bg-[url('/clo.jpg')] bg-cover bg-center capitalize text-3xl text-center text-white font-bold bg-blend-overlay bg-black/40">24/7 WORK HOUR</li>
            <li className="m-10 p-10 shadow-xl rounded-xl bg-[url('/tool.jpg')] bg-cover bg-center capitalize text-3xl text-center text-white font-bold bg-blend-overlay bg-black/40">ADVANCED EQUIPMENTS</li>
            <li className="m-10 p-10 shadow-xl rounded-xl bg-[url('/trus.jpg')] bg-cover bg-center capitalize text-3xl text-center text-white font-bold bg-blend-overlay bg-black/40">WE BUILD TRUST</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <ContactForm />

      <Footer />
    </div>
  );
}