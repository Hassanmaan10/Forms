"use client";
import dynamic from "next/dynamic";
import FormCardSkeleton from "@/components/form/formcardskeleton/FormCardSkeleton";

const FormCardNoSSR = dynamic(() => import("@/components/form/FormCard"), {
  ssr: false, // ⬅️ client-only
  loading: () => <FormCardSkeleton />, // ⬅️ shows while JS loads
});

export default function FormCardClient() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <FormCardNoSSR />
    </div>
  );
}
