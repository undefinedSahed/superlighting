'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MyAccount from './MyAccount';
import MyOrders from './MyOrders';
import MyWishlist from './MyWishlist';

const MySide = () => {
  const [selected, setSelected] = useState('My Account');

  const renderContent = () => {
    switch (selected) {
      case 'My Account':
        return <MyAccount />;
      case 'My Orders':
        return <MyOrders />;
      case 'My Wishlist':
        return <MyWishlist />;
      default:
        return <p>Coming soon...</p>;
    }
  };

  return (
    <section className="my-account py-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 items-start">
        <Sidebar selected={selected} setSelected={setSelected} />
        <div className="w-full md:w-3/4 p-6 bg-gray-100 shadow-sm rounded">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default MySide;
