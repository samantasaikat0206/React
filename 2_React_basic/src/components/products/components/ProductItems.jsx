import React from 'react'

const ProductItems = ({ key, product }) => {
  return (
    <div key={key}>
      <p>{product}</p>
    </div>
  )
}

export default ProductItems
