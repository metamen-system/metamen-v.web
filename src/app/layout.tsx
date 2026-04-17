import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';
import Toaster from '@/components/ui/Toaster';
import { ThemeProvider } from '@/providers/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'METAMEN100',
  description: 'Sistema Operativo de Conducta — Protocolo de 100 días',
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon-192x192.png',
    apple: '/icons/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'MM100',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'light' || theme === 'dark') {
                  document.documentElement.classList.add(theme);
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-white dark:bg-bg-base text-text-inverse dark:text-text-primary min-h-screen antialiased`}
      >
        <ThemeProvider>
          {children}
          <ServiceWorkerRegistration />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
