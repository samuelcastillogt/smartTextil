import React, { useEffect } from 'react'
import ProductionFlow from '../components/ProductionFlow'
import LowQut from '../components/LowQut'
import Inventary from '../components/Inventary'
import Maintenance from '../components/Maintenance'
import { dataService } from '../services/dataService.service'
import { useStore } from '../store'
function Home() {
    const {addProducts} = useStore(state => state)
    useEffect(()=>{
        dataService.getAll(addProducts)
    },[])
  return (
    <div style={{padding: "20px"}}>
    <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <ProductionFlow />
        <div style={{display: "flex", justifyContent: "space-around", padding: "10px", alignItems: "space-arronud"}}>
            <Inventary />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", margin: "10px"}}>
                <Maintenance />
                <Maintenance />
            </div>
        </div>
        </div>
    
    <LowQut />
    </div>

    </div>

  )
}

export default Home