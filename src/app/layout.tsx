import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DCafe - Cafe & Billiards",
  description: "Planning a visit? Call us to reserve your table and enjoy your dining experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
