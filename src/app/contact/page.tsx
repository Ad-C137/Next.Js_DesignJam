import { useState } from 'react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">We'd love to hear from you. Please fill out this form or shoot us an email.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-[#B88E2F] text-white px-6 py-2 rounded hover:bg-[#A17922]">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">Email: info@furniro.com</p>
          <p className="mb-2">Phone: +1 (555) 123-4567</p>
          <p className="mb-4">Address: 123 Furniture Street, Design City, DC 12345</p>
          <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
          <p className="mb-1">Monday - Friday: 9am - 5pm</p>
          <p>Saturday - Sunday: 10am - 4pm</p>
        </div>
      </div>
    </div>
  )
}

