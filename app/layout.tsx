import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1c1917',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://expressway-towing.com'),
  title: {
    default: "Stuck? Don't Wait | 24/7 Towing Nashville ~30 Min",
    template: '%s | Expressway Towing',
  },
  description:
    'Stuck in Nashville? Call (615) 259-2727. Live dispatch 24/7 — a person answers, we send the nearest truck. Typical arrival around 30 minutes. No waitlist. Flatbed, roadside, and accident recovery.',
  keywords: [
    'fast towing Nashville',
    'towing Nashville TN',
    '24/7 towing Nashville',
    'emergency towing Nashville',
    'tow truck near me Nashville',
    'quick tow truck Nashville',
    'roadside assistance Nashville',
    'flatbed towing Nashville',
    'tow truck Nashville',
    '30 minute towing Nashville',
    'junk car removal Nashville',
    'cash for junk cars Nashville',
    'heavy duty towing Nashville',
    'private property towing Nashville',
    'Franklin TN towing',
    'Brentwood TN towing',
    'accident recovery Nashville',
    'repossession towing Nashville',
  ],
  authors: [{ name: 'Expressway Towing' }],
  creator: 'Expressway Towing',
  publisher: 'Expressway Towing',
  formatDetection: { telephone: true, email: true, address: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Stuck in Nashville? Don't wait — get a truck rolling now",
    description:
      'Live 24/7 dispatch. Typical arrival around 30 minutes. Call (615) 259-2727 — we send the nearest truck on the call.',
    url: 'https://expressway-towing.com/',
    siteName: 'Expressway Towing',
    images: [
      {
        url: '/images/hero-banner.jpg',
        width: 1200,
        height: 675,
        alt: 'Expressway Towing truck ready for 24/7 Nashville dispatch',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Don't wait for a tow in Nashville | Expressway Towing",
    description: 'Live dispatch 24/7. Typical ~30 min arrival. Call (615) 259-2727.',
    images: ['/images/hero-banner.jpg'],
    creator: '@expresswaytow',
  },
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
  alternates: { canonical: 'https://expressway-towing.com/' },
  category: 'Automotive Services',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TowingService',
  name: 'Expressway Towing',
  slogan: "Stuck? Don't wait. Get a truck rolling now.",
  image: [
    'https://expressway-towing.com/images/hero-banner.jpg',
    'https://expressway-towing.com/images/logo-expressway.png',
  ],
  logo: 'https://expressway-towing.com/images/logo-expressway.png',
  description:
    '24/7 emergency towing in Nashville and Middle Tennessee. Live dispatch, typical arrival around 30 minutes, flatbed towing, roadside assistance, accident recovery, and cash for junk cars.',
  '@id': 'https://expressway-towing.com/#business',
  url: 'https://expressway-towing.com/',
  telephone: '+16152592727',
  email: 'Expresswaytow1@gmail.com',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+16152592727',
    contactType: 'customer service',
    areaServed: 'US-TN',
    availableLanguage: 'English',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  },
  potentialAction: {
    '@type': 'CommunicateAction',
    name: 'Call for a tow',
    target: 'tel:+16152592727',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nashville',
    addressRegion: 'TN',
    postalCode: '37203',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.1627,
    longitude: -86.7816,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.facebook.com/expresswaytowing',
    'https://www.instagram.com/expresswaytowing',
  ],
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'Nashville', sameAs: 'https://en.wikipedia.org/wiki/Nashville,_Tennessee' },
    { '@type': 'City', name: 'Franklin' },
    { '@type': 'City', name: 'Brentwood' },
    { '@type': 'City', name: 'Murfreesboro' },
    { '@type': 'City', name: 'Hendersonville' },
    { '@type': 'City', name: 'Lebanon' },
    { '@type': 'City', name: 'Smyrna' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Towing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Towing', url: 'https://expressway-towing.com/emergency-towing/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Accident Recovery', url: 'https://expressway-towing.com/accident-recovery/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Repossession Towing', url: 'https://expressway-towing.com/repossession-towing/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flatbed Towing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roadside Assistance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heavy Hauling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Property Impounding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cash for Junk Cars' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '127',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Expressway Towing',
  url: 'https://expressway-towing.com/',
  inLanguage: 'en-US',
  description: "Stuck in Nashville? Don't wait. Live 24/7 dispatch with typical arrival around 30 minutes.",
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can you arrive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical arrival is around 30 minutes in most Nashville-area locations. We dispatch the nearest truck on the call — there is no waitlist and no appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I have to wait on hold?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Dispatch is live 24/7. A person answers, takes your location, and sends a truck on that same call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work with most major insurance providers and roadside programs and can help coordinate the claim.',
      },
    },
    {
      '@type': 'Question',
      name: 'What vehicles can you tow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cars, trucks, SUVs, motorcycles, RVs, and commercial equipment. The fleet includes flatbeds, wheel-lifts, and heavy-duty wreckers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you available on holidays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We operate 24/7, 365 days a year, including nights, weekends, and holidays.',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <meta name="geo.region" content="US-TN" />
        <meta name="geo.placename" content="Nashville" />
        <meta name="geo.position" content="36.1627;-86.7816" />
        <meta name="ICBM" content="36.1627, -86.7816" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
