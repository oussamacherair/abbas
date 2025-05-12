'use client'
import React, { useState, ChangeEvent } from 'react';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import ProductFilter from '@/components/ProductFilter';

// Sample product data
const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Gaming PC',
    price: 1200,
    category: 'Hardware',
    image: '/products/product1.jpg',
    description: 'High-performance gaming PC with the latest graphics card and processor.'
  },
  {
    id: 2,
    name: 'Office Chair',
    price: 250,
    category: 'Furniture',
    image: '/products/product2.jpg',
    description: 'Ergonomic office chair with lumbar support and adjustable height.'
  },
  {
    id: 3,
    name: 'Security Camera',
    price: 120,
    category: 'Security',
    image: '/products/product3.jpg',
    description: 'HD security camera with night vision and motion detection.'
  },
  {
    id: 4,
    name: 'Laptop',
    price: 900,
    category: 'Hardware',
    image: '/products/product4.jpg',
    description: 'Business laptop with high performance and long battery life.'
  },
  {
    id: 5,
    name: 'Office Desk',
    price: 350,
    category: 'Furniture',
    image: '/products/product5.jpg',
    description: 'Spacious office desk with cable management system.'
  },
  {
    id: 6,
    name: 'External Hard Drive',
    price: 80,
    category: 'Hardware',
    image: '/products/product6.jpg',
    description: '2TB external hard drive for backup and storage.'
  },
];

// Main Products Container Component
const ProductsContainer: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const itemsPerPage = 6;

  // Filter options
  const categories: string[] = ['all', 'Hardware', 'Furniture', 'Security'];
  
  // Filter and search logic
  const filteredProducts = sampleProducts.filter(product => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleCategoryChange = (category: string) => {
    setActiveFilter(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of IT hardware, office furniture, and security solutions to find the perfect fit for your needs.
          </p>
        </div>

        {/* Search and Filters */}
        <ProductFilter 
          categories={categories}
          activeFilter={activeFilter}
          searchQuery={searchQuery}
          showFilters={showFilters}
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearchChange}
          toggleFilters={toggleFilters}
        />

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {paginatedProducts.length} of {filteredProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-600">No products found matching your criteria.</p>
            <button 
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#D1AD5B] text-white rounded-md hover:bg-[#c19b49]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border ${
                    currentPage === i + 1
                      ? 'bg-[#D1AD5B] text-white border-[#D1AD5B] z-10'
                      : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-50'
                  } text-sm font-medium`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsContainer;
