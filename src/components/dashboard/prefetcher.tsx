// components/layout/prefetcher.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function Prefetcher() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/dashboard/settings");
    router.prefetch("/dashboard/profile");
  }, []);

  return null; // no UI needed
}
