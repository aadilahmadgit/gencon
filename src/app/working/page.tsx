export default function WorkingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-black flex items-center justify-center px-6">
      
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div className="p-12 flex flex-col justify-center">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500 mb-4">
            GENCON
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            This Page is <br />
            <span className="text-indigo-600">Under Construction</span>
          </h1>

          <p className="text-gray-600 mb-8">
            We're currently working hard to bring you something amazing.
            Our services page will be available very soon.
          </p>

          <div className="flex gap-4">
            <a
              href="/"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-md"
            >
              Back to Home
            </a>

            <a
              href="/contact"
              className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION SECTION */}
        <div className="relative bg-indigo-50 flex items-center justify-center p-10">
          
          {/* Laptop */}
          <div className="relative w-72 h-44 bg-gray-300 rounded-xl shadow-lg">
            
            {/* Screen */}
            <div className="absolute inset-4 bg-white rounded-md flex items-center justify-center">
              <span className="text-gray-400 text-sm">
                Building...
              </span>
            </div>

            {/* Warning Tape */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 rotate-3">
              <div className="bg-yellow-400 h-6 flex items-center justify-center">
                <div className="w-full h-full bg-[repeating-linear-gradient(45deg,black,black_10px,yellow_10px,yellow_20px)] opacity-80"></div>
              </div>
            </div>
          </div>

          {/* Floating Construction Icons */}
          <div className="absolute top-10 right-10 text-4xl">⚙️</div>
          <div className="absolute bottom-10 left-10 text-5xl">🚧</div>
        </div>

      </div>
    </div>
  );
}