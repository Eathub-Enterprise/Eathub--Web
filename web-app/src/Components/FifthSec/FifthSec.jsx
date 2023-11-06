import React from 'react'
import './FifthSec.css'
import Data from '../../Assets/images/data.png'

const FifthSec = () => {
  return (
    <div className='FifthSection'>
      <p className='data'>Our Real-time Data</p>
      <img src={Data} className='timeImg' alt="Real-time data" />
    </div>
  )
}

export default FifthSec
