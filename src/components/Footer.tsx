import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                H
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Handmade Haven</h3>
                <p className="text-sm text-gray-600">Crafted with Love</p>
              </div>
            </div>
            <p className="text-gray-600 max-w-md">
              We create beautiful handmade handicrafts, calendars, crochet items, bookmarks, and small gifts. 
              Each piece is crafted with love and attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-rose-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-rose-500 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-600 hover:text-rose-500 transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-rose-500 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Email: hello@handmadehaven.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Instagram: @handmadehaven</li>
              <li>Etsy: HandmadeHavenShop</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Handmade Haven. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-rose-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-rose-500 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
