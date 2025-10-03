"use client";

export default function PhoneSectionSkeleton() {
  return (
    <div className="space-y-4 rounded-lg border p-4 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-4 w-28 bg-slate-200 rounded" />
        <div className="h-8 w-8 bg-slate-200 rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        <div className="h-10 sm:col-span-4 bg-slate-200 rounded" />
        <div className="h-10 bg-slate-200 rounded" />
      </div>
    </div>
  );
}
