import { Metadata } from "next";
import ClientPage from "./Client";

export const metadata: Metadata = {
  title: "Stop IRS Wage Garnishments - Keep Your Paycheck",
  description: "Stop the IRS from taking your paycheck. We negotiate immediate wage garnishment releases.",
};

export default function Page() {
  return <ClientPage />;
}
