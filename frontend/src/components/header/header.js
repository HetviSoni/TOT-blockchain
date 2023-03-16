// import React, {useEffect, useState} from "react";
import Logo from "../../assets/logohorizontal.png";
import { useContext } from "react";
import { AppContext } from "../context";
import './header.css';
import {useNavigate} from "react-router-dom";

const Header = () =>{
    const history = useNavigate();
    const {leetcodeName,changeLeetcodeName, companyName, changeCompanyName} = useContext(AppContext);
    return (
    <header className="header">
    <div className="header--container">
        <h1 className="logoimg">
            <img src={Logo} className="log" alt='Code fraggers logo'></img>
        </h1>
       
       {leetcodeName?(
                <button className="signIn" onClick={()=>history("/profile")} >
                   {leetcodeName} 
                </button>
            ):(companyName?(
                <button className="signIn" onClick={()=>history("/company-profile")} >
                   {companyName} 
                </button>
            ):(
                <button className="signIn" onClick={()=>history("/login")} >
                  Sign in
                </button>
            ))
        }
        
    </div>
    </header>)
};
export default Header;