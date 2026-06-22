import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Innocent Spouse Tax Relief - Ideal Tax",
  description: "Learn more about Innocent Spouse Tax Relief with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
