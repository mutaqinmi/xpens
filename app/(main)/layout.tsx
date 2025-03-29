import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xpens",
  description: "Manage Finance App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full m-4">
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
