import React from 'react'
import ProductItems from './components/ProductItems'

const dummyProducts = [
  "Product 1",
  "Product 2",
  "Product 3",
  "Product 4",
  "Product 5"
]
const ProductList = () => {
  return (
    <div>
      <h3>Product List</h3>
      <ProductItems/>
    </div>
  )
}

export default ProductList
