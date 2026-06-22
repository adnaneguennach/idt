import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Survey - Ideal Tax",
  description: "Learn more about Survey with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
