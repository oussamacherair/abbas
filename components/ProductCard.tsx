import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-xl hover:scale-[1.02]">
      <div className="relative h-48 w-full">
        <div className="bg-gray-200 w-full h-full flex items-center justify-center">
          {product.image ? (
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="text-gray-400">No image</div>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-[#D1AD5B] font-medium mb-2">${product.price.toLocaleString()}</p>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center mt-3">
          <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
            {product.category}
          </span>
          <Link href={`/Shop/${product.id}`} className="text-[#D1AD5B] font-medium flex items-center hover:underline">
            View Details <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 