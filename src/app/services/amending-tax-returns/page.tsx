import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Amending Tax Returns - Ideal Tax",
  description: "Learn more about Amending Tax Returns with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
