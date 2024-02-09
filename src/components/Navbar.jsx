import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar({user,handleLogOut} ) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
    <a className="navbar-brand text-warning" href="#">
      <img src="\src\assets\lemon-1-svgrepo-com.svg" alt="" width="40" height="32" className="d-inline-block align-text-top "/>
     LEMON STORE
    </a>
  </div>
  <div className="container">
   
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
        <NavLink className="nav-link" to="/products">Ürünler</NavLink>
        <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
        <NavLink className="nav-link" to="/contact">İletişim</NavLink>
        {
          user?
          <>
          <NavLink className="nav-link" to="/fav">Favoriler</NavLink>
          <button className="nav-link" onClick={handleLogOut}>Logout ({user.name})</button>
          </>
           :
          <NavLink className="nav-link" to="/login">Login</NavLink>
        }
        <NavLink className="nav-link" to="/myCard">
          <img src="src\assets\conversation-svgrepo-com.svg" alt="" width="40" height="32"/>SEPETİM
        </NavLink>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar