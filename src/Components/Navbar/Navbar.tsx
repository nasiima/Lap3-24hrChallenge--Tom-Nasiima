import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="Navbar">
        
    <NavLink className="Navlink" to="/home">Home</NavLink>
    <NavLink className="Navlink" to="/about">About</NavLink>
        
    </div>
  )
} 



