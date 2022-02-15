import React from "react"

const Header = () =>
    (
    <div className="header">
        <a href="#default" className="logo"><img src="https://edu.ieee.org/tr-deu/wp-content/uploads/sites/504/IEEE-CS_LogoTM-orange-370x113.png" alt="CS Logo" height="50px" /></a>
         <div className="header-right">
             <a className="active" href="#home">Home</a>
              <a href="#contact">Contact</a>
             <a href="#about">About</a>
    </div>
    </div>
)

export default Header;
