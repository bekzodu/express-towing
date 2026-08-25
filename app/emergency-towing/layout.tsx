import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emergency Towing Nashville · 15–25 Min',
  description:
    'Need a tow right now? Call (615) 259-2727. Live dispatch answers. Typical 15–25 minute arrival across Nashville. No waitlist, no hold music. We send the nearest truck on the call.',
  keywords: [
    'emergency towing Nashville',
    'fast towing Nashville',
    '24/7 towing',
    'tow truck near me',
    'quick tow Nashville',
    'highway rescue Nashville',
  ],
  alternates: { canonical: 'https://expressway-towing.com/emergency-towing/' },
  openGraph: {
    title: 'Emergency Towing Nashville — Don’t wait for a truck',
    description: 'Live 24/7 dispatch. Typical 15–25 min arrival. Call (615) 259-2727.',
    url: 'https://expressway-towing.com/emergency-towing/',
    type: 'website',
    images: [{ url: '/images/hero-banner.jpg', width: 1200, height: 675, alt: 'Expressway Towing emergency dispatch' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Towing Nashville | Don’t wait',
    description: 'Live dispatch. Typical 15–25 minute arrival. Call (615) 259-2727.',
    images: ['/images/hero-banner.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://expressway-towing.com/' },
    { '@type': 'ListItem', position: 2, name: 'Emergency Towing', item: 'https://expressway-towing.com/emergency-towing/' },
  ],
}

export default function EmergencyTowingLayout({
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
