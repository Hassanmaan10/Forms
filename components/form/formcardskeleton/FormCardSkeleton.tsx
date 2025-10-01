"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FormCardSkeleton() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-28" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-56 mt-2" />
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* Personal info: first + last */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full" />
        </div>

        {/* Passwords */}
        <div className="space-y-4 rounded-lg p-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        {/* Phones section */}
        <div className="space-y-4 rounded-lg  p-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>

          {/* one phone row placeholder */}
          <div className="grid grid-cols-1  sm:grid-cols-5 gap-3">
            <Skeleton className="h-10 sm:col-span-4 w-full" />
            <Skeleton className="h-10 w-full sm:w-24" />
          </div>
        </div>

        {/* Submit */}
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  );
}
