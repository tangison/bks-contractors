import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-subheading",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BKS Contractors — General Contracting & Construction Management | Namibia",
  description:
    "BKS Contractors delivers comprehensive construction services across Namibia — general contracting, construction management, renovations, plumbing, electrical, roofing, and waste removal. Contact us for reliable, safety-compliant builds.",
  keywords: [
    "BKS Contractors",
    "general contractor Namibia",
    "construction management",
    "renovations Namibia",
    "plumbing",
    "electrical",
    "roofing",
    "waste removal",
    "commercial construction",
    "Windhoek contractor",
  ],
  authors: [{ name: "BKS Contractors" }],
  metadataBase: new URL("https://bkscontractors.cc"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BKS Contractors — Building Tomorrow's Foundations Today",
    description:
      "Full-service general contracting and construction management. From foundation to final completion, we execute with exact tolerances.",
    url: "https://bkscontractors.cc",
    siteName: "BKS Contractors",
    locale: "en_NA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BKS Contractors — Building Tomorrow's Foundations Today",
    description:
      "Full-service general contracting and construction management in Namibia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/bks-logo.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BKS Contractors",
              description:
                "Full-service general contracting and construction management in Namibia.",
              url: "https://bkscontractors.cc",
              telephone: "+264817877867",
              areaServed: {
                "@type": "Country",
                name: "Namibia",
              },
              serviceType: [
                "General Contracting",
                "Construction Management",
                "Renovations",
                "Plumbing",
                "Electrical",
                "Roofing",
                "Waste Removal",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}