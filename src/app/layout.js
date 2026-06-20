import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chandan Koranga | Full Stack Developer ",

  description:
    "Chandan Koranga is a Full Stack Developer skilled in React, Node.js, Express, MongoDB. Explore projects, skills and contact details.",

  keywords: [
    "Chandan Koranga",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
    "Web Developer India",
    "Remote developer",
  ],

  authors: [{ name: "Chandan Koranga" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Chandan Koranga Portfolio",

    description:
      "Explore projects, skills, and contact details of Chandan Koranga.",

    url: "https://chandankoranga.in",

    siteName: "Chandan Koranga Portfolio",

    images: [
      {
        url: "https://chandankoranga.in/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Chandan Koranga Portfolio",
      },
    ],

    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EH2EVDKMVM"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EH2EVDKMVM');
        `}
      </Script>
    </html>
  );
}
