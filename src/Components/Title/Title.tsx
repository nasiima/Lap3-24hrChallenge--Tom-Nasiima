import React from 'react'
import './Title.css'

interface propsstuff {
  name:string;
}

export default function Title({name}:propsstuff) {

  
  return (
    <div className='Title'>
        <a>{name}</a>
    </div>
  )
}
