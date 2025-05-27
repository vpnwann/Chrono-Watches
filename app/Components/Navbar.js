import React from 'react'

export default function Navbar() {
  return (
    <nav class=" bg-transparent w-full flex relative justify-between items-center mx-auto px-8 h-20">

    <div class="inline-flex">
        <a class="_o6689fn" href="/"
            ><div class="hidden md:block">
             1
            </div>
            
            <div class="block md:hidden">
                2
            </div>
        </a>
    </div>

 
    <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div class="inline-block">
            <div class="inline-flex items-center max-w-full">
              <h1 className='  text-center'>CHRONO</h1>
            </div>
        </div>
    </div>

    <div class="flex-initial">
      <div class="flex justify-end items-center relative">
       
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

        <div class="block">
            <div class="inline relative">
                <button type="button" class="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                    <div class="pl-1">
                       5
                    </div>

                    <div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                   <button class="flex items-center gap-2 px-4 py-2  text-white rounded ">
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
