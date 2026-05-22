import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prageeth Gunarathne | Full-Stack Developer Portfolio",
  description:
    "Premium modern portfolio of Prageeth Gunarathne, Full-Stack Developer, IT Undergraduate, and Data Science Enthusiast.",
  keywords: [
    "Prageeth Gunarathne",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "Sera Blue Portfolio",
    "Data Science Enthusiast",
  ],
  openGraph: {
    title: "Prageeth Gunarathne | Premium Tech Portfolio",
    description:
      "Modern full-stack portfolio featuring projects, skills, experience, and contact details.",
    type: "website",
  },
  icons: {
    icon: "/me.jpeg",
    shortcut: "/me.jpeg",
    apple: "/me.jpeg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
