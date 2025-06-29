import { notFound } from "next/navigation";

export default function CatchAll() {
  notFound(); // ✅ will now use /dashboard/not-found.tsx
}
