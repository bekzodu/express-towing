import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Towing Near You · Nashville, Franklin, Brentwood',
  description:
    'Local trucks mean shorter waits. Expressway Towing covers Nashville, Franklin, Brentwood, Murfreesboro, Hendersonville, Lebanon, and Smyrna. Typical arrival 20–40 min. Call (615) 259-2727.',
  keywords: [
    'towing near me Nashville',
    'towing Franklin TN',
    'towing Brentwood',
    'towing Murfreesboro',
    'Middle Tennessee towing',
    'fast local tow truck',
  ],
  alternates: { canonical: 'https://expressway-towing.com/service-areas/' },
  openGraph: {
    title: 'Faster tows because the trucks are already local',
    description: 'Nashville and surrounding cities. Typical arrival 20–40 minutes. Call (615) 259-2727.',
    url: 'https://expressway-towing.com/service-areas/',
    type: 'website',
    images: [{ url: '/images/hero-banner.jpg', width: 1200, height: 675, alt: 'Expressway Towing service area coverage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Towing Near You in Middle Tennessee',
    description: 'Local trucks. Shorter wait. Call (615) 259-2727.',
    images: ['/images/hero-banner.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://expressway-towing.com/' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://expressway-towing.com/service-areas/' },
  ],
}

export default function ServiceAreasLayout({
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
