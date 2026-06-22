import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "IRS Asset Seizure Protection - Ideal Tax",
  description: "Protect your home, vehicles, and assets from IRS seizure. Our tax attorneys provide emergency representation.",
};

export default function Page() {
  return <ClientPage />;
}
