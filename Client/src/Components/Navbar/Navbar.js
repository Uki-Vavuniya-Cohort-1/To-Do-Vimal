import React from "react";
import '../Navbar/navbar.css'
function Navbar() {
    return (
        <section className="body-container">
        <nav className="navbar" id="navbar1">
          <div className="navbar-brand">
            <a href="#" className="a-link">
              <h1>Vimal Brand</h1>
            </a>
          </div>
          <div className="navbar-wrap a1">
            <a href="/" className="a-link navlink active">Home</a>
            <a href="/About" className="a-link navlink">About</a>
            <a href="/Note" className="a-link navlink">Note</a>
            <a href="/Contact" className="a-link navlink">Contact</a>
          </div>
        </nav>
      </section>
    )

}

export default Navbar;