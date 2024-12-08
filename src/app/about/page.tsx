import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image src="/about-image.jpg" alt="About Furniro" width={600} height={400} className="rounded" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Furniro was founded with a passion for creating beautiful, functional, and affordable furniture. 
            Our journey began in a small workshop, where we crafted each piece by hand with meticulous attention to detail.
          </p>
          <p className="mb-4">
            Today, we've grown into a global brand, but our commitment to quality and design remains unchanged. 
            We believe that everyone deserves to live in a space that reflects their personality and enhances their daily life.
          </p>
          <p>
            Our team of skilled artisans and designers work tirelessly to bring you furniture that not only looks great 
            but also stands the test of time. We're proud to be a part of your home and your story.
          </p>
        </div>
      </div>
    </div>
  )
}

