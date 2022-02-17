import React from "react"
import { Link } from 'react-router-dom';

const Header = () =>
(
    <div className="header">
        <Link to='/'><img className="logo" src="https://edu.ieee.org/tr-deu/wp-content/uploads/sites/504/IEEE-CS_LogoTM-orange-370x113.png" alt="CS Logo" height="50px" /></Link>
        {/* <a href="#default" className="logo">
            <img src="https://edu.ieee.org/tr-deu/wp-content/uploads/sites/504/IEEE-CS_LogoTM-orange-370x113.png" alt="CS Logo" height="50px" />
        </a> */}
        <div className="header-right">
            <a className="active" href="#home">Ana Sayfa</a>
            <a href="#">Komitelerimiz</a>
            <a href="#">Projelerimiz</a>
            <a href="#">Etkinliklerimiz</a>
            <a href="#about-us">Hakkımızda</a>
        </div>
    </div>
)

export default Header;
