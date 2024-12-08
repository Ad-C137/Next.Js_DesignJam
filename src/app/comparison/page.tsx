import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Comparison() {
  const products = [
    { name: 'Asgaard Sofa', price: 'Rs. 250,000.00', image: '/placeholder.svg' },
    { name: 'Outdoor Sofa Set', price: 'Rs. 224,000.00', image: '/placeholder.svg' },
  ]

  const features = [
    'General Dimensions', 'Warranty', 'Product Sales Package', 'Width', 'Warranty Summary',
    'Height', 'Warranty Service Type', 'Secondary Material', 'Depth', 'Covered in Warranty',
    'Configuration', 'Weight', 'Upholstery Material', 'Seat Height', 'Leg Height',
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Product Comparison</h1>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2 border"></th>
              {products.map((product, index) => (
                <motion.th 
                  key={product.name} 
                  className="p-2 border"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto mb-2" />
                  <h3 className="font-semibold">{product.name}</h3>
                  <p>{product.price}</p>
                </motion.th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <motion.tr 
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <td className="p-2 border font-semibold">{feature}</td>
                {products.map((product) => (
                  <td key={`${product.name}-${feature}`} className="p-2 border text-center">
                    Lorem ipsum
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

