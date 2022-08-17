import React from "react";

const Wrapper = (props) =>{
    return <div className={props.value}>{props.children}</div>
}

export default Wrapper