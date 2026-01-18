import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Repossession Towing Nashville - Professional Recovery Services',
  description: 'Discrete and reliable repossession service serving lenders and agencies. Legal compliance, secure storage, 24/7 availability. Nashville professional repo services. Call (615) 259-2727.',
  keywords: ['repossession towing Nashville', 'repo services', 'vehicle recovery', 'bank repossession', 'auto recovery Nashville'],
  openGraph: {
    title: 'Repossession Towing Services | Expressway Towing Nashville',
    description: 'Discrete and reliable service serving lenders and agencies. Professional repossession with legal compliance. Call (615) 259-2727.',
    url: 'https://expressway-towing.com/repossession-towing',
  },
}

export default function RepossessionTowingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
