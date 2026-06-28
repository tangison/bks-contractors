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
  title: "BKS Contractors | General Contractor in Namibia | On Time, Every Time",
  description:
    "BKS Contractors, full-service general contractor in Namibia. One team handles your entire build: foundations, plumbing, electrical, roofing. Free quote.",
  keywords: [
    "BKS Contractors",
    "general contractor Namibia",
    "construction company Namibia",
    "Windhoek contractor",
    "construction management",
    "renovations Namibia",
    "commercial plumbing",
    "commercial electrical",
    "roofing Namibia",
    "site clearing",
    "reliable contractor",
  ],
  authors: [{ name: "BKS Contractors" }],
  metadataBase: new URL("https://bkscontractors.cc"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BKS Contractors | Your Project, Built Right",
    description:
      "One team, every trade. Foundations, plumbing, electrical, roofing, delivered on time, every time. Get your free quote.",
    url: "https://bkscontractors.cc",
    siteName: "BKS Contractors",
    locale: "en_NA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BKS Contractors | Your Project, Built Right",
    description:
      "Full-service general contracting in Namibia. One team handles your entire build.",
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
    <html lang="en-NA">
      <head>
        <link rel="icon" href="/bks-logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BKS Contractors",
              description:
                "Full-service general contractor in Namibia. One team handles your entire build: foundations, plumbing, electrical, roofing, and waste removal.",
              url: "https://bkscontractors.cc",
              image: "https://bkscontractors.cc/bks-logo.png",
              telephone: "+264817877867",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Windhoek",
                addressCountry: "NA",
              },
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