import { FaCheckCircle, FaLinkedin } from "react-icons/fa";

const highlights = [
  "Established in 2018 in Ahmedabad, India",
  "Specializing in medical sample cold storage",
  "Operating temperatures at -75°C and -20°C",
  "Storing blood, urine, serum, tissue & plasma",
  "24/7 thermal monitoring systems",
  "Industrial-grade refrigeration equipment",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div>
              <span className="text-[#00b4d8] font-semibold text-sm uppercase tracking-widest">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2a3f] mt-3">
                Your Trusted Partner in Biological Cold Storage
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Allied Biologistics is a premier service provider based in
              Ahmedabad, India, specializing in cold storage rental services
              for the medical and research industry. Since our establishment
              in 2018, we have been dedicated to maintaining the integrity
              of sensitive biological specimens through precise
              temperature-controlled preservation.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our high-tech warehouses equipped with industrial refrigeration
              and 24/7 thermal monitoring effectively suspend biological
              activity, ensuring that sensitive medical samples remain viable
              for accurate diagnostic testing, long-term research, or
              clinical applications.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#00b4d8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Manager Card */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0f2a3f] to-[#1a3d5c] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                What Is Cold Storage?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Medical cold storage is the precise, temperature-controlled
                preservation of biological specimens — such as blood, urine,
                serum, tissue, and plasma — within specialized facilities to
                prevent chemical or cellular degradation. By maintaining these
                materials at stable temperatures ranging from -20°C to -75°C,
                high-tech warehouses equipped with industrial refrigeration
                and 24/7 thermal monitoring effectively suspend biological
                activity.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#e8f4f8] rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#0f2a3f] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">PP</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0f2a3f]">
                      Prakash Patel
                    </h4>
                    <p className="text-[#00b4d8] font-medium text-sm">
                      Director
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="font-medium">Contact:</span>
                  <a
                    href="tel:8849831339"
                    className="text-[#0f2a3f] font-semibold hover:text-[#00b4d8] transition-colors"
                  >
                    +91 88498 31339
                  </a>
                </div>
              </div>

              <div className="bg-[#e8f4f8] rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#0f2a3f] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DP</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0f2a3f]">
                      Daksha Patel
                    </h4>
                    <p className="text-[#00b4d8] font-medium text-sm">
                      Director
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="font-medium">Contact:</span>
                  <a
                    href="tel:+91 96620 91210"
                    className="text-[#0f2a3f] font-semibold hover:text-[#00b4d8] transition-colors"
                  >
                    +91 96620 91210
                  </a>
                </div>
                <a
                  href="https://www.linkedin.com/in/daksha-patel-206a38207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-[#0077b5] font-medium hover:text-[#005582] transition-colors text-sm"
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
