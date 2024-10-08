import React from 'react'
import {Button} from "@mui/material"
function ButtonCom(props) {
    const {type, title} = props
  return (
    <Button type={type} variant='contained'>{title}</Button>
  )
}

export default ButtonCom