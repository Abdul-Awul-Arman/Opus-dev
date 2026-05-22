import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services - Opus",
  description: "Explore business strategy, operations, digital transformation, and financial advisory services from Opus.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
