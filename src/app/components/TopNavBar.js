import React from 'react'
import Main from '../Main'
import Profile from '../Profile'
import Link from 'next/link'


export default function TopNavBar() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">
              Main
          </Link>
        </li>
        <li>
          <Link href="/profile">
            Profile
          </Link>
        </li>
      </ul>
    </header>
  )
}
