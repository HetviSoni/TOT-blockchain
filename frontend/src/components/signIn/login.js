import React, { useEffect, useState, useContext } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import useArcanaAuth from "../../arcanaAuth";
import { ColorRing } from 'react-loader-spinner';
import { AppContext } from "../context";

const LoginForm = () => {
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const { leetcodeName, changeLeetcodeName, email, changeEmail, account, changeAccount } = useContext(AppContext);
    const {
        initializeAuth,
        login,
        loginWithLink,
        isLoggedIn,
        getAccounts,
        logout,
        initialized,
    } = useArcanaAuth();

    const initialize = async () => {
        await initializeAuth();
    }

    const googleLogin = async () => {
        await login('google');
        setLoggedIn(true);
    }

    const loginwithLink = async (email) => {
        await loginWithLink(email);
        setLoggedIn(true);
    }

    useEffect(() => {
        initialize();
    }, []);

    useEffect(() => {
        const loadDetails = async () => {
            if (initialized) {
                const isLogged = await isLoggedIn();
                if (isLogged) {
                    setLoggedIn(true);
                    const acc = await getAccounts();
                    changeAccount(acc[0]);
                    setLoading(false);
                }
                else {
                    setLoading(false);
                }
            }
        };
        loadDetails();
    }, [initialized]);
    const handleEmailChange = (event) => {
        changeEmail(event.target.value);
    }
    const handleUserName = (e) => {
        changeLeetcodeName(e.target.value);
    }
    const history = useNavigate();
    return (
        <>
            {loading ? (
                <div className="'loading" >
                    <ColorRing visible={true} />
                </div>
            ) : !loading && loggedIn ? (
                history("/")
            ) :
                (
                    <div className="logincover">
                        <h1 className="loginheading">Sign in</h1>
                        <div className="loginsubcon">
                            <p>Leetcode Username</p>
                            <input type="text" placeholder="User name" value={leetcodeName} onChange={handleUserName} />
                            <div>
                                <p>Email</p>
                                <input value={email} type='text' placeholder="enter email" onChange={handleEmailChange} />
                                
                                <button onClick={() => { loginwithLink(email) }} className="button">
                                    Login with link
                                </button>
                                <h4>OR</h4> 
                                <div class="google-btn" onClick={() => { googleLogin() }}>
                                    <div class="google-icon-wrapper">
                                        <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                                    </div>
                                    <p class="btn-text"><b>Sign in with google</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}

export default LoginForm;