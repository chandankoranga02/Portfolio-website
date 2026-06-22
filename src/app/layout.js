import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import SplashCursor from '../components/SplashCursor'
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
  metadataBase: new URL("https://chandankoranga.in"),

  title: "Chandan Koranga | Full Stack Developer",

  description:
    "Chandan Koranga is a Full Stack Developer skilled in React, Next.js, Node.js, Express, MongoDB, and TypeScript. Explore projects, skills, and contact details.",

  keywords: [
    "Chandan Koranga",
    "Chandan Singh Koranga",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Portfolio",
    "Web Developer India",
    "GBPIET",
    "Remote Developer",
  ],

  authors: [{ name: "Chandan Koranga" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Chandan Koranga | Full Stack Developer",

    description:
      "Explore projects, skills, and contact details of Chandan Koranga.",

    url: "https://chandankoranga.in",

    siteName: "Chandan Koranga Portfolio",

    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Chandan Koranga Portfolio",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Chandan Koranga | Full Stack Developer",

    description:
      "Explore projects, skills, and contact details of Chandan Koranga.",

    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={4.5}
          PRESSURE={0.25}
          CURL={29}
          SPLAT_RADIUS={0.18}
          SPLAT_FORCE={14500}
          COLOR_UPDATE_SPEED={10}
          SHADING={false}
          RAINBOW_MODE
          COLOR="#A855F7"
        />
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EH2EVDKMVM"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EH2EVDKMVM');
          `}
        </Script>
      </body>
    </html>
  );
}