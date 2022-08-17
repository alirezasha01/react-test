import React from "react";

const Wrapper = (WrappedCpmponent , className) =>{
    return (props)=>(
        <div className={className}><WrappedCpmponent {...props}/></div>
    )
}

export default Wrapper