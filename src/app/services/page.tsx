import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services - Opus Communications",
  description: "Explore branding, advertising, digital marketing, activation, event, exhibition, and production services from Opus Communications.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
