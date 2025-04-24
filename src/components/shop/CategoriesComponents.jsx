"use client"
import React, { useState } from 'react'; 
import dynamic from 'next/dynamic'
const CategoriesShop = dynamic(()=> import('@/components/shop/ShopCard'))
const CategoriesShort = dynamic(()=> import('@/components/shop/Short'))
const ListItems = dynamic(()=> import('@/components/shop/ListItems')) // Import ListItems
const PaginationControls = dynamic(() => import('@/components/shop/PaginationControls'));
const CategoriesShopListItem = dynamic(() => import('@/components/shop/ShopCardHorizontal')); // Import the new list item component
import shop1 from '../../../public/assets/shop1.png'
import shop2 from '../../../public/assets/shop2.png'
import shop3 from '../../../public/assets/shop3.png'
const CategoriesComponents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortCriteria, setSortCriteria] = useState('default'); // Add state for sorting
  const [viewMode, setViewMode] = useState('grid');
  const itemsPerPage = 6;

  const shop = [
    {
      id: 1,
      title: "Solex Sofa",
      price: 1000,
      image: shop1,
      discount: 1200,
      reviews: 16,
      stars: 5,
    },
    {
      id: 2,
      title: "Luxury Chair",
      price: 750,
      image: shop2,
      discount: 900,
      reviews: 22,
      stars: 4,
    },
    {
      id: 3,
      title: "Modern Table",
      price: 500,
      image: shop3,
      discount: 650,
      reviews: 10,
      stars: 4,
    },
    {
      id: 4,
      title: "Classic Bed",
      price: 1500,
      image: shop3,
      discount: 1800,
      reviews: 8,
      stars: 5,
    },
    {
      id: 5,
      title: "Office Desk",
      price: 850,
      image: shop2,
      discount: 1000,
      reviews: 14,
      stars: 4,
    },
    {
      id: 6,
      title: "Office Desk",
      price: 850,
      image: shop1,
      discount: 1000,
      reviews: 14,
      stars: 4,
    },
    {
      id: 7,
      title: "Classic Bed",
      price: 1500,
      image: shop1,
      discount: 1800,
      reviews: 8,
      stars: 5,
    },
    {
      id: 8,
      title: "Office Desk",
      price: 850,
      image: shop2,
      discount: 1000,
      reviews: 14,
      stars: 4,
    },
    {
      id: 9,
      title: "Office Desk",
      price: 850,
      image: shop3,
      discount: 1000,
      reviews: 14,
      stars: 4,
    },
    {
      id: 10,
      title: "Classic Bed",
      price: 1500,
      image: shop3,
      discount: 1800,
      reviews: 8,
      stars: 5,
    },
    {
      id: 11,
      title: "Office Desk",
      price: 850,
      image: shop2,
      discount: 1000,
      reviews: 14,
      stars: 4,
    },
    {
      id: 12,
      title: "Office Desk",
      price: 850,
      image: shop1,
      discount: 1000,
      reviews: 14,
      stars: 4,
    },
  ];

  const actualMaxPrice = Math.max(...shop.map(item => item.price), 0); 
  const [maxPrice, setMaxPrice] = useState(actualMaxPrice); 

  const filteredShop = shop.filter(item => item.price <= maxPrice); 

  const sortedShop = [...filteredShop].sort((a, b) => {
    switch (sortCriteria) {
      case 'price_asc': 
      case 'low': 
        return a.price - b.price;
      case 'price_desc': 
      case 'high': 
        return b.price - a.price;
      case 'new':
         return b.id - a.id; 
      case 'default':
      default:
        return a.id - b.id;
    }
  });

  const totalItems = sortedShop.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems); 
  const currentItems = sortedShop.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
    setCurrentPage(1); 
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  
  const handlePriceChange = (newPrice) => {
    setMaxPrice(parseInt(newPrice, 10)); 
    setCurrentPage(1); 
  };

  return (
    <section className='lg:py-20 py-12 bg-white'>
        <div className="container mx-auto lg:px-0 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] md:gap-12 gap-3">
                <div className="">
                   <ListItems
                     onSortChange={handleSortChange}
                     onPriceChange={handlePriceChange}
                     maxProductPrice={actualMaxPrice} 
                   />
                </div>
                <div className="">
                  <CategoriesShort
                    sortCriteria={sortCriteria}
                    onSortChange={handleSortChange}
                    startIndex={startIndex}
                    endIndex={endIndex}
                    totalItems={totalItems}
                    viewMode={viewMode} 
                    onViewChange={handleViewChange} 
                  />
                  <div className={`${
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                      : 'flex flex-col gap-4'
                    } mb-8`}
                  >
                    {
                      currentItems.map((item)=>(
                        viewMode === 'grid' ? (
                          <CategoriesShop key={`${item.id}-grid`} item={item}/>
                        ) : (
                          <CategoriesShopListItem key={`${item.id}-list`} item={item}/>
                        )
                      ))
                    }
                  </div>
                   <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
                </div>
            </div>
    </section>
  )
}

export default CategoriesComponents