import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a2a3a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://expressway-towing.com'),
  title: {
    default: 'Expressway Towing | 24/7 Emergency Towing Nashville TN | (615) 259-2727',
    template: '%s | Expressway Towing Nashville'
  },
  description: 'Nashville\'s trusted 24/7 towing service. Emergency roadside assistance, flatbed towing, heavy hauling, private property impounding & cash for junk cars. Serving Nashville, Franklin, Brentwood, Murfreesboro. Call (615) 259-2727 for fast response.',
  keywords: ['towing Nashville TN', '24/7 towing Nashville', 'emergency towing Nashville', 'roadside assistance Nashville', 'flatbed towing Nashville', 'tow truck Nashville', 'junk car removal Nashville', 'cash for junk cars Nashville', 'heavy duty towing Nashville', 'private property towing Nashville', 'Franklin TN towing', 'Brentwood TN towing', 'accident recovery Nashville', 'repossession towing Nashville'],
  authors: [{ name: 'Expressway Towing' }],
  creator: 'Expressway Towing',
  publisher: 'Expressway Towing',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/tow-truck.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/logo192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/logo192.png', sizes: '192x192' },
      { rel: 'icon', url: '/logo512.png', sizes: '512x512' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Expressway Towing | 24/7 Emergency Towing Nashville TN',
    description: 'Nashville\'s trusted 24/7 towing service. Emergency roadside assistance, flatbed towing, heavy hauling & cash for junk cars. Call (615) 259-2727.',
    url: 'https://expressway-towing.com',
    siteName: 'Expressway Towing',
    images: [
      {
        url: '/social-share.png',
        width: 1200,
        height: 630,
        alt: 'Expressway Towing - 24/7 Emergency Towing Nashville TN'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expressway Towing | 24/7 Emergency Towing Nashville TN',
    description: 'Nashville\'s trusted 24/7 towing service. Fast response, 24/7 availability. Call (615) 259-2727.',
    images: ['/social-share.png'],
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
  alternates: {
    canonical: 'https://expressway-towing.com',
  },
  category: 'Automotive Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="US-TN" />
        <meta name="geo.placename" content="Nashville" />
        <meta name="geo.position" content="36.1627;-86.7816" />
        <meta name="ICBM" content="36.1627, -86.7816" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TowingService",
              "name": "Expressway Towing",
              "image": "https://expressway-towing.com/social-share.png",
              "description": "Nashville's trusted 24/7 towing service providing emergency roadside assistance, flatbed towing, heavy hauling, private property impounding, and cash for junk cars.",
              "@id": "https://expressway-towing.com",
              "url": "https://expressway-towing.com",
              "telephone": "+16152592727",
              "email": "Expresswaytow1@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nashville",
                "addressRegion": "TN",
                "postalCode": "37203",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 36.1627,
                "longitude": -86.7816
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/expresswaytowing",
                "https://www.instagram.com/expresswaytowing"
              ],
              "priceRange": "$$",
              "areaServed": [
                {"@type": "City", "name": "Nashville", "sameAs": "https://en.wikipedia.org/wiki/Nashville,_Tennessee"},
                {"@type": "City", "name": "Franklin"},
                {"@type": "City", "name": "Brentwood"},
                {"@type": "City", "name": "Murfreesboro"},
                {"@type": "City", "name": "Hendersonville"},
                {"@type": "City", "name": "Lebanon"},
                {"@type": "City", "name": "Smyrna"}
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Towing Services",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Emergency Towing", "url": "https://expressway-towing.com/emergency-towing"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Accident Recovery", "url": "https://expressway-towing.com/accident-recovery"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Repossession Towing", "url": "https://expressway-towing.com/repossession-towing"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Flatbed Towing"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Roadside Assistance"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Heavy Hauling"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Private Property Impounding"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cash for Junk Cars"}}
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "127"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Expressway Towing",
              "url": "https://expressway-towing.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://expressway-towing.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Main Navigation",
              "hasPart": [
                {
                  "@type": "SiteNavigationElement",
                  "name": "Emergency Towing",
                  "description": "Fast response, 24/7 availability. Upfront pricing, no surprises.",
                  "url": "https://expressway-towing.com/emergency-towing"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Accident & Recovery",
                  "description": "Accidents, stuck vehicles, breakdowns. Professional, insured service.",
                  "url": "https://expressway-towing.com/accident-recovery"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Repossession Towing",
                  "description": "Discrete and reliable service. Serving lenders and agencies.",
                  "url": "https://expressway-towing.com/repossession-towing"
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Service Areas",
                  "description": "Nashville & surrounding cities. Fast local dispatch.",
                  "url": "https://expressway-towing.com/service-areas"
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
