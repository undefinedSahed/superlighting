import React from 'react'
import Image from 'next/image'
// import floodlight from 'public/assets/LED1.jpg';

const MyOrders = () => (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">My Orders</h2>
      
      <div className="p-2 md:p-3 bg-gray-100 shadow-sm rounded overflow-x-auto">
        <table className="min-w-full bg-white rounded">
          <thead className="hidden md:table-header-group">
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Total</th>
              <th className="py-2 px-4 text-left">Product</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {Array.from({ length: 5 }, (_, index) => (
                <tr key={index} className="block md:table-row border-b md:border-0 hover:bg-gray-50 mb-4 md:mb-0">
                    <td className="py-2 px-3 md:px-4 block md:table-cell">
                      <span className="font-bold md:hidden">Order ID: </span>
                      #12345
                    </td>
                    <td className="py-2 px-3 md:px-4 block md:table-cell">
                      <span className="font-bold md:hidden">Date: </span>
                      2023-10-01
                    </td>
                    <td className="py-2 px-3 md:px-4 block md:table-cell">
                      <span className="font-bold md:hidden">Status: </span>
                      <span className="inline-block px-2 py-1 text-sm rounded bg-green-100 text-green-800">Shipped</span>
                    </td>
                    <td className="py-2 px-3 md:px-4 block md:table-cell">
                      <span className="font-bold md:hidden">Total: </span>
                      $99.99
                    </td>
                    <td className="py-2 px-3 md:px-4 block md:table-cell">
                      <span className="font-bold md:hidden">Product: </span>
                      <img 
                          src="/assets/LED1.jpg"
                          width={100}
                          height={100}
                          alt="Product" 
                          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                      />
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
);
  
  export default MyOrders;
  