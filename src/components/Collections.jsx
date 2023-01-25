import React from 'react';
import { Link } from 'react-router-dom';
import phoneCategory from "../images/c-phones.jpg"
import gadgetCategory from "../images/c-gadgets.jpg"
import laptopsCategory from "../images/c-laptops.jpg"
import watchesCategory from "../images/c-watches.jpg"


const Collections = () => {
  return (
    <div className='font-poppins'>
      <h2 className='text-center text-blue text-bold mt-5   mt-5 font-bold text-4xl text-blue italic'>COLLECTIONS</h2>
      <div className='font-poppins grid md:grid-cols-2 md:grid-row-2 grid-cols-1 grid-rows-1 gap-16 p-10 '>
        <Link to="/collections/phones">
          <div className='transistion ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 '>
          <img src={phoneCategory} className='h-96 w-full' alt='phone-category' />
          <p className='text-center text-blue text-2xl mt-5 '>Phones</p>
          </div>
        </Link>
        <Link to="/collections/gadgets">
          <div className='transistion ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <img src={gadgetCategory} className='h-96 w-full'  alt='gadgets-category'/>
          <p className='text-center text-blue text-2xl mt-5  '>Gadgets</p>
          </div>
          </Link>
        <Link to="/collections/laptops">
          <div className='transistion ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <img src={laptopsCategory} className='h-96 w-full'  alt='laptops-category' />
          <p className='text-center text-blue text-2xl mt-5 '>Laptops</p>
          </div>
          </Link>
        <Link to="/collections/watches">
          <div className='transistion ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <img src={watchesCategory} className='h-96 w-full'   alt='watches-category'  />
          <p className='text-center text-blue text-2xl mt-5 '>Watches</p>
          </div>
          </Link>
      </div>


    </div>
  )
}

export default Collections