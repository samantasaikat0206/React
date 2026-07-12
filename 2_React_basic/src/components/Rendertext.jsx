import React from 'react'

const Rendertext = ({flag}) => {
  return (
    <div>
      {
        flag ? (
          <h4>flag is true</h4>
        ) : (
          <h4>flag is false</h4>
        )
      }
    </div>
  )
}

export default Rendertext
