import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getData() {
  const respone = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await respone.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return users;
}
