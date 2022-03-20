import React from "react"
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import IEEELogo from '../components/images/ieee.org.black.svg';



const Header = () =>
(
    <div className="container">
        <div className="header">
        <ul>
            <li><a href="/#komitelerimiz">Komitelerimiz</a></li>
            <li><a href="#">Projelerimiz</a></li>
                
            

            
            <li>
                <a>
                    <img className="logo" src={IEEELogo} alt="IEEE Logo" height="50px" />
                </a>
            </li>

            <li><a href="#">Etkinliklerimiz</a> </li>
            <li><a href="/#about-us">Hakkımızda</a></li>
        </ul>

    </div>

    </div>
)

export default Header;
