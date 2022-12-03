import React from "react";
import cl from './Banner.module.css';
import logo from './logo.png'
    const Banner = (props) => {
    return (
        <header>
            <div className={cl.banner}>
                <img src={logo}/>
            </div>
        </header>
    );
};
export default Banner;
