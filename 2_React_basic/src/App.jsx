import React from 'react'
import ClassBasedComponent from './components/ClassBasedComponent'
import FunctionBasedComponent from './components/FunctionBasedComponent'
import ProductList from './components/products'

const dummyProducts = [
  "Product 1",
  "Product 2",
  "Product 3",
  "Product 4",
  "Product 5"
]
const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      {/* <ClassBasedComponent/>
      <FunctionBasedComponent/>
       */}

       <ProductList name="saikat" city="New York" products={dummyProducts}/>
    </div>
  )
}

export default App
