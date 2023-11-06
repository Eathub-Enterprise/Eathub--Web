import React from 'react'
import './FirstSec.css'
import { useNavigate } from 'react-router-dom'

const FirstSec = () => {
  const navigate = useNavigate();
  return (
    <div className='FirstSection'>
      <p className="heroP"><span className='Pcolours'>Boost</span> Your <span className='Pcolours'>Food Business</span> with Our Premium <span className='Pcolours'>Vendor Platform</span></p>
      <p className="heroP2">Join our network of successful vendors and reach a wider audience.</p>
      <button onClick={() => {navigate('/signup')}} className='firstbtn'>SELL WITH EATHUB</button>
    </div>
  )
}

export default FirstSec;