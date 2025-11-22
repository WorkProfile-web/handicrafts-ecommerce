import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Our Story
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to Handmade Haven, where every piece tells a story of passion, 
          creativity, and the timeless art of handcrafting beautiful items.
        </p>
      </div>

      {/* Main Story */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Crafted with Love</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Our journey began in a small studio filled with colorful yarns, delicate papers, 
              and the gentle hum of creativity. What started as a personal passion for handmade 
              items has grown into a collection of unique pieces that bring joy to homes around the world.
            </p>
            <p>
              Each item in our collection is carefully handcrafted using traditional techniques 
              passed down through generations, combined with modern design sensibilities. From 
              cozy crocheted pieces to beautifully illustrated calendars, every product reflects 
              our commitment to quality and attention to detail.
            </p>
            <p>
              We believe that handmade items carry a special energy – the love and care of the 
              maker's hands, the time invested in each stitch or brushstroke, and the intention 
              to create something truly beautiful and lasting.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
            alt="Artisan crafting"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Authenticity</h3>
            <p className="text-gray-600">
              Every piece is genuinely handmade with authentic materials and traditional techniques, 
              ensuring each item is unique and meaningful.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sustainability</h3>
            <p className="text-gray-600">
              We prioritize eco-friendly materials and sustainable practices, creating beautiful 
              items that respect both craftsmanship and our environment.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality</h3>
            <p className="text-gray-600">
              We never compromise on quality. Each item undergoes careful inspection to ensure 
              it meets our high standards before reaching your hands.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">What We Create</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex space-x-6">
            <div className="flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=100&h=100&fit=crop"
                alt="Handicrafts"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Handmade Handicrafts</h3>
              <p className="text-gray-600">
                Beautiful ceramic pieces, woven textiles, and artisanal items that add warmth 
                and character to any space.
              </p>
            </div>
          </div>

          <div className="flex space-x-6">
            <div className="flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop"
                alt="Calendars"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Beautiful Calendars</h3>
              <p className="text-gray-600">
                Hand-illustrated calendars featuring original artwork that makes planning 
                and organizing a delightful experience.
              </p>
            </div>
          </div>

          <div className="flex space-x-6">
            <div className="flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=100&h=100&fit=crop"
                alt="Crochet items"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cozy Crochet Items</h3>
              <p className="text-gray-600">
                Soft blankets, decorative pieces, and functional items crocheted with premium 
                yarns in beautiful, modern patterns.
              </p>
            </div>
          </div>

          <div className="flex space-x-6">
            <div className="flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=100&fit=crop"
                alt="Bookmarks and gifts"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bookmarks & Gifts</h3>
              <p className="text-gray-600">
                Thoughtful bookmarks, small gift items, and special occasion pieces that 
                make perfect presents for loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions about our products, 
          want to discuss custom orders, or simply want to share your thoughts, we're here to listen.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div>
            <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600">hello@handmadehaven.com</p>
          </div>

          <div>
            <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>

          <div>
            <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Follow Us</h3>
            <p className="text-gray-600">@handmadehaven</p>
          </div>
        </div>

        <Link 
          href="/products"
          className="inline-flex items-center bg-rose-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-600 transition-colors"
        >
          Shop Our Collection
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
