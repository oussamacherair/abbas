import ProductsContainer from '@/components/Products-container'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='shop-background py-10 px-4'>
        <div className='shop-container'>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#CAB78B] mb-2">Our Products</h2>
          <p className="text-white max-w-2xl mx-auto">
            Browse our selection of IT hardware, office furniture, and security solutions to find the perfect fit for your needs.
          </p>
        </div>
        </div>
    </div>
    <ProductsContainer/>
    </>
    
  )
}

export default page