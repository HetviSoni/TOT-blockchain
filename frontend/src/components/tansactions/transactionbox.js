import React from "react";
import "./transactionbox.css";

const TransactionBox=(props)=>{
    
    return (
        <div className="box" >
            <h4>Solved problem : {props.problemId}</h4>
            difficulty={props.difficulty}<br></br>
            coins={props.coins}<br></br>
            transactionid={props.transactionid}
        </div>
    )
}
export default TransactionBox;