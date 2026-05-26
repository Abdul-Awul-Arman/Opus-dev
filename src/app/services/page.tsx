import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, siteConfig, webPageJsonLd } from "@/lib/seo";
import ServicesPageClient from "./ServicesPageClient";

const description =
  "Explore Opus Communications services for brand strategy, advertising, digital marketing, software development, activation, event management, exhibitions, and content production.";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description,
  path: "/services",
  image: "/images/og/services-og.jpg",
  keywords: [
    "brand strategy consultancy",
    "creative advertising solutions",
    "digital social media marketing",
    "web mobile desktop app development",
    "software development agency Dhaka",
    "BTL activation agency",
    "event exhibition agency Dhaka",
    "content production agency",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={[
          webPageJsonLd({
            path: "/services",
            name: "Opus Communications Services",
            description,
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${absoluteUrl("/services")}#services`,
            name: "Opus Communications Services",
            itemListElement: [
              "Brand Strategy & Design",
              "Creative Advertising & Content Production",
              "Digital & Social Media Marketing",
              "Web, Mobile & Desktop App Development",
              "Activation, Events & Exhibitions",
            ].map((name, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name,
                provider: {
                  "@id": `${siteConfig.url}/#organization`,
                },
                areaServed: "Bangladesh",
              },
            })),
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <ServicesPageClient />
    </>
  );
}
