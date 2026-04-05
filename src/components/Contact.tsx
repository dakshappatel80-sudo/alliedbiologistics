"use client";

import { useState, FormEvent } from "react";
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
  HiExternalLink,
  HiPaperAirplane,
  HiCheckCircle,
  HiClipboardCopy,
} from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

const BUSINESS_EMAIL = "daksha.patel@alliedbiologistics.com";

const contactInfo = [
  {
    icon: HiLocationMarker,
    title: "Visit us",
    content:
      "113, Kalasagar Shopping Hub, Sattadhar Cross Rd, opp. Saibaba Temple, Ghatlodiya, Ahmedabad, Gujarat 380061",
    href: "https://share.google/K6roa5vrU2lGKRt6q",
  },
  {
    icon: HiPhone,
    title: "Call us",
    content: "8849831339",
    href: "tel:8849831339",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    content: "Daksha Patel",
    href: "https://www.linkedin.com/in/daksha-patel-206a38207/",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS_EMAIL);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      setEmailCopied(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          website: honeypot,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ?? "We could not send your message. Please try again."
        );
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setHoneypot("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and retry.");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#f0f7fa] to-[#e8f4f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <span className="text-[#00b4d8] font-semibold text-sm uppercase tracking-[0.2em]">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0f2a3f] mt-3 tracking-tight">
            Get in Touch With Us
          </h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Send a message from this page — we&apos;ll receive it directly. Prefer
            a quick call? Use the number on the left.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(15,42,63,0.25)] border border-[#0f2a3f]/10 bg-white grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          {/* Left — brand panel + details */}
          <div className="relative bg-[#0f2a3f] text-white p-10 lg:p-12 flex flex-col justify-between min-h-[420px]">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#00b4d8]/15 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[#00b4d8]/10 blur-2xl"
              aria-hidden
            />

            <div className="relative">
              <p className="text-[#00b4d8] text-sm font-semibold uppercase tracking-widest mb-3">
                Allied Biologistics
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug mb-4">
                Cold storage questions?
                <span className="text-[#7dd3ea]"> We respond within one business day.</span>
              </h3>
              <p className="text-white/75 text-sm leading-relaxed max-w-md">
                Use the form to describe your samples, temperature needs, and
                timeline. For urgent matters, call us during working hours.
              </p>
            </div>

            <ul className="relative mt-10 space-y-5">
              {contactInfo.map((item) => (
                <li key={item.title} className="flex gap-4 items-start">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#7dd3ea]">
                    <item.icon className="text-xl" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#7dd3ea]/90">
                      {item.title}
                    </p>
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-white/90 text-sm mt-1 block hover:text-[#7dd3ea] transition-colors leading-relaxed"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-white/90 text-sm mt-1 leading-relaxed">
                        {item.content}
                      </p>
                    )}
                  </div>
                </li>
              ))}

              <li className="flex gap-4 items-start pt-1">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#7dd3ea]">
                  <HiMail className="text-xl" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7dd3ea]/90">
                    Email
                  </p>
                  <p className="text-white/90 text-sm mt-1 break-all font-mono">
                    {BUSINESS_EMAIL}
                  </p>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#00b4d8] hover:text-[#7dd3ea] transition-colors"
                  >
                    <HiClipboardCopy className="text-base" />
                    {emailCopied ? "Copied!" : "Copy address"}
                  </button>
                </div>
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div className="p-8 sm:p-10 lg:p-12 bg-white">
            {status === "success" ? (
              <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center px-4 py-8">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 mb-6">
                  <HiCheckCircle className="text-4xl" />
                </span>
                <h3 className="text-2xl font-bold text-[#0f2a3f]">
                  Message sent
                </h3>
                <p className="text-gray-600 mt-3 max-w-sm leading-relaxed">
                  Thank you for reaching out. Our team will get back to you
                  shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[#00b4d8] font-semibold hover:text-[#0f2a3f] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0f2a3f]">
                    Write to us
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Fields marked with * are required.
                  </p>
                </div>

                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
                  style={{ clip: "rect(0,0,0,0)" }}
                  aria-hidden="true"
                />

                {status === "error" && errorMessage && (
                  <div
                    className="rounded-xl bg-red-50 border border-red-100 text-red-800 text-sm px-4 py-3"
                    role="alert"
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#0f2a3f]/80 mb-2"
                    >
                      Full name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      autoComplete="name"
                      disabled={status === "loading"}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#fafcfd] text-[#0f2a3f] placeholder:text-gray-400 focus:border-[#00b4d8] focus:ring-2 focus:ring-[#00b4d8]/25 outline-none transition-all disabled:opacity-60"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#0f2a3f]/80 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      autoComplete="email"
                      disabled={status === "loading"}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#fafcfd] text-[#0f2a3f] placeholder:text-gray-400 focus:border-[#00b4d8] focus:ring-2 focus:ring-[#00b4d8]/25 outline-none transition-all disabled:opacity-60"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0f2a3f]/80 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    autoComplete="tel"
                    disabled={status === "loading"}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#fafcfd] text-[#0f2a3f] placeholder:text-gray-400 focus:border-[#00b4d8] focus:ring-2 focus:ring-[#00b4d8]/25 outline-none transition-all disabled:opacity-60"
                    placeholder="Optional — helps us reach you faster"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0f2a3f]/80 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#fafcfd] text-[#0f2a3f] placeholder:text-gray-400 focus:border-[#00b4d8] focus:ring-2 focus:ring-[#00b4d8]/25 outline-none transition-all resize-none disabled:opacity-60"
                    placeholder="Tell us about sample type, volumes, temperatures (-75°C / -20°C), and how soon you need space…"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0f2a3f] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#1a3d5c] transition-colors duration-200 shadow-lg shadow-[#0f2a3f]/20 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === "loading" ? (
                    <>
                      <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="text-xl -rotate-45 translate-y-0.5" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-md border border-gray-200/80 bg-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2!2d72.54!3d23.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA0JzEyLjAiTiA3MsKwMzInMjQuMCJF!5e0!3m2!1sen!2sin!4v1680000000000"
            width="100%"
            height={280}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Allied Biologistics Location"
            className="w-full"
          />
          <a
            href="https://share.google/K6roa5vrU2lGKRt6q"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#fafcfd] text-[#0f2a3f] font-medium py-3.5 text-sm hover:text-[#00b4d8] transition-colors border-t border-gray-100"
          >
            <HiExternalLink />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
