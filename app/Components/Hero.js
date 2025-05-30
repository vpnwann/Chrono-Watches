import React from 'react'

export default function Hero() {
  return (
   <div>
    
  <div class="flex h-screen items-center justify-center  p-5 bg-[url('https://organicthemes.com/demo/chrono/wp-content/blogs.dir/115/files/2023/05/banner-05c-scaled.jpg')] bg-cover bg-center">
    <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
      <div>
        <h1 class="mb-2 text-3xl font-bold text-white"> Timeless.</h1>
        <p class="mb-6 text-white">A Vpnwan theme designed to elevate your online
accessory store with an aura of elegance and luxury.</p>
     
     
     
      <div class="flex justify-center mr-28 space-x-5 mt-4">
  
  <button 
    class="flex w-fit items-center justify-center gap-1 rounded-2xl bg-black px-5 py-3 font-semibold text-white hover:bg-white hover:text-black">
    Shop Products
  </button>

  <button
  onClick={() => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="flex w-fit items-center justify-center rounded-2xl bg-white p-3 font-semibold text-white hover:bg-white hover:text-black"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/271/271210.png"
    alt="dropdown arrow"
    className="h-5 w-5"
  />
</button>


</div>

      </div>
      <div>
         </div>
    </div>
  </div>
</div>

  )
}
