import React from 'react'
import styles from './ProductItem.module.css' // this is for CSS module, which is a way to scope CSS to a specific component in React. It helps avoid naming conflicts and keeps styles modular.

const ProductItems = ({ key, product }) => {
  return (
    <div style={{padding: '10px', border: '1px solid #ccc', margin: '10px 0'}} key={key} >
      <p>{product}</p>
      <button className={styles.buttonStyle}>Buy</button>
    </div>
  )
}

export default ProductItems
