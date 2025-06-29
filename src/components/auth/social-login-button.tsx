"use client";

import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { ReactNode } from "react";

import { Button } from "@/components/ui/button";

type Props = {
  provider: string;
  icon: ReactNode;
  label: string;
  isLoading: boolean;
  setLoading: (provider: string | null) => void;
};

export function SocialLoginButton({
  provider,
  icon,
  label,
  isLoading,
  setLoading,
}: Props) {
  const handleClick = async () => {
    try {
      setLoading(provider);
      await signIn(provider);
    } finally {
    }
  };

  return (
    <Button
      variant="outline"
      className="flex w-full items-center gap-2"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
      {label}
    </Button>
  );
}
