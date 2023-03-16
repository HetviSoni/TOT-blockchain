import React from "react";
import { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [leetcodeName, setLeetcodeName] = useState('');
    const [email,setEmail] = useState('');
    const [account,setAccount]=useState('');
    const [companyName, setCompanyName] = useState('');
    const [userProfile, updateUserProfile] = useState({
        dp:'',
        easy:0,
        medium:0,
        hard:0,
    });

    const changeEmail=(email)=>{
        setEmail(email);
    }
    const changeLeetcodeName=(name)=>{
        setLeetcodeName(name);
    }
    const changeAccount=(account)=>{
        setAccount(account);
    }
    const changeCompanyName = (companyName)=>{
        setCompanyName(companyName);
    }

   
    return (
        <AppContext.Provider value={{leetcodeName,changeLeetcodeName,email,changeEmail, account,changeAccount, companyName,changeCompanyName, updateUserProfile, userProfile}} > {children}</AppContext.Provider>
    )
};

export {AppContext,AppProvider};