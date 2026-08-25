import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Repossession Towing Nashville',
  description:
    'Discrete repossession for lenders and agencies in Nashville. Licensed crews, legal compliance, secure storage, 24/7. Call (615) 259-2727 to assign a recovery.',
  keywords: [
    'repossession towing Nashville',
    'repo services Nashville',
    'vehicle recovery',
    'bank repossession Tennessee',
    'auto recovery Nashville',
  ],
  alternates: { canonical: 'https://expressway-towing.com/repossession-towing/' },
  openGraph: {
    title: 'Repossession Towing Nashville | Expressway Towing',
    description: 'Discrete, lawful recovery. 24/7. Call (615) 259-2727.',
    url: 'https://expressway-towing.com/repossession-towing/',
    type: 'website',
    images: [{ url: '/images/logo-expressway.png', width: 1200, height: 1200, alt: 'Expressway Towing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Repossession Towing Nashville | Expressway Towing',
    description: 'Discrete recovery for lenders. Call (615) 259-2727.',
    images: ['/images/logo-expressway.png'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://expressway-towing.com/' },
    { '@type': 'ListItem', position: 2, name: 'Repossession Towing', item: 'https://expressway-towing.com/repossession-towing/' },
  ],
}

export default function RepossessionTowingLayout({
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
