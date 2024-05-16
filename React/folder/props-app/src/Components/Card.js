import React from "react";

function Card(props) {
    return (
        <div className="card">
            <h2>User Card</h2>
            <h3>Name: {props.name}</h3>
            <h4>Role: {props.role}</h4>
            <h4>Salary: {props.sal}</h4>
        </div>
    )
}

export default Card;