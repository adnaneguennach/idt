import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Tax Audits - Ideal Tax",
  description: "Learn more about Tax Audits with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
