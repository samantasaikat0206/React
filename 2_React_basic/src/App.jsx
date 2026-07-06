import React from 'react'
import ClassBasedComponent from './components/ClassBasedComponent'
import FunctionBasedComponent from './components/FunctionBasedComponent'

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <ClassBasedComponent/>
      <FunctionBasedComponent/>
    </div>
  )
}

export default App
