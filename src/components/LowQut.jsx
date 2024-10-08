import React from 'react'
import { useStore } from '../store'
function LowQut() {
  const {products} = useStore(state => state)
  return (
    <div className='low-qut-container'>
      {
        products != undefined && products.map(product => { 
          if(product.stock <= product.limit){
            return <p>{product.name}</p>
          }
          
        })
      }
    </div>
  )
}

export default LowQut