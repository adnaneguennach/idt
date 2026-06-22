import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Tax Preparation Service - Ideal Tax",
  description: "Learn more about Tax Preparation Service with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
