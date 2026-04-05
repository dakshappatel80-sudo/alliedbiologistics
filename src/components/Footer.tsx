import Image from "next/image";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f2a3f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="Allied Biologistics"
              width={160}
              height={45}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional cold storage rental services for medical samples,
              stem cells, and serum since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Facility", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-[#00b4d8] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Ultra-Low Storage (-75°C)",
                "Standard Cold Storage (-20°C)",
                "Blood & Plasma Storage",
                "Tissue Preservation",
                "Serum & Stem Cell Storage",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <HiLocationMarker className="text-[#00b4d8] mt-0.5 flex-shrink-0" />
                <a
                  href="https://share.google/K6roa5vrU2lGKRt6q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00b4d8] transition-colors"
                >
                  113, Kalasagar Shopping Hub, Sattadhar Cross Rd, Ghatlodiya,
                  Ahmedabad, Gujarat 380061
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <HiPhone className="text-[#00b4d8] flex-shrink-0" />
                <a
                  href="tel:8849831339"
                  className="text-gray-400 hover:text-[#00b4d8] transition-colors"
                >
                  8849831339
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <HiMail className="text-[#00b4d8] flex-shrink-0" />
                <a
                  href="mailto:daksha.patel@alliedbiologistics.com"
                  className="text-gray-400 hover:text-[#00b4d8] transition-colors"
                >
                  daksha.patel@alliedbiologistics.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Allied Biologistics. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/daksha-patel-206a38207/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#00b4d8] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://share.google/K6roa5vrU2lGKRt6q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#00b4d8] transition-colors"
              aria-label="Google Maps Location"
            >
              <HiLocationMarker size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
