"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { usePreferences } from "@/hooks/use-preferences";

export default function PreferencesPage() {
  const {
    cookiesAccepted,
    setCookiesAccepted,
    theme,
    setTheme,
    language,
    setLanguage,
  } = usePreferences();

  return (
    <div className="container py-12">
      <Card>
        <CardHeader>
          <CardTitle>User Preferences</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-6">
          {/* Theme selector */}
          <div className="grid gap-1">
            <Label htmlFor="theme">Theme</Label>
            <Select
              value={theme}
              onValueChange={(v) => setTheme(v as "light" | "dark" | "system")}
            >
              <SelectTrigger id="theme">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Language selector */}
          <div className="grid gap-1">
            <Label htmlFor="language">Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Cookie preference */}
          <div className="flex items-center justify-between">
            <div className="grid gap-1">
              <Label>Cookie Consent</Label>
              <p className="text-muted-foreground text-sm">
                Required to enable analytics and features
              </p>
            </div>
            <Switch
              checked={cookiesAccepted}
              onCheckedChange={setCookiesAccepted}
            />
          </div>

          <Button
            variant="outline"
            onClick={() => {
              setCookiesAccepted(false);
              setTheme("system");
              setLanguage("en");
            }}
          >
            Reset to Default
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
