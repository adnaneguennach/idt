import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Contact Us - Ideal Tax",
  description: "Learn more about Contact Us with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
