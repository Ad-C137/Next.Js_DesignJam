'use client'

import { useCart } from '../contexts/CartContext'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Product</th>
                  <th className="text-left p-4">Price</th>
                  <th className="text-left p-4">Quantity</th>
                  <th className="text-left p-4">Subtotal</th>
                  <th className="text-left p-4"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4">
                      <div className="flex items-center">
                        <Image src={`/product-${item.id}.jpg`} alt={item.name} width={80} height={80} className="mr-4 rounded" />
                        {item.name}
                      </div>
                    </td>
                    <td className="p-4">Rs. {item.price.toLocaleString()}</td>
                    <td className="p-4">{item.quantity}</td>
                    <td className="p-4">Rs. {(item.price * item.quantity).toLocaleString()}</td>
                    <td className="p-4">
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                        <Image src="/remove-icon.svg" alt="Remove" width={20} height={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-end">
            <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Cart Total</h2>
              <div className="border-t border-b py-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
              </div>
              <Link href="/checkout" className="block text-center bg-[#B88E2F] text-white px-6 py-3 mt-4 rounded hover:bg-[#A17922]">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

