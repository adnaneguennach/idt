import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Offer In Compromise - Ideal Tax",
  description: "Learn more about Offer In Compromise with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
