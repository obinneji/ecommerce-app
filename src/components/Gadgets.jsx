import React from 'react'
import { products } from '../dummyData/products'
import { Link } from 'react-router-dom'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const Gadgets = () => {
  return (
    <div>
      <ul className='grid md:grid-cols-4 md:grid-row-2 grid-cols-1 grid-rows-1 gap-10 mt-5 px-5'>
        {products.gadgets.map((gadget) => (
          <li key={gadget.id}>
            <div className='rounded-xl shadow-lg shadow-gray-400 p-10 h-90 w-90 transistion ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
              <img src={gadget.image} alt={gadget.name} className='h-64 w-64 m-auto' />
              <p className='font-bold text-black text-lg'>${gadget.amount}</p>
              <h2 className='text-black font-extrabold'>{gadget.name.split('', 30)}...</h2>
              <div className='flex gap-4 items-center mt-5'>
                <Link to={`/collections/gadgets/${gadget.id}`} ><button className='bg-blue text-white px-2 py-1  text-center rounded-lg '>View more</button>
                </Link>
                <button className='bg-blue text-white px-2 py-1 text-center rounded-lg '>Add<AddOutlinedIcon /></button>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Gadgets