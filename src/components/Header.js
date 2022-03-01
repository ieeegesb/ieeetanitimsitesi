import React from "react"
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'


const Header = () =>
(
    <div className="header">
        <div className="header-left">
            <a href="/#komitelerimiz">Komitelerimiz</a>
            <a href="#">Projelerimiz</a>
        </div>        

        <div className="header-center">
        <Link to='/'>
            <img className="logo" src="https://edu.ieee.org/tr-deu/wp-content/uploads/sites/504/IEEE-CS_LogoTM-orange-370x113.png" alt="CS Logo" height="50px" />
        </Link>

        </div>
        
        

        <div className="header-right">
            <a href="#">Etkinliklerimiz</a>
            <a href="/#about-us">Hakkımızda</a>
        </div>
    </div>
)

export default Header;
