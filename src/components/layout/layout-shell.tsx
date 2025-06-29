import Sidebar from "@/components/layout/sidebar";
import TopBar from "@/components/layout/topbar";
import { SidebarProvider } from "@/components/ui/sidebar";

type Props = {
  children: React.ReactNode;
};

export function LayoutShell({ children }: Props) {
  return (
    <SidebarProvider>
      <div className="bg-background text-foreground flex h-screen w-screen overflow-hidden">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="bg-background sticky top-0 z-50 shadow-sm">
            <TopBar />
          </div>

          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
