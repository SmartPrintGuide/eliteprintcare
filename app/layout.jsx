import './globals.css';
import Providers from '@/components/Providers';
import AppShell from '@/components/AppShell';

export const metadata = {
  metadataBase: new URL('https://eliteprintcare.com'),
  title: {
    default: 'Elite Print Care - Printers, Ink, Toner, and Office Supplies',
    template: '%s | Elite Print Care',
  },
  description: 'Elite Print Care is your source for printers, ink, toner, and office supplies. Shop home and office printers with fast shipping, expert support, and product guides.',
  keywords: [
    'eliteprintcare',
    'printers',
    'ink cartridges',
    'toner cartridges',
    'office printers',
    'home printers',
    'printer supplies',
    'printer buying guide',
    'printer reviews',
    'printing solutions',
    'laser printers',
    'inkjet printers',
  ],
  authors: [{ name: 'Elite Print Care' }],
  creator: 'Elite Print Care',
  publisher: 'Elite Print Care',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en-CA': '/',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Elite Print Care - Printers, Ink, Toner, and Office Supplies',
    description: 'Elite Print Care helps you find the best printers, ink, toner, and office printing guides with fast shipping and expert support.',
    url: 'https://eliteprintcare.com/',
    siteName: 'Elite Print Care',
    images: [
      {
        url: 'https://eliteprintcare.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Print Care | Printers, Ink, Toner, and Office Supplies',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Print Care - Printers, Ink, Toner, and Office Supplies',
    description: 'Discover printing guides, printer deals, ink, toner, and office printer solutions at Elite Print Care.',
    images: ['https://eliteprintcare.com/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  other: {
    language: 'English',
    distribution: 'global',
    'revisit-after': '7 days',
    'msapplication-TileColor': '#f97316',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
    'application-name': 'Elite Print Care',
    'apple-mobile-web-app-title': 'Elite Print Care',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
