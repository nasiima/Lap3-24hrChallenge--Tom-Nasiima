import React from 'react'
import { NavLink, Route, useNavigate } from 'react-router-dom'
import './Navbar.css'



export default function Navbar() {
  
  const navigate = useNavigate();
  return (
    <div className="Navbar">
        
    <NavLink className="Navlink" to="/home">Home</NavLink>
    <NavLink className="Navlink" to="/repolist">Repos</NavLink>
    <NavLink className="Navlink" to="/about">About</NavLink>

    <p className="Navlink BackBtn" onClick={() => navigate(-1)}>Back</p>
        
    </div>
  )
} 



