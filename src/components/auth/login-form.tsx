"use client";

import { Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { EmailLoginForm } from "./email-login-form";
import { SocialLoginButton } from "./social-login-button";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  return (
    <div
      className={cn("mx-auto flex max-w-sm flex-col gap-6", className)}
      {...props}
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            {showEmailForm
              ? "Login with your email and password"
              : "Login with your Meta, Google, or GitHub account"}
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          {!showEmailForm ? (
            <>
              <SocialLoginButton
                provider="facebook"
                icon={<FaFacebookF className="h-4 w-4" />}
                label="Login with Meta"
                isLoading={loadingProvider === "facebook"}
                setLoading={setLoadingProvider}
              />

              <SocialLoginButton
                provider="google"
                icon={<Mail className="h-4 w-4" />}
                label="Login with Google"
                isLoading={loadingProvider === "google"}
                setLoading={setLoadingProvider}
              />

              <SocialLoginButton
                provider="github"
                icon={<FaGithub className="h-4 w-4" />}
                label="Login with GitHub"
                isLoading={loadingProvider === "github"}
                setLoading={setLoadingProvider}
              />
            </>
          ) : (
            <EmailLoginForm />
          )}

          <div className="text-center text-sm">
            {showEmailForm ? (
              <>
                Prefer using social login?{" "}
                <button
                  className="text-primary underline underline-offset-4"
                  onClick={() => setShowEmailForm(false)}
                >
                  Use SSO
                </button>
              </>
            ) : (
              <>
                Prefer email?{" "}
                <button
                  className="text-primary underline underline-offset-4"
                  onClick={() => setShowEmailForm(true)}
                >
                  Use email/password
                </button>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="text-muted-foreground mt-2 text-center text-xs text-balance">
        <ShieldCheck className="mx-auto mb-1 h-3 w-3" />
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline underline-offset-4">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
