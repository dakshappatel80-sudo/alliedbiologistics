import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Allied Biologistics | Cold Storage Solutions for Medical Samples",
  description:
    "Allied Biologistics provides professional cold storage rental services for medical samples, stem cells, and serum in Ahmedabad, India. Operating at -75°C and -20°C.",
  keywords:
    "cold storage, medical samples, biologistics, Ahmedabad, stem cells, serum storage, -75°C storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
