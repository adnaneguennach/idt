import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Ideal Tax Protection Plan - Ideal Tax",
  description: "Learn more about Ideal Tax Protection Plan with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
