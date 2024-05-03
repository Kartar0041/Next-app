import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">Your Blog Logo</div>
        <nav>
          <ul>
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Categories</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
      </header>
    </>
  )
}

export default Header