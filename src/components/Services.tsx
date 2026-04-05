import {
  FaTemperatureLow,
  FaVial,
  FaTint,
  FaMicroscope,
  FaFlask,
  FaSyringe,
} from "react-icons/fa";

const services = [
  {
    icon: FaTemperatureLow,
    title: "Ultra-Low Storage (-75°C)",
    description:
      "Deep freeze storage for sensitive biological materials requiring ultra-low temperatures for long-term preservation.",
  },
  {
    icon: FaVial,
    title: "Standard Cold Storage (-20°C)",
    description:
      "Reliable cold storage solutions for samples that require standard freezing temperatures.",
  },
  {
    icon: FaTint,
    title: "Blood & Plasma Storage",
    description:
      "Specialized storage for blood products and plasma with precise temperature control and monitoring.",
  },
  {
    icon: FaMicroscope,
    title: "Tissue Preservation",
    description:
      "Temperature-controlled preservation of tissue samples for diagnostic testing and research purposes.",
  },
  {
    icon: FaFlask,
    title: "Serum & Stem Cell Storage",
    description:
      "Safe and reliable storage for serum and stem cell samples with continuous temperature monitoring.",
  },
  {
    icon: FaSyringe,
    title: "Urine Sample Storage",
    description:
      "Compliant cold storage for urine specimens maintaining sample integrity for accurate diagnostics.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f0f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00b4d8] font-semibold text-sm uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2a3f] mt-3">
            Comprehensive Cold Storage Solutions
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            We provide specialized cold storage services for a wide range of
            biological specimens, ensuring sample integrity at every step.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#00b4d8]/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#e8f4f8] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0f2a3f] transition-colors duration-300">
                <service.icon className="text-[#00b4d8] text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0f2a3f] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
