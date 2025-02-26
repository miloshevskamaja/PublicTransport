import React from "react";
import { Link } from "react-router-dom";
import "./success.css";

const Success =()=>{
    return(
        <div className="success">
        <h6 className="zeleno"><b>ИЗВРШИВТЕ УСПЕШНО ПЛАЌАЊЕ! </b></h6>
        <Link to='/'><h7 className="zeleno1">ОДИ НА МАПА</h7></Link>
        </div>
    );
};

export default Success;