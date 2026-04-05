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

const equipment = [
  "Multiple ultra-low freezers (-75°C)",
  "Standard cold storage units (-20°C)",
  "Fire safety & biohazard compliance",
  "Automated temperature logging",
  "Emergency alert systems",
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

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left - Facility Image */}
          <div className="flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group flex-1">
              <Image
                src="/images/facility.png"
                alt="Allied Biologistics Cold Storage Facility - Industrial Freezers"
                width={700}
                height={470}
                className="w-full h-full min-h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#0f2a3f] to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-white font-semibold">
                    Facility Active — 24/7 Monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content & Equipment */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              Our facility in Ahmedabad houses multiple industrial-grade
              ultra-low temperature freezers and standard cold storage units.
              Each unit is maintained to the highest standards of reliability,
              with fire safety equipment and biohazard compliance protocols in
              place.
            </p>

            <div className="bg-linear-to-br from-[#0f2a3f] to-[#1a3d5c] rounded-2xl p-8 text-white relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b4d8]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-xl font-bold mb-5 relative z-10">
                Equipment Highlights
              </h3>
              <ul className="space-y-4 relative z-10">
                {equipment.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#00b4d8] rounded-full shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Feature Grid - Full Width */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#f0f7fa] rounded-xl p-5 flex items-start gap-3 hover:bg-[#e8f4f8] transition-colors"
            >
              <div className="w-10 h-10 bg-[#0f2a3f] rounded-lg flex items-center justify-center shrink-0">
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
    </section>
  );
}
