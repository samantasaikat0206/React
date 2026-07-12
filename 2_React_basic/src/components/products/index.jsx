import React from 'react'
import ProductItems from './components/ProductItems'
import './style.css'

const ProductList = ({ name, city, products }) => {
  return (
    <div className="title">
      <h3>Product List</h3>
      <p>Name: {name}</p>
      <p>City: {city}</p>
      {/* <ProductItems/> */}
      <ul>
        {
          products.map((product, index) => (
            <ProductItems key={index} product={product} />
          ))
        }
      </ul>
    </div>
  )
}

export default ProductList
