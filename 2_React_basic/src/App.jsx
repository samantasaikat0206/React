import React from 'react'
import ClassBasedComponent from './components/ClassBasedComponent'
import FunctionBasedComponent from './components/FunctionBasedComponent'
import ProductList from './components/products'

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      {/* <ClassBasedComponent/>
      <FunctionBasedComponent/>
       */}

       <ProductList/>
    </div>
  )
}

export default App
