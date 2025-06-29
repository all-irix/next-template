"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { LoginForm } from "./login-form";

type AuthButtonProps = {
  user: Session["user"] | null;
};

export function AuthButton({ user }: AuthButtonProps) {
  const [loading, setLoading] = useState(false);

  if (!user)
    return (
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button
              className="cursor-pointer"
              disabled={loading}
              onClick={() => setLoading(true)}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <LoginForm />
          </DialogContent>
        </form>
      </Dialog>
    );

  return (
    <div className="flex">
      {user?.image && (
        <Image
          className="overflow-hidden rounded-full"
          src={user.image}
          alt={user.name ?? "User avatar"}
          width={32}
          height={32}
        />
      )}
      <Button
        className="cursor-pointer"
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          await signOut();
          setLoading(false);
        }}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Sign out
      </Button>
    </div>
  );
}
