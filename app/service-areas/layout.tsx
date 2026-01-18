import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas - Nashville, Franklin, Brentwood & More',
  description: 'Nashville & surrounding cities. Fast local dispatch. Serving Nashville, Franklin, Brentwood, Murfreesboro, Hendersonville, Lebanon, Smyrna. Call (615) 259-2727.',
  keywords: ['towing Nashville', 'towing Franklin TN', 'towing Brentwood', 'towing Murfreesboro', 'Middle Tennessee towing', 'towing service areas'],
  openGraph: {
    title: 'Service Areas | Expressway Towing Nashville',
    description: 'Fast local dispatch across Nashville & surrounding cities. Professional towing throughout Middle Tennessee. Call (615) 259-2727.',
    url: 'https://expressway-towing.com/service-areas',
  },
}

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
