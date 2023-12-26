import React from "react";


function ContacMe() { 
    const nombreCompleto= 'Maria Horton';
    const biografia = 'lorem Ipsum'
    return(
        <React.Fragment>
            <main>
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                <h2 className="titleAbotMe">{nombreCompleto}</h2>
            </div>
            <div>
                <p>{biografia}</p>
            </div>
        </main>
        </React.Fragment>
    )
}

export default ContacMe;