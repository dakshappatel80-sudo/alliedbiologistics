import Image from "next/image";
import {
  FaThermometerHalf,
  FaWarehouse,
  FaBolt,
  FaWifi,
} from "react-icons/fa";

const features = [
  {
    icon: FaThermometerHalf,
    title: "Temperature Range",
    description: "-75°C to -20°C precision controlled",
  },
  {
    icon: FaWarehouse,
    title: "Industrial Grade",
    description: "High-tech warehouse with modern equipment",
  },
  {
    icon: FaBolt,
    title: "Backup Power",
    description: "Uninterrupted power supply for 24/7 operation",
  },
  {
    icon: FaWifi,
    title: "Remote Monitoring",
    description: "Real-time temperature tracking and alerts",
  },
];

export default function Facility() {
  return (
    <section id="facility" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00b4d8] font-semibold text-sm uppercase tracking-widest">
            Our Facility
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2a3f] mt-3">
            State-of-the-Art Cold Storage Infrastructure
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Equipped with cutting-edge refrigeration technology designed
            specifically for the preservation of biological specimens.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Facility Image */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/facility.png"
                alt="Allied Biologistics Cold Storage Facility - Industrial Freezers"
                width={700}
                height={470}
                className="w-full h-[350px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay with label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2a3f] to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-white font-semibold">
                    Facility Active — 24/7 Monitoring
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Grid Below Image */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-[#f0f7fa] rounded-xl p-5 flex items-start gap-3 hover:bg-[#e8f4f8] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#0f2a3f] rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-[#00b4d8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f2a3f] text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed text-lg">
              Our facility in Ahmedabad houses multiple industrial-grade
              ultra-low temperature freezers and standard cold storage units.
              Each unit is maintained to the highest standards of reliability,
              with fire safety equipment and biohazard compliance protocols in
              place.
            </p>

            {/* Stats Bars */}
            <div className="space-y-5">
              {[
                { label: "Temperature Accuracy", value: "99.9%" },
                { label: "Uptime Guarantee", value: "99.5%" },
                { label: "Sample Integrity", value: "100%" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#0f2a3f] font-medium">
                      {stat.label}
                    </span>
                    <span className="text-[#00b4d8] font-bold">
                      {stat.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-[#0f2a3f] to-[#00b4d8] h-3 rounded-full"
                      style={{ width: stat.value }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Equipment highlights */}
            <div className="bg-gradient-to-br from-[#0f2a3f] to-[#1a3d5c] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b4d8]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-xl font-bold mb-4 relative z-10">
                Equipment Highlights
              </h3>
              <ul className="space-y-3 relative z-10">
                {[
                  "Multiple ultra-low freezers (-75°C)",
                  "Standard cold storage units (-20°C)",
                  "Fire safety & biohazard compliance",
                  "Automated temperature logging",
                  "Emergency alert systems",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#00b4d8] rounded-full flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Einstein Quote */}
            <blockquote className="border-l-4 border-[#00b4d8] pl-6 italic text-gray-500">
              &ldquo;It&apos;s not that I&apos;m so smart, it&apos;s just that I stay
              with problems longer.&rdquo;
              <span className="block mt-2 text-[#0f2a3f] font-semibold not-italic">
                — Albert Einstein
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
