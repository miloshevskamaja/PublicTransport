import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Home.css";
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';

const Navbar = () => {

    const [Mobile, setMobile] = useState(false)

    return (
       <nav className="navig">
         <h4 className="public">Public Transport</h4> 
        <div className="contm">
        <ul className={ Mobile ? "nav-links-mobile" : "nav-links"} onClick={()=> setMobile(false)}>
        <Link to='/' className="lin"><li>МАПА</li></Link>
            <Link to='/login' className="lin"><li>КУПИ КАРТА</li></Link>
            <Link to='/signup' className="lin"><li>РЕГИСТРИРАЈ СЕ</li></Link>
            <Link to='/secondpage' className="lin"><li>ИНФО</li></Link>
        </ul>
        <button className="menu" onClick={() => setMobile(!Mobile)}>
            {Mobile? <ImCross/> : <FaBars />}
            
        </button>
        </div>

       </nav>
    )
}
export default Navbar;