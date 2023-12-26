import React from "react";
import People from "./People";
import Paisajes from "./Paisajes";
import Abstracctos from "./Abstractos";

function ContentRowSecTions(){
    return(
        <>
        <div className="People">
            <People/>
            <Paisajes/>
            <Abstracctos/>
        </div>

        </>
    )
}

export default ContentRowSecTions;