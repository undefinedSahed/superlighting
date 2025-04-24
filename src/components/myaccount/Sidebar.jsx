import React from 'react';

const Sidebar = ({ selected, setSelected }) => {
  const menuItems = [
    'My Account',
    'My Orders',
    'My Wishlist',
  ];

  return (
    <div className="w-full md:w-1/4 p-4 bg-gray-100 shadow-sm rounded">
      <div className="mb-6 text-center">
        <img
          src="/assets/customer3.png"
          alt="User avatar"
          className="rounded-full mx-auto mb-2 w-20 h-20"
        />
        <p className="font-semibold text-gray-800">Hello,</p>
        <p className="text-green-600">iftykhar alam</p>
      </div>
      <ul className="flex flex-col gap-2 text-sm text-gray-700">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelected(item)}
            className={`hover:bg-green-100 px-3 py-2 rounded cursor-pointer ${
              selected === item ? 'bg-green-200 font-semibold' : ''
            }`}
          >
            <p className="text-base">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
