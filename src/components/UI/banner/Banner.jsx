import React from "react";
import cl from './Banner.module.css';
import logo from '../../../resources/logo.png'

const Banner = (props) => {
    return (
        <header>
            <div className={cl.banner}>
                <a href="">
                    <img src={logo}/>
                </a>
            </div>
        </header>
    );
};
export default Banner;
