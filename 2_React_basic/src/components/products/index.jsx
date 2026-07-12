import React from 'react'
import ProductItems from './components/ProductItems'
import './style.css'

const ProductList = ({ name, city, products }) => {

  const flag = true;
  return (
    <div className="title">
      
      {
        flag ? (
          <h4>Welcome, {name}!</h4>
        ) : (
          <h4>Welcome, Guest!</h4>
        )
      }
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
