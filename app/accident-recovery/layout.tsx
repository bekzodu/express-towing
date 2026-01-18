import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accident Recovery & Vehicle Extraction Nashville',
  description: 'Accidents, stuck vehicles, breakdowns. Professional, insured service. Expert accident recovery and vehicle extraction throughout Nashville. Call (615) 259-2727.',
  keywords: ['accident recovery Nashville', 'vehicle extraction', 'accident towing', 'collision recovery', 'stuck vehicle recovery Nashville'],
  openGraph: {
    title: 'Accident Recovery & Vehicle Extraction | Expressway Towing Nashville',
    description: 'Professional, insured accident recovery service. Handling accidents, stuck vehicles, and breakdowns 24/7. Call (615) 259-2727.',
    url: 'https://expressway-towing.com/accident-recovery',
  },
}

export default function AccidentRecoveryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
