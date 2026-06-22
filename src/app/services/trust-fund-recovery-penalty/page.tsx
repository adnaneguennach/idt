import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Trust Fund Recovery Penalty Defense - Ideal Tax",
  description: "Protect your personal assets from business payroll tax debts. TFRP defense for business owners.",
};

export default function Page() {
  return <ClientPage />;
}
