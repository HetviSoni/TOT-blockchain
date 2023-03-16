import React from "react";
import "./transaction.css";
import History from "../../assets/history.png"
import Bell from "../../assets/bell.png"
import Logo from "../../assets/logohorizontal.png";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";
import TransactionBox from "./transactionbox";
import { useContext } from "react";
const Transactions = () => {
    const { leetcodeName, userProfile } = useContext(AppContext);
    const transactions = [
        {
            problemId: '1',
            difficulty: 'easy',
            coins: '0.002',
            transactionid: '7277',
        },
        {
            problemId: '2',
            difficulty: 'medium',
            coins: '0.002',
            transactionid: '7277',
        },
        {
            problemId: '3',
            difficulty: 'hard',
            coins: '0.002',
            transactionid: '7277',
        }

    ];
    const history = useNavigate();
    return (
        <div className="transaction">
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
                            <img src={Bell} />
                        </li>
                        <li onClick={() => history("/profile")} >
                            <img src={userProfile.dp} className="navbar-dp" width={30} height={30} />
                            

                        </li>
                    </ul>
                </div>

            </div>
            <div className="transaction-container">
                <div className="transaction-container-left" >
                    <img className="transaction-dp" src={userProfile.dp} ></img>
                    <div className="questions-info">
                        <div className="name" >
                            {leetcodeName}
                        </div>
                
                        <div className="solved" >
                            <h4>Questions Solved</h4>
                            easy:{userProfile.easy} <br></br>
                            medium:{userProfile.medium}<br></br>
                            hard:{userProfile.hard}<br></br>
                        </div>
                        <br></br><br></br><br></br>
                        {/* <div className="attempted">
                            <h4>Questions attempted</h4>
                            easy: <br></br>
                            medium: <br></br>
                            hard: <br></br>
                        </div> */}
                    </div>
                </div>
                <div className="container-right">
                    <div className="heading-container"><h2>Transactions</h2></div>
                    <div className="transaction-container-right" >
                        {
                            transactions.map(transaction => <TransactionBox
                                problemId={transaction.problemId}
                                difficulty={transaction.difficulty}
                                coins={transaction.coins}
                                transactionid={transaction.transactionid} />)
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Transactions;