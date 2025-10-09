import Userlist from "@/components/serverfetch/user-list";
import { Suspense } from "react";

export default async function serverFetch() {
  return (
    <div className="min-h-screen px-5 py-14 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 text-transparent bg-clip-text">
        Users (Server Fetch)
      </h1>

      <Suspense>
        <Userlist />
      </Suspense>
    </div>
  );
}
