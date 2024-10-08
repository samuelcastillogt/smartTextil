import React from 'react'
import Button from './layout/Button'
import { useStore } from '../store/index.js'

function ProductionFlow() {
    const {products} = useStore(state => state)
  return (
    <div className='prod-container'>
        <p>status de Produccion</p>
        {products != undefined ? <p>{products.length} en produccion</p> : <p>No hay productos en produccion</p>}
        <div style={{display: "flex", justifyContent: "flex-end", alignItems: "flex-end", width: "100%"}}>
        <Button type="primary" title="Ver reporte completo"/>
        </div>

    </div>
  )
}

export default ProductionFlow