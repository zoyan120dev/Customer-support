import React from 'react'

function Resolve({items}) {
  return (
     <>
      {
        items.map(items => (
            <div key={items.id}>
                 
            </div>
        ))
      }
     </>
  )
}

export default Resolve