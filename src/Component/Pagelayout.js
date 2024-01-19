import React from "react";


const Pagelayout = ({header,child,footer}) => {
    return (
        <div>
            <h1><b>{header}</b></h1>
            <p>{child}</p>
            <h3>{footer}</h3>
        </div>
    );

}

export default Pagelayout;