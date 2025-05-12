'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Minus, Plus, Heart, Share2, ShoppingCart } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

// Sample product data
const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Gaming PC',
    price: 1200,
    category: 'Hardware',
    image: '/products/product1.jpg',
    description: 'High-performance gaming PC with the latest graphics card and processor. Features 32GB RAM, 2TB SSD, RTX 4080 graphics card, and Intel Core i9 processor. Perfect for gaming enthusiasts and professional content creators.'
  },
  {
    id: 2,
    name: 'Office Chair',
    price: 250,
    category: 'Furniture',
    image: '/products/product2.jpg',
    description: 'Ergonomic office chair with lumbar support and adjustable height. Features high-quality mesh back for breathability, padded seat for comfort, and adjustable armrests. Perfect for long working hours.'
  },
  {
    id: 3,
    name: 'Security Camera',
    price: 120,
    category: 'Security',
    image: '/products/product3.jpg',
    description: 'HD security camera with night vision and motion detection. Features 1080p resolution, weather-resistant housing, two-way audio, and cloud storage options. Easy to install and connect to your smartphone.'
  },
  {
    id: 4,
    name: 'Laptop',
    price: 900,
    category: 'Hardware',
    image: '/products/product4.jpg',
    description: 'Business laptop with high performance and long battery life. Features 16GB RAM, 512GB SSD, Intel Core i7 processor, and a 14-inch full HD display. Includes Windows 11 Pro and Microsoft Office.'
  },
  {
    id: 5,
    name: 'Office Desk',
    price: 350,
    category: 'Furniture',
    image: '/products/product5.jpg',
    description: 'Spacious office desk with cable management system. Features a solid wood top, steel frame, built-in cable organizers, and ample workspace. Modern design fits perfectly in any office environment.'
  },
  {
    id: 6,
    name: 'External Hard Drive',
    price: 80,
    category: 'Hardware',
    image: '/products/product6.jpg',
    description: '2TB external hard drive for backup and storage. Features USB 3.0 connectivity, compact design, automatic backup software, and password protection. Compatible with Windows and Mac.'
  },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const productId = parseInt(params.id);
  
  // Find the current product
  const product = sampleProducts.find(p => p.id === productId) || sampleProducts[0];
  
  // Get similar products (same category but different product)
  const similarProducts = sampleProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Handlers
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-[#D1AD5B]">Home</Link>
          <ChevronRight className="mx-2 h-4 w-4 text-gray-400 self-center" />
          <Link href="/Shop" className="text-gray-500 hover:text-[#D1AD5B]">Shop</Link>
          <ChevronRight className="mx-2 h-4 w-4 text-gray-400 self-center" />
          <Link href={`/Shop/${product.category.toLowerCase()}`} className="text-gray-500 hover:text-[#D1AD5B]">{product.category}</Link>
          <ChevronRight className="mx-2 h-4 w-4 text-gray-400 self-center" />
          <span className="text-gray-700 font-medium">{product.name}</span>
        </nav>
        
        {/* Product Detail */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="relative h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden">
              {product.image ? (
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No image available
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-[#D1AD5B]">${product.price.toLocaleString()}</span>
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">In Stock</span>
              </div>
              
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-gray-700 font-medium">Category: </span>
                <Link href={`/Shop/${product.category.toLowerCase()}`} className="text-[#D1AD5B] hover:underline">
                  {product.category}
                </Link>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <span className="text-gray-700 font-medium mr-4">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    className="px-3 py-2 text-gray-500 hover:text-gray-700"
                    onClick={decreaseQuantity}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center">{quantity}</span>
                  <button 
                    className="px-3 py-2 text-gray-500 hover:text-gray-700"
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-auto">
                <button className="flex-1 flex items-center justify-center px-6 py-3 bg-[#D1AD5B] text-white font-medium rounded-md hover:bg-[#c19b49] transition-colors">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </button>
                <button className="p-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Products</h2>
          
          {similarProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No similar products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
