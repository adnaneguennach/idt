import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Tax Lien Subordination & Withdrawal - Ideal Tax",
  description: "Remove or subordinate IRS tax liens to sell property, refinance, or restore your credit.",
};

export default function Page() {
  return <ClientPage />;
}
