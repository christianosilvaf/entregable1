import React from 'react'
import './Font.css'//importando la hoja de estilos del componente

const Font = ({autordata}) => {
  return (
    <div className='font'>Taken from:  {autordata}</div>
  )
}

export default Font