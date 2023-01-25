import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../dummyData/products'

const Phone = () => {
    const pramId = useParams()
    const id = pramId.id
    const idNum = parseInt(id)
    
    const productDetails = products.phones.filter(function(obj){
      return obj.id === idNum;
    })
    const product = productDetails[0]
    console.log(productDetails)
  return (
    <div>
      <div>
        <img src={product.image} alt='phone' />
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.amount}</p>
        <p>{product.category}</p>
        <p>{product.brand}</p>
        <p>{product.rating}</p>
      </div>
    </div>
  )
}

export default Phone