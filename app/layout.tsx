import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Weight } from "lucide-react";
import Navbar from "@/components/navbar/navbar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased min-h-[100dvh]`}>
        <Theme className="min-h-screen relative">
          <div className="fixed inset-0 z-0 h-full w-full">
            <DotPattern />
          </div>
          <Navbar />
          <div className="relative z-10">{children}</div>
        </Theme>
      </body>
    </html>
  );
}
