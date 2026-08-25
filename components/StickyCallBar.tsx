'use client'

import React from 'react'
import { SITE } from '../lib/site'
import { IconPhone } from './Icons'

export default function StickyCallBar() {
  return (
    <div className="sticky-call">
      <a href={SITE.phoneTel} aria-label={`Get a truck now. Call ${SITE.phoneDisplay}`}>
        <IconPhone className="icon" />
        Get a truck now · {SITE.phoneDisplay}
      </a>
    </div>
  )
}
