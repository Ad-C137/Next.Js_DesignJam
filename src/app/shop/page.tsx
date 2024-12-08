import Image from 'next/image'
import Link from 'next/link'

export default function Shop() {
  const products = [
    { id: 1, name: 'Syltherine', price: 'Rp 2.500.000', image: '/syltherine.jpg', discount: '30%' },
    { id: 2, name: 'Leviosa', price: 'Rp 2.500.000', image: '/leviosa.jpg' },
    { id: 3, name: 'Lolito', price: 'Rp 7.000.000', image: '/lolito.jpg', discount: '50%' },
    { id: 4, name: 'Respira', price: 'Rp 500.000', image: '/respira.jpg', tag: 'New' },
    { id: 5, name: 'Grifo', price: 'Rp 1.500.000', image: '/grifo.jpg' },
    { id: 6, name: 'Muggo', price: 'Rp 150.000', image: '/muggo.jpg', tag: 'New' },
    { id: 7, name: 'Pingky', price: 'Rp 7.000.000', image: '/pingky.jpg', discount: '50%' },
    { id: 8, name: 'Potty', price: 'Rp 500.000', image: '/potty.jpg', tag: 'New' },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Shop</h1>
        <div className="flex items-center">
          <span className="mr-4">Showing 1–16 of 32 results</span>
          <select className="border p-2 rounded">
            <option>Default sorting</option>
            <option>Sort by popularity</option>
            <option>Sort by average rating</option>
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link href={`/shop/${product.id}`} key={product.id}>
            <div className="bg-white group rounded-lg shadow-md overflow-hidden">
              <div className="relative overflow-hidden">
                <Image src={product.image} alt={product.name} width={285} height={301} className="rounded-t-lg" />
                {product.discount && (
                  <div className="absolute top-5 right-5 bg-[#E97171] text-white px-3 py-1 rounded">
                    -{product.discount}
                  </div>
                )}
                {product.tag && (
                  <div className="absolute top-5 right-5 bg-[#2EC1AC] text-white px-3 py-1 rounded">
                    {product.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white text-[#B88E2F] px-4 py-2 mr-2 rounded">Add to cart</button>
                  <div className="flex space-x-2">
                    <button className="bg-white p-2 rounded">
                      <Image src="/share-icon.svg" alt="Share" width={20} height={20} />
                    </button>
                    <button className="bg-white p-2 rounded">
                      <Image src="/compare-icon.svg" alt="Compare" width={20} height={20} />
                    </button>
                    <button className="bg-white p-2 rounded">
                      <Image src="/like-icon.svg" alt="Like" width={20} height={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-[#898989] mb-2">Stylish cafe chair</p>
                <p className="text-[#B88E2F]">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <nav className="inline-flex rounded-md shadow">
          <Link href="#" className="px-4 py-2 border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white rounded-l-md">
            1
          </Link>
          <Link href="#" className="px-4 py-2 border-t border-b border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white">
            2
          </Link>
          <Link href="#" className="px-4 py-2 border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white">
            3
          </Link>
          <span className="px-4 py-2 border-t border-b border-[#B88E2F] text-[#B88E2F]">...</span>
          <Link href="#" className="px-4 py-2 border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white rounded-r-md">
            Next
          </Link>
        </nav>
      </div>
    </div>
  )
}

