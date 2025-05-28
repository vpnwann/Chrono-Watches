import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProductCard from './Components/ProductCard'
import BigMarquee from './Components/Marque'
import ReviewCard from './Components/ReviewCard'
import ImageGrid from './Components/ImageGrid'
import News from './Components/News'
import Footer from './Components/Footer'
import ProductOfWeek from './Components/ProductOfWeek'
import BigMarquees from './Components/MarqueTwo'
import Blog from './Components/Blog'
import Custom from './Components/Custom'
import Testimonial from './Components/Testimonial'
import { CartProvider } from './CartContext/Context'


export default function page() {
  return (
    <CartProvider>
  <>
  
  <Navbar />
  <Hero />
<ProductCard />
<BigMarquee />
<ReviewCard />
<div class="flex flex-col items-center mt-16">
  <img src="https://organicthemes.com/demo/chrono/files/2023/05/watch-icon.png" alt="Logo" class="w-24 h-24 mb-6" />
  
  <h3 class="text-5xl font-semibold text-center flex gap-2 justify-center mb-10">Stylish. Functional. Quality.</h3>
  
  <h2 class="text-lg sm:text-xl font-medium text-center text-black mb-2">Our goal is to provide products that stand the test of time.</h2>
</div>
<ImageGrid />
<BigMarquee />
{/*  */}
<ProductOfWeek />
<News />
<BigMarquees />

<Blog />

<Custom />

<Testimonial />







<Footer />


  </>
  </CartProvider>
  )
}
