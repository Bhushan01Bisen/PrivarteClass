import React from "react";
import img from "./839959.jpg";
import Naame from "./Naame";



function Image() {

    return(

        <div className="img">
            <img className="img_1" src={img} />
            <Naame />
            
        </div>


    )
    
}

export default Image;