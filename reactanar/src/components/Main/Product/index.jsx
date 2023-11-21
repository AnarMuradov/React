import React from 'react'
import "./style.css"
import Card from './Card'
const Product = () => {
  return (
    <div className='product'>
        <Card title="Card 1" description="GOAT"/>
        <Card title="Card 2" description="ANKARA MESSI"/>
        <Card title="Card 3" description="Barselona"/>
    </div>
  )
}

export default Product