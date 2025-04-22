import React from 'react'
import dynamic from 'next/dynamic'
const CategoriesShop = dynamic(()=> import('@/components/shop/CategoriesShop'))
const CategoriesShort = dynamic(()=> import('@/components/shop/CategoriesShort'))
const CategoriesListItems = dynamic(()=> import('@/components/shop/CategoriesListItems'))
import shop1 from '../../../public/assets/shop1.png'
import shop2 from '../../../public/assets/shop2.png'
import shop3 from '../../../public/assets/shop3.png'
const CategoriesItems = () => {
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
  
  return (
    <section className='lg:py-20 py-12 bg-white'>
        <div className="container mx-auto lg:px-0 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] md:gap-12 gap-3">
                <div className="">
                   <CategoriesListItems/>
                </div>
                <div className="">
                  <CategoriesShort/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {
                    shop.map((item)=>(
                      <CategoriesShop key={item.id} item={item}/>
                    ))
                  }
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CategoriesItems