import "@/styles/globals.css";

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

import { LayoutShell } from "@/components/layout/layout-shell";
import { auth } from "@/lib/auth";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: "/opengraph-image.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: "/opengraph-image.jpg",
  },
};

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth();

  if (!session) redirect("/login");
  return <LayoutShell>{children}</LayoutShell>;
};

export default DashboardLayout;
