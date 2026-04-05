import Image from "next/image";
import { HiPhone, HiArrowRight } from "react-icons/hi";
import {
  FaTemperatureLow,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#e8f4f8] via-white to-[#e8f4f8] pt-20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0f2a3f 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#0f2a3f]/10 text-[#0f2a3f] px-4 py-2 rounded-full text-sm font-medium">
              <FaShieldAlt className="text-[#00b4d8]" />
              Trusted Since 2018
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f2a3f] leading-tight">
              Reliable{" "}
              <span className="text-[#00b4d8]">Cold Storage</span>{" "}
              Solutions for Medical Samples
            </h1>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Professional cold storage rental services for medical
              samples, stem cells, and serum. Operating at{" "}
              <strong className="text-[#0f2a3f]">-75°C</strong> and{" "}
              <strong className="text-[#0f2a3f]">-20°C</strong> with
              24/7 monitoring in Ahmedabad, India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0f2a3f] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1a3d5c] transition-all duration-200 shadow-lg shadow-[#0f2a3f]/20"
              >
                Contact Us
                <HiArrowRight />
              </a>
              <a
                href="tel:8849831339"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#0f2a3f] text-[#0f2a3f] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0f2a3f] hover:text-white transition-all duration-200"
              >
                <HiPhone />
                +91 88498 31339
              </a>
            </div>
          </div>

          {/* Right - Storefront Image + Stats */}
          <div className="space-y-6">
            {/* Storefront Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/storefront.png"
                alt="Allied Biologistics Storefront"
                width={600}
                height={350}
                className="w-full h-[280px] sm:h-[320px] object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2a3f]/80 to-transparent p-6">
                <p className="text-white font-semibold text-lg">
                  Allied Biologistics
                </p>
                <p className="text-gray-300 text-sm">
                  Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
                <FaTemperatureLow className="text-[#00b4d8] text-xl mx-auto mb-2" />
                <h3 className="text-xl font-bold text-[#0f2a3f]">-75°C</h3>
                <p className="text-gray-500 text-xs mt-1">Ultra-Low</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
                <FaTemperatureLow className="text-[#00b4d8] text-xl mx-auto mb-2" />
                <h3 className="text-xl font-bold text-[#0f2a3f]">-20°C</h3>
                <p className="text-gray-500 text-xs mt-1">Standard</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
                <FaClock className="text-[#00b4d8] text-xl mx-auto mb-2" />
                <h3 className="text-xl font-bold text-[#0f2a3f]">24/7</h3>
                <p className="text-gray-500 text-xs mt-1">Monitoring</p>
              </div>
              <div className="bg-[#0f2a3f] rounded-xl p-4 shadow-md text-center">
                <FaShieldAlt className="text-[#00b4d8] text-xl mx-auto mb-2" />
                <h3 className="text-xl font-bold text-white">7+</h3>
                <p className="text-gray-300 text-xs mt-1">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
