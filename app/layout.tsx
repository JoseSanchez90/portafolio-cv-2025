import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type React from "react";
import Script from "next/script";

// Configuración base - ACTUALIZA ESTOS DATOS SEGÚN TU PERFIL
const SITE_URL = "https://josesanchez.vercel.app/"; // Cambia por tu dominio real
const AUTHOR = "José Sánchez";
const JOB_TITLE = "Desarrollador Full Stack"; // Ajusta según tu profesión
const SITE_NAME = "Portafolio José Sánchez";
const DEFAULT_DESCRIPTION =
  "Desarrollador Full Stack especializado en React, Next.js y TypeScript. Explora mis proyectos, experiencia y habilidades en desarrollo web.";
const KEYWORDS =
  "desarrollador, full stack, react, nextjs, typescript, portafolio, proyectos, frontend, javascript";

export const metadata: Metadata = {
  title: {
    default: `${AUTHOR} - ${JOB_TITLE}`,
    template: `%s | ${AUTHOR}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: AUTHOR }],
  creator: AUTHOR,

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://josesanchez.vercel.app/",
    title: `${AUTHOR} - ${JOB_TITLE}`,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`, // Crea una imagen OG de 1200x630px
        width: 1200,
        height: 630,
        alt: `${AUTHOR} - ${JOB_TITLE}`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${AUTHOR} - ${JOB_TITLE}`,
    description: DEFAULT_DESCRIPTION,
    creator: "@tutusuario", // Reemplaza con tu usuario de Twitter
    images: [`${SITE_URL}/og-image.jpg`],
  },

  // Metadatos adicionales
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Favicons y icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Manifest para PWA
  manifest: `${SITE_URL}/manifest.json`,

  // Verificaciones (opcional)
  verification: {
    google: "tu-codigo-de-verificacion-google", // Para Google Search Console
    yandex: "tu-codigo-de-verificacion-yandex",
    yahoo: "tu-codigo-de-verificacion-yahoo",
  },

  // Metadatos alternativos
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-ES": SITE_URL,
    },
  },

  // Categorización (opcional)
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR,
    jobTitle: JOB_TITLE,
    url: SITE_URL,
    sameAs: [
      "https://github.com/tuusuario",
      "https://linkedin.com/in/tuusuario",
      "https://twitter.com/tutusuario",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
    ],
  };

  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TBXRS3FE3N`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TBXRS3FE3N');
          `}
        </Script>

        {/* Structured Data (JSON-LD) */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Viewport y tema para móviles */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />

        {/* Preconnects para mejor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
