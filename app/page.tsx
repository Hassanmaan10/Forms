import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Link
        href="/register"
        className="bg-custom-600 text-white font-bold px-7 py-3 rounded-2xl"
      >
        Register
      </Link>
    </div>
  );
}
