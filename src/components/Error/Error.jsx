import React from 'react';
import img from "../../img/star_wars_hd.webp";
import './Error.css'
const Error = () => {
    return (
        <div className="error">
            <img src={img} alt="" />
        </div>
    );
};

export default Error;