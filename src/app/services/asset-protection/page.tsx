import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Tax Asset Protection Services - Ideal Tax",
  description: "Strategic planning to protect your wealth and assets from aggressive tax collection.",
};

export default function Page() {
  return <ClientPage />;
}
