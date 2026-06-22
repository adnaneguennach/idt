import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Careers - Ideal Tax",
  description: "Learn more about Careers with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
