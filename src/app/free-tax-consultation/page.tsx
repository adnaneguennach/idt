import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Free Tax Consultation - Ideal Tax",
  description: "Learn more about Free Tax Consultation with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
