import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] gap-2">
      <Link
        href="/register"
        className="bg-custom-600 text-white font-bold px-7 py-3 rounded-2xl"
      >
        Register
      </Link>
      <Link
        href="/server"
        className="bg-custom-800 text-white font-bold px-5 py-3 rounded-2xl"
      >
        server fetch
      </Link>
      <Link
        href="/client"
        className="bg-custom-900 text-white font-bold px-7 py-3 rounded-2xl"
      >
        client fetch
      </Link>
    </div>
  );
}
