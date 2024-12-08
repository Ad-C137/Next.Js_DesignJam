'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../contexts/CartContext'

export default function Header() {
  const { cart } = useCart()

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#000000]">
          <Image src="/furniro-logo.png" alt="Furniro" width={185} height={41} />
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li><Link href="/" className="text-[#000000] hover:text-[#B88E2F]">Home</Link></li>
            <li><Link href="/shop" className="text-[#000000] hover:text-[#B88E2F]">Shop</Link></li>
            <li><Link href="/about" className="text-[#000000] hover:text-[#B88E2F]">About</Link></li>
            <li><Link href="/contact" className="text-[#000000] hover:text-[#B88E2F]">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-6 items-center">
          <Link href="/account">
            <Image src="/account-icon.svg" alt="Account" width={28} height={28} />
          </Link>
          <Link href="/search">
            <Image src="/search-icon.svg" alt="Search" width={28} height={28} />
          </Link>
          <Link href="/favorites">
            <Image src="/heart-icon.svg" alt="Favorites" width={28} height={28} />
          </Link>
          <Link href="/cart" className="relative">
            <Image src="/cart-icon.svg" alt="Cart" width={28} height={28} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#B88E2F] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}

