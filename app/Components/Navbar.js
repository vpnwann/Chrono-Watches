import React from 'react'

export default function Navbar() {
  return (
    <nav class=" bg-transparent w-full flex relative justify-between items-center mx-auto px-8 h-20">

 <div class="hidden md:inline-flex space-x-4 mt-4">
  <a href="#" class="text-gray-700 hover:text-black font-medium">HOME</a>
  <a href="#" class="text-gray-700 hover:text-black font-medium">SHOP</a>
  <a href="#" class="text-gray-700 hover:text-black font-medium">ABOUT</a>
  <a href="#" class="text-gray-700 hover:text-black font-medium">NEWS</a>
</div>



 
    <div class="w-full flex justify-center px-2 relative">
  <div class="absolute left-1/2 -translate-x-[100%]">
    <div class="inline-flex items-center max-w-full">
      <h1 class="text-lg font-light mb-1">CHRONO</h1>
    </div>
  </div>
</div>


    <div class="flex-initial">
      <div class="flex justify-end items-center relative">
       {/*  
        <div class="flex mr-4 items-center">
       
      
          <div class="block relative">
            <button type="button" class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
              <div class="flex items-center h-5">
                <div class="_xpkakx">
                4   </div>
              </div>
            </button>
          </div>
        </div>
        */}

        <div class="block">
            <div class="inline relative">
                <button type="button" class="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                  <div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                   <button class="flex items-center gap-2  py-2  text-white rounded ">
  <img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png" alt="Cart Icon" class="w-20 h-5" />
  <span></span>
</button>

                    </div>

                    <div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                   <button class="flex items-center gap-2  py-2  text-white rounded ">
  <img src="https://cdn-icons-png.flaticon.com/128/9219/9219671.png" alt="Cart Icon" class="w-20 h-5" />
  <span></span>
</button>

                    </div>
                </button>
            </div>
        </div>
      </div>
    </div>

</nav>
  )
}
