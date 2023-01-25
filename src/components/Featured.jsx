import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import React from 'react'
import { featured } from '../dummyData/featuresproduct'
import '../styles/dashboard.css'


const Featured = () => {
  return (
    <div className='px-5 mt-7 font-poppins '>
        <h2 className='font-bold text-4xl m-5 text-black'> Featured</h2>
        <div className='flex items-center justify-center px-5'>
        <ul className='flex justify-between gap-10 lg:flex-row flex-col '>
        {featured.map((data) => <li key={data.id} className='p-5 bg-white rounded-xl shadow-lg shadow-gray-400'>
            <img src={data.image} alt={data.name}  />
            <h3 className='font-bold text-center mt-5'>{data.name}</h3>
            <p className='font-medium ml-5 text-yellow '>${data.amount}</p>
            {/* <button className='mt-5 mb-3 bg-yellow rounded px-5 text-center py-2 text-white text-lg '>Product Detail</button> */}
            <button className='mt-5 mb-3 bg-blue rounded px-5 text-center py-2 text-white text-lg '>Add<AddOutlinedIcon/></button>
        </li>)}
    </ul>
        </div>
        
    </div> 
   
  )
}

export default Featured