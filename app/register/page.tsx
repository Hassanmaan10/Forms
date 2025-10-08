import { Metadata } from "next";
import FormCardClient from "../../components/form/FormCardClient";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Create your PureLife account to manage deliveries, track orders, save addresses and payment methods, and unlock exclusive offers.",
  alternates: { canonical: "/register" },
  openGraph: {
    title: "Register | PureLife Water",
    description:
      "Create your PureLife account to manage deliveries, track orders, and unlock exclusive offers.",
    url: "/register",
    images: [{ url: "/og-register.jpg", width: 1200, height: 630 }],
  },
};

export default async function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center p-">
      <FormCardClient />
    </div>
  );
}
