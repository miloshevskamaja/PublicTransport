import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error =()=>{
    return(
        <div className="error">
        <h6 className="crveno"><b> Внесовте погрешен е-маил или погрешна лозинка! Ве молиме обидете се повторно.</b></h6>
        <Link to='/login'><h7 classname="crveno1">НАЗАД</h7></Link>
        
        </div>
    );
};

export default Error;