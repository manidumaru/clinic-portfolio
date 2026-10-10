import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Toaster } from "@/components/ui/Toaster";
import { siteConfig } from "@/config/site.config";
import { CLINIC } from "@/constants/clinic";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${CLINIC.name} — ${CLINIC.tagline}`,
  description: CLINIC.description,
  openGraph: {
    title: `${CLINIC.name} — ${CLINIC.tagline}`,
    description: CLINIC.description,
    type: "website",
    locale: "en",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={`font-sans ${siteConfig.animate ? "" : "is-static"}`}>
        <div className="overflow-x-clip">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
