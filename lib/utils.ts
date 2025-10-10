import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type User = {
  id: number;
  name: string;
};

export type Props = {
  userPromise: Promise<User[]>;
};

export async function getData() {
  try {
    const respone = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!respone.ok) {
      throw new Error(`HTTP ${respone.status}`);
    }

    const users = await respone.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return users;
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    throw new Error(`Failed to load users: ${msg}`);
  }
}
