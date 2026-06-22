import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Irs Fresh Start Program - Ideal Tax",
  description: "Learn more about Irs Fresh Start Program with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
