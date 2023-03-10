import React from "react";

const Button = ({text, isDisabled, clickHandler})=>{
    return(
        <button disabled={isDisabled} onClick={clickHandler}>{text}</button>
    )
};

export default Button;