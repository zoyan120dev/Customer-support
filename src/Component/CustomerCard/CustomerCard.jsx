import React from 'react'

function CustomerCard({customreItms}) {
  console.log(customreItms.description)
  return (
   <>
     <div className='text-black p-10 bg-white shadow rounded-xl cursor-pointer'>
         <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl'>{customreItms.title}</h2>
              <div className={` px-3 py-2 rounded-3xl ${customreItms.status === 'Open' ? 'bg-green-300' :'bg-yellow-200'}`}>
                <span className='text-lg font-medium'>{customreItms.status}</span>
              </div>
         </div>
         <p>{customreItms.description}</p>
     </div>
   </>
  )
}

export default CustomerCard