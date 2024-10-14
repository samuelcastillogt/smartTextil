import React, { useEffect, useState } from 'react'
import StickyHeadTable from '../components/Table'
import { inventaryService } from '../services/inventary.service'

function Inventary() {
    const [active, setActive] = useState("production")
    const [rows, setRows] = useState([])
    const getdata = async() => {
        const data = await inventaryService.getAll(active)
        setRows(data)
    }
    useEffect(()=>{
        getdata()
    },[active])
  return (
    <div style={{display: "flex"}}>
    <div className='side-bar'>
        <ul>
            <li onClick={() => setActive("production")} className={active === "production" ? "side-bar-active" : ""}>En Produccion</li>
            <li onClick={()=> setActive("MP")} className={active === "MP" ? "side-bar-active" : ""}>Materia Prima</li>
        </ul>
    </div>
    <div style={{width: "80%"}}>
    {
        active == "production" && <StickyHeadTable active={active} rows={rows}/>
    }
    {
        active == "MP" && <StickyHeadTable active={active} rows={rows}/>
    }  
    </div>
      
    </div>

  )
}

export default Inventary