import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://savageflowco.site"),
  title: {
    default: "Savage Flow Co.",
    template: "%s | Savage Flow Co.",
  },
  description: "Nothing beats the ride.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        try {
          var t = localStorage.getItem('theme');
          if (t === 'dark' || (!t && matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          }
        } catch (e) {}
      `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
