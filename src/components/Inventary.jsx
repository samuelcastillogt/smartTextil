import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Inventary() {
  return (
    <div style={{
        width: "300px",
        backgroundColor: "#6D466B",
        height: "200px",
        borderRadius: "10px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px"

    }}>
      <p style={{fontSize: "20px", fontWeight: "bold"}}>Gestion de inventario</p>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <Link to="/inventary">
        <Button variant="contained" color="primary">Ver Inventario</Button>
          </Link>
        
      </div>
      
    </div>
  )
}

export default Inventary