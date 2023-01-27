import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../dummyData/products'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveIcon from '@mui/icons-material/Remove';


const Phone = () => {
  const pramId = useParams()
  const id = pramId.id
  const idNum = parseInt(id)

  const productDetails = products.phones.filter(function (obj) {
    return obj.id === idNum;
  })
  const product = productDetails[0]
  console.log(productDetails)
  return (
    <div className='font-poppins px-5 '>
      <div className='border-2 flex my-5'>
        <img src={product.image} alt='phone' className='h-80 w-80' />
        <div className='mx-10 self-center'>
          <h2 className='font-extrabold text-2xl mb-2'>{product.name}</h2>
          <p className='font-bold text-blue'>${product.amount}</p>
          <p className='text-yellow  font-medium'>Category: <span className='text-black font-medium'>{product.category}</span></p>
          <p className='text-yellow  font-medium'>Brand: <span className='text-black font-medium'>{product.brand}</span></p>
          <p className='text-yellow  font-medium'>Rating: <span className='text-black font-medium'>{product.rating}</span></p>
          <button className='text-white bg-blue text-center px-3 py-2  rounded-lg'>Add<AddOutlinedIcon /></button>
          <button className='text-white bg-red text-center px-3 py-2 rounded-lg'>Remove<RemoveIcon /></button>
        </div>
      </div>

    </div>
  )
}

export default Phone