import React from "react";
import img from "./img/appu.jpg"
import Like from "./Like";

function Frame() {

    return(

        <div className="Frame">

            <div className="f">
            <img className="img_2" src={img} />
            </div>

            <Like/>

        </div>

    )
    
}

export default Frame;