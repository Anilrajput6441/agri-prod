import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NatureInternational - Premium Agricultural Exports from India",
  description: "Premium agricultural exports from India.",
  icons: {
    icon: [
      {
        url: "/aliflogo2-20260524.png",
        type: "image/png",
        sizes: "1024x1024",
      },
    ],
    shortcut: "/aliflogo2-20260524.png",
    apple: "/aliflogo2-20260524.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
