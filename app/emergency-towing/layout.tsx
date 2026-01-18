import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emergency Towing Nashville - Fast 24/7 Response',
  description: 'Fast response, 24/7 availability. Upfront pricing, no surprises. Professional emergency towing service across Nashville. Average 30-minute response time. Call (615) 259-2727.',
  keywords: ['emergency towing Nashville', '24/7 towing', 'emergency roadside assistance', 'fast towing Nashville', 'highway rescue Nashville'],
  openGraph: {
    title: 'Emergency Towing Nashville - Fast 24/7 Response | Expressway Towing',
    description: 'Fast response, 24/7 availability. Upfront pricing, no surprises. Call (615) 259-2727 for immediate emergency towing assistance.',
    url: 'https://expressway-towing.com/emergency-towing',
  },
}

export default function EmergencyTowingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
