'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../../contexts/CartContext'

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addToCart } = useCart()

  // In a real application, you would fetch the product details based on the ID
  const product = {
    id: params.id,
    name: 'Asgaard sofa',
    price: 250000,
    description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
    images: ['/asgaard-sofa-1.jpg', '/asgaard-sofa-2.jpg', '/asgaard-sofa-3.jpg', '/asgaard-sofa-4.jpg']
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image 
              src={product.images[selectedImage]} 
              alt={product.name} 
              width={500} 
              height={500} 
              className="rounded-lg"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button 
                key={index} 
                onClick={() => setSelectedImage(index)}
                className={`border-2 ${selectedImage === index ? 'border-[#B88E2F]' : 'border-transparent'}`}
              >
                <Image 
                  src={image} 
                  alt={`${product.name} thumbnail ${index + 1}`} 
                  width={100} 
                  height={100}
                  className="rounded"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-[#B88E2F] mb-4">Rs. {product.price.toLocaleString()}</p>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image key={star} src="/star.svg" alt="Star" width={20} height={20} />
              ))}
            </div>
            <span className="ml-2 text-[#9F9F9F]">5 Customer Review</span>
          </div>
          <p className="mb-6">{product.description}</p>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block mb-2 font-semibold">Size</label>
              <div className="flex space-x-4">
                <button className="border border-[#B88E2F] px-4 py-2 rounded">L</button>
                <button className="border border-[#B88E2F] px-4 py-2 rounded">XL</button>
                <button className="border border-[#B88E2F] px-4 py-2 rounded">XS</button>
              </div>
            </div>
            <div>
              <label className="block mb-2 font-semibold">Color</label>
              <div className="flex space-x-4">
                <button className="w-8 h-8 bg-[#816DFA] rounded-full"></button>
                <button className="w-8 h-8 bg-[#000000] rounded-full"></button>
                <button className="w-8 h-8 bg-[#B88E2F] rounded-full"></button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded">
              <button 
                className="px-4 py-2 text-2xl" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button 
                className="px-4 py-2 text-2xl"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button 
              className="bg-[#B88E2F] text-white px-8 py-3 rounded hover:bg-[#A17922]"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <div className="border-t border-b py-4">
            <div className="flex items-center space-x-4 mb-2">
              <span className="font-semibold">SKU:</span>
              <span>SS001</span>
            </div>
            <div className="flex items-center space-x-4 mb-2">
              <span className="font-semibold">Category:</span>
              <span>Sofas</span>
            </div>
            <div className="flex items-center space-x-4 mb-2">
              <span className="font-semibold">Tags:</span>
              <span>Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold">Share:</span>
              <div className="flex space-x-2">
                <Link href="#"><Image src="/facebook-icon.svg" alt="Facebook" width={24} height={24} /></Link>
                <Link href="#"><Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} /></Link>
                <Link href="#"><Image src="/twitter-icon.svg" alt="Twitter" width={24} height={24} /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

