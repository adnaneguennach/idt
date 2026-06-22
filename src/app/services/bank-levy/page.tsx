import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Stop IRS Bank Levies - Protect Your Assets",
  description: "Immediate action to release IRS bank levies. Keep your hard-earned money and regain control of your bank accounts.",
};

export default function Page() {
  return <ClientPage />;
}
