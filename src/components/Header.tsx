'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();

  return (
    <header className="bg-gradient-to-r from-emerald-50 to-green-50 shadow-sm sticky top-0 z-50 backdrop-blur-md border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center text-white font-bold text-lg">
              H
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-green">Handmade Haven</h1>
              <p className="text-xs text-secondary-green">Crafted with Love</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-secondary-green hover:text-primary-green transition-colors font-medium">
              Home
            </Link>
            <Link href="/products" className="text-secondary-green hover:text-primary-green transition-colors font-medium">
              Shop
            </Link>
            <Link href="/about" className="text-secondary-green hover:text-primary-green transition-colors font-medium">
              About
            </Link>
            <Link 
              href="/cart" 
              className="relative bg-primary-green text-white px-4 py-2 rounded-lg hover:bg-secondary-green transition-colors font-medium"
            >
              Cart
              {getCartItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getCartItemCount()}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center px-3 py-2 border rounded text-secondary-green border-emerald-300 hover:text-primary-green hover:border-primary-green"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-200 bg-light-green">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-secondary-green hover:text-primary-green py-2 px-4 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-secondary-green hover:text-primary-green py-2 px-4 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/about" 
                className="text-secondary-green hover:text-primary-green py-2 px-4 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/cart" 
                className="bg-primary-green text-white py-2 px-4 rounded hover:bg-secondary-green transition-colors flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
                {getCartItemCount() > 0 && (
                  <span className="bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getCartItemCount()}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
