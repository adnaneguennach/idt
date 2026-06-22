import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Reviews - Ideal Tax",
  description: "Learn more about Reviews with Ideal Tax's expert services.",
};

export default function Page() {
  return <ClientPage />;
}
