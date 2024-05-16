import React from "react";

function Card(props) {
    return (
        <div className="card">
            {/* <h2>Recharge</h2> */}
            <h3> {props.name}</h3>
            <h4>Role: {props.role}</h4>
            <h4>Salary: {props.sal}</h4>
            <div className="btn">
                <button className="bt">{props.btn}</button>
                <button className="bt">{props.btn1}</button>
            </div>
        </div>
    )
}

export default Card;