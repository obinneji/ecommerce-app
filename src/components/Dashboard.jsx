import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css'
import curosolImage from '../images/background-1.jpg'
import curosolImage2 from '../images/ecom1.jpg'
import curosolImage3 from '../images/banner1.jpg'
import curosolImage4 from '../images/ecom2.jpg'
import flashpick from "../images/product-87.jpg"
import Featured from './Featured';
   


const Dashboard = () => {
  return (
    <div>
           <div className='dashboard-parent font-poppins mt-7 px-5'>
      <div className='bg-black carousel-container rounded'>
        <Carousel className='rounded'>
          <div className='carousel-item '>
            <img src={curosolImage} alt='curoselImage1' />
          </div>
          <div className='carousel-item' >
            <img src={curosolImage2}  alt='curoselImage2' />
          </div>
          <div className='carousel-item'>
            <img src={curosolImage3} alt='curoselImage3'  />
          </div>
          <div className='carousel-item'>
            <img src={curosolImage4} alt='curoselImage4'  />
          </div>
        </Carousel>

      </div>
      <div className='bg-white p-10 rounded-xl shadow-lg shadow-gray-400'>
        <div className='flex justify-between  align-center '>
          <h2 className='font-bold text-2xl mb-7'>Flash pick of the Day</h2>
          <Link to='/collections' className='underline' >All options</Link>
        </div>
        <div className='text-center mt-7'>
          <img src={flashpick} alt='headset' className='m-auto'/>
        </div>
        <div>
          <button className='mt-5 mb-3 bg-blue rounded-full px-7 text-center py-3 text-white text-lg '>options</button>
          <p className='text-xl font-medium '>From $19.99</p>
          <p>Balance from ...</p>
        </div>
        </div>
    </div>
    <Featured />
    </div>
 
  )
}

export default Dashboard