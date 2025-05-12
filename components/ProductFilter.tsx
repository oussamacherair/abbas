import React from 'react';
import { Filter as FilterIcon, ChevronDown, Search } from 'lucide-react';

interface ProductFilterProps {
  categories: string[];
  activeFilter: string;
  searchQuery: string;
  showFilters: boolean;
  onCategoryChange: (category: string) => void;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleFilters: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  activeFilter,
  searchQuery,
  showFilters,
  onCategoryChange,
  onSearchChange,
  toggleFilters
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={onSearchChange}
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D1AD5B]"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        
        <button 
          onClick={toggleFilters}
          className="flex items-center text-gray-700 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 md:hidden"
        >
          <FilterIcon className="h-5 w-5 mr-2" />
          Filters
          <ChevronDown className={`h-4 w-4 ml-2 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Mobile filters (collapsible) */}
      <div className={`md:hidden space-y-4 ${showFilters ? 'block' : 'hidden'}`}>
        <div className="p-4 border border-gray-200 rounded-lg bg-white">
          <h3 className="font-medium text-gray-800 mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  activeFilter === category ? 'bg-[#D1AD5B] text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category === 'all' ? 'All Products' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop filters (always visible) */}
      <div className="hidden md:flex space-x-4 mt-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-md ${
              activeFilter === category 
                ? 'bg-[#D1AD5B] text-white' 
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {category === 'all' ? 'All Products' : category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter; 