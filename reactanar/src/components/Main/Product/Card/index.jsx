import React from 'react'
import "./style.css"

const Card = ({title,description}) => {
  return (
    <>
        <div className='card'>
          <img src="https://storage.googleapis.com/pod_public/1300/159320.jpg" alt="" />
          {/* <img className='img2' src="https://img.freepik.com/premium-vector/goat-logo-vector_523404-1121.jpg" alt="" /> */}
          <h3>{title}</h3>
          <h3>{description}</h3>
        </div>
    </>
  )
}

export default Card