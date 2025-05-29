'use client';

import React from 'react';

const sampleData = [
  {
    id: 1,
    title: 'CasioVintage A-158WA-1Q',
    price: '₹1695',
    image:
      'https://m.media-amazon.com/images/I/61ybeKQto8L._AC_UL480_QL65_.jpg',
  },
  {
    id: 2,
    title: 'Titan x34e',
    price: '₹2434',
    image:
      'https://m.media-amazon.com/images/I/51ykbSj-eoL._SX679_.jpg',
  },
  {
    id: 3,
    title: 'Citizen W34dc',
    price: '₹2132',
    image:
      'https://m.media-amazon.com/images/I/71+Uu9y5hbL._AC_UL640_QL65_.jpg',
      
  },
   {
    id: 2,
    title: 'Titan x34e',
    price: '₹2434',
    image:
      'https://m.media-amazon.com/images/I/51ykbSj-eoL._SX679_.jpg',
  },
  {
    id: 3,
    title: 'Citizen W34dc',
    price: '₹2132',
    image:
      'https://m.media-amazon.com/images/I/71+Uu9y5hbL._AC_UL640_QL65_.jpg',
      
  },
   {
    id: 2,
    title: 'Titan x34e',
    price: '₹2434',
    image:
      'https://m.media-amazon.com/images/I/51ykbSj-eoL._SX679_.jpg',
  },
  {
    id: 3,
    title: 'Citizen W34dc',
    price: '₹2132',
    image:
      'https://m.media-amazon.com/images/I/71+Uu9y5hbL._AC_UL640_QL65_.jpg',
      
  },
];

const HorizontalSlider = () => {
  return (
    <div className="container w-screen overflow-x-hidden w-full">
      <div className="flex overflow-x-auto space-x-4 py-4">
        {sampleData.map((item) => (
          <div
            key={item.id}
            className="min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-contain"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base">{item.price}</p>
            </div>
            <button type="button" class="flex gap-3 items-center justify-center text-white bg-black w-60 h-14 rounded-xl">
    <div class="">
     
    </div>
    <div>
        
        <div class="-mt-1 font-sans text-2xl ">
            View Product
        </div>
    </div>
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSlider;
