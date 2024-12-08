import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="relative h-[716px]">
        <Image 
          src="/hero-background.jpg" 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="bg-[#FFF3E3] p-8 max-w-[643px]">
              <h2 className="text-[#B88E2F] text-lg mb-4">New Arrival</h2>
              <h1 className="text-[#333333] text-6xl font-bold mb-4">Discover Our<br />New Collection</h1>
              <p className="text-[#333333] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
              <Link 
                href="/shop" 
                className="bg-[#B88E2F] text-white px-16 py-4 inline-block hover:bg-[#A17922]"
              >
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Browse The Range</h2>
          <p className="text-center mb-12 text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Dining', 'Living', 'Bedroom'].map((room) => (
              <div key={room} className="text-center">
                <Image src={`/${room.toLowerCase()}.jpg`} alt={room} width={381} height={480} className="mb-4 rounded-lg" />
                <h3 className="text-2xl font-semibold">{room}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9F1E7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, name: 'Syltherine', price: 'Rp 2.500.000', image: '/syltherine.jpg', discount: '30%' },
              { id: 2, name: 'Leviosa', price: 'Rp 2.500.000', image: '/leviosa.jpg' },
              { id: 3, name: 'Lolito', price: 'Rp 7.000.000', image: '/lolito.jpg', discount: '50%' },
              { id: 4, name: 'Respira', price: 'Rp 500.000', image: '/respira.jpg', tag: 'New' },
            ].map((product) => (
              <Link href={`/shop/${product.id}`} key={product.id}>
                <div className="bg-white group">
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
          <div className="text-center mt-12">
            <Link 
              href="/shop" 
              className="border-2 border-[#B88E2F] text-[#B88E2F] px-16 py-4 inline-block hover:bg-[#B88E2F] hover:text-white rounded"
            >
              Show More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">50+ Beautiful rooms<br />inspiration</h2>
              <p className="text-[#666666] mb-8">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
              <Link 
                href="/inspiration" 
                className="bg-[#B88E2F] text-white px-8 py-3 inline-block hover:bg-[#A17922] rounded"
              >
                Explore More
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <Image src="/room-inspiration.jpg" alt="Room Inspiration" width={404} height={582} className="rounded-lg" />
              <div className="absolute bottom-8 left-8 bg-white p-4 flex items-center rounded-lg">
                <div className="mr-4">
                  <h3 className="font-semibold">01 - Bed Room</h3>
                  <p className="text-[#616161]">Inner Peace</p>
                </div>
                <Link 
                  href="/inspiration/bedroom" 
                  className="bg-[#B88E2F] text-white p-2 rounded-full"
                >
                  <Image src="/arrow-right.svg" alt="Arrow Right" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FCF8F3]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Share your setup with</h2>
          <h3 className="text-[#B88E2F] text-3xl font-bold mb-12">#FuniroFurniture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Image src="/furniture-1.jpg" alt="Furniture 1" width={285} height={285} className="rounded-lg" />
            <Image src="/furniture-2.jpg" alt="Furniture 2" width={285} height={285} className="rounded-lg" />
            <Image src="/furniture-3.jpg" alt="Furniture 3" width={285} height={285} className="rounded-lg" />
            <Image src="/furniture-4.jpg" alt="Furniture 4" width={285} height={285} className="rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  )
}

