import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './contexts/CartContext'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Furniro - Furniture Store',
  description: 'Discover our new collection of furniture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

