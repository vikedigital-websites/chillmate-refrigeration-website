import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ChillMate Refrigeration",
    description: "When it comes to refrigeration solutions, we offer fast, reliable, and affordable services you can depend on. Count on us to maximize efficiency and minimize downtime.",
    verification: {
        google: "google-site-verification=Nbk-josjHS86qMhB2P0-RyKu8vmVsMbWY5ejHUfuEOc",
    },
};

export const viewport: Viewport = {
    // width: "device-width",
    // initialScale: 1,
    // viewportFit: "cover",
    // themeColor: "#ffffff",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
            <GoogleAnalytics gaId='G-C17NJTD36C' />
        </html>
    );
}
