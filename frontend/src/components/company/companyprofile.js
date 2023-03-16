import React, { useEffect, useState, useContext } from "react";
import History from "../../assets/history.png"
import Bell from "../../assets/bell.png"
import "./companyprofile.css";
import Logo from "../../assets/logohorizontal.png";
import Edit from "../../assets/arrow-left-thin.png";
import Description from "../../assets/description.png"
import Email from "../../assets/Email.png"
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";

const CompanyProfile = () => {
    
    const history = useNavigate();
    const { email, account, companyName } = useContext(AppContext);
    (
        
        <div className="profile" >
            <div className="navbar" >
                <div className="navbar-logo">
                    <img src={Logo} className="logo" alt='Code fraggers logo' onClick={() => history("/")} ></img>
                </div>
                <div className="navbar-li" >
                    <ul className="list" >
                        <li>
                            <img src={History} />
                        </li>
                        <li>
                            <img src={Bell}  />
                        </li>
                        <li>
                        <img className="navbar-dp"  width={30} height={30} src={Logo} ></img>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="profile-container">
                <div className="container-left" >
                    <img className="dp" src={Logo} ></img>
                    <div className="info">
                        <div className="name" >
                            {companyName}
                        </div>
                        <div className="description">
                            Users hired: 3
                        </div>
                        <button className="edit" >
                            <div className="edit-content">
                                <img src={Edit} width={25} height={25} />
                                <small className="edit-btn-text"> Edit Profile</small> 
                            </div>
                        </button>
                    </div>
                </div>
                <div className="container-right">
                    <div className="heading-container"><h2>Profile</h2></div>
                    <div className="container-right-bottom" >
                        <div className="description-container">
                            <div className="comp-desc-heading">
                                <img className="description" src={Description} />
                                <h3> Company Description</h3>
                            </div>
                            <div>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                             </div>
                        </div>
                        <div className="email-container">
                            <div className="email-heading"><img src={Email} width={25} height={25} /><h3> Email</h3></div>

                            <div>{email}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CompanyProfile;
