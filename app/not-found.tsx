import Link from 'next/link'
import type { Metadata } from 'next'
import { SITE } from '../lib/site'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="section" style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div className="container">
        <p className="section-kicker">404</p>
        <h1 className="section-title">That page is not on this route.</h1>
        <p className="section-lead" style={{ margin: '0 auto 1.5rem' }}>
          Need a tow anyway? Dispatch is live. Typical arrival around 30 minutes.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <a className="btn btn-gold" href={SITE.phoneTel} aria-label={`Get a truck now. Call ${SITE.phoneDisplay}`}>
            Get a truck now · {SITE.phoneDisplay}
          </a>
          <Link className="btn btn-ghost-dark" href="/">Back home</Link>
        </div>
      </div>
    </main>
  )
}
