import { getData, User } from "@/lib/utils";

export default async function Userlist() {
  const user = await getData();
  return (
    <ul className="mt-8 max-w-md mx-auto overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60">
      {user.map((user: User) => (
        <li
          key={user.id}
          className="px-4 py-3 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors duration-150 first:rounded-t-2xl last:rounded-b-2xl border-b border-neutral-200/70 last:border-b-0 dark:border-neutral-800"
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}
