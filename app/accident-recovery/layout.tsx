import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accident Recovery Nashville · Fast Scene Clear',
  description:
    'Crash on I-40 or a side street? Call (615) 259-2727. Fast accident recovery and vehicle extraction in Nashville. Insured crews, insurance-ready photos, 24/7.',
  keywords: [
    'accident recovery Nashville',
    'accident towing Nashville',
    'vehicle extraction',
    'collision recovery',
    'stuck vehicle recovery Nashville',
  ],
  alternates: { canonical: 'https://expressway-towing.com/accident-recovery/' },
  openGraph: {
    title: 'Accident Recovery Nashville — off the shoulder, fast',
    description: 'Scene-safe recovery 24/7. Call (615) 259-2727. Typical arrival around 30 minutes.',
    url: 'https://expressway-towing.com/accident-recovery/',
    type: 'website',
    images: [{ url: '/images/hero-banner.jpg', width: 1200, height: 675, alt: 'Expressway Towing accident recovery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accident Recovery Nashville | Expressway Towing',
    description: 'Clear the scene fast. Call (615) 259-2727.',
    images: ['/images/hero-banner.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://expressway-towing.com/' },
    { '@type': 'ListItem', position: 2, name: 'Accident Recovery', item: 'https://expressway-towing.com/accident-recovery/' },
  ],
}

export default function AccidentRecoveryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
