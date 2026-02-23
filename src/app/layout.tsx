import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumqayıt Dövlət Universiteti - DİM Portalı",
  description: "Dayanıqlı Gələcəyi Bu Gündən Şəkilləndiririk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="pt-24">{/* Spacer for fixed navbar */}
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
