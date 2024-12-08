import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#F9F1E7] py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-[#000000]">Furniro.</h3>
          <p className="text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div>
          <h4 className="font-medium mb-4 text-[#000000]">Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-[#9F9F9F] hover:text-[#B88E2F]">Home</Link></li>
            <li><Link href="/shop" className="text-[#9F9F9F] hover:text-[#B88E2F]">Shop</Link></li>
            <li><Link href="/about" className="text-[#9F9F9F] hover:text-[#B88E2F]">About</Link></li>
            <li><Link href="/contact" className="text-[#9F9F9F] hover:text-[#B88E2F]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4 text-[#000000]">Help</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-[#9F9F9F] hover:text-[#B88E2F]">Payment Options</Link></li>
            <li><Link href="#" className="text-[#9F9F9F] hover:text-[#B88E2F]">Returns</Link></li>
            <li><Link href="#" className="text-[#9F9F9F] hover:text-[#B88E2F]">Privacy Policies</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4 text-[#000000]">Newsletter</h4>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="flex-grow p-2 border border-[#9F9F9F] rounded-l focus:outline-none focus:border-[#B88E2F]" 
            />
            <button 
              type="submit" 
              className="bg-[#B88E2F] text-white p-2 rounded-r hover:bg-[#A17922]"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-[#9F9F9F]">
        <p>&copy; 2023 Furniro. All rights reserved</p>
      </div>
    </footer>
  )
}

