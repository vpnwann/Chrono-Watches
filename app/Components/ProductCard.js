'use client';

import React from 'react';

const sampleData = [
  {
    id: 1,
    title: 'Digital Edge',
    price: '₹500',
    image:
      'https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp',
  },
  {
    id: 2,
    title: 'Casio Lorem',
    price: '₹450',
    image:
      'https://www.shutterstock.com/image-photo/rice-flour-bowl-on-wooden-260nw-1357324985.jpg',
  },
  {
    id: 3,
    title: 'Titan Misty',
    price: '₹600',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2023/12/369785931/HF/UD/DL/176687481/masala-grinding-service.jpg',
  },
];

const HorizontalSlider = () => {
  return (
    <div className="container mx-3.5 px-6">
      <div className="flex overflow-x-auto space-x-4 py-4">
        {sampleData.map((item) => (
          <div
            key={item.id}
            className="min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
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
