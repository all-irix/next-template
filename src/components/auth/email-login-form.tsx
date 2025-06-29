"use client";

import { LogIn } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EmailLoginForm() {
  return (
    <form className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <a href="#" className="text-sm underline-offset-4 hover:underline">
            Forgot password?
          </a>
        </div>
        <Input id="password" type="password" required />
      </div>

      <Button type="submit" className="flex w-full items-center gap-2">
        <LogIn className="h-4 w-4" />
        Login
      </Button>
    </form>
  );
}
