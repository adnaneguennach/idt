import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Penalty Abatement - Ideal Tax",
  description: "Learn more about Penalty Abatement with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
