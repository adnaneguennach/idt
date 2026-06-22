import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Unfiled & Unpaid Back Taxes Relief - Ideal Tax",
  description: "Get caught up on unfiled returns and resolve back tax debt. Stop IRS penalties from growing.",
};

export default function Page() {
  return <ClientPage />;
}
