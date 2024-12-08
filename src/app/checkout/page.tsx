'use client'

import { useCart } from '../contexts/CartContext'
import { useState } from 'react'

export default function Checkout() {
  const { cart, clearCart } = useCart()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  })

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { ...formData, cart })
    clearCart()
    // Redirect to a thank you page or show a success message
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="address" className="block mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="city" className="block mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="country" className="block mb-2">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="zipCode" className="block mb-2">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <button type="submit" className="mt-6 bg-[#B88E2F] text-white px-6 py-3 rounded hover:bg-[#A17922]">
              Place Order
            </button>
          </form>
        </div>
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>Rs. {total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

