import React from "react"
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'


const Header = () =>
(
    <div className="header">
        <Link to='/'>
            <img className="logo" src="https://edu.ieee.org/tr-deu/wp-content/uploads/sites/504/IEEE-CS_LogoTM-orange-370x113.png" alt="CS Logo" height="50px" />
        </Link>
        {/* <a href="#default" className="logo">
            <img src="https://edu.ieee.org/tr-deu/wp-content/uploads/sites/504/IEEE-CS_LogoTM-orange-370x113.png" alt="CS Logo" height="50px" />
        </a> */}
        <div className="header-right">
            <div className="dropdown">
                <a href="/komitelerimiz">Komitelerimiz</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/komitelerimiz/aess">AESS</a>
                    <a className="dropdown-item" href="/komitelerimiz/cs">CS</a>
                    <a className="dropdown-item" href="/komitelerimiz/ea">EA</a>
                    <a className="dropdown-item" href="/komitelerimiz/edsoc">EdSoc</a>
                </div>
            </div>
            <a href="#">Projelerimiz</a>
            <a href="#">Etkinliklerimiz</a>
            <a href="/#about-us">Hakkımızda</a>
        </div>
    </div>
)

export default Header;
