import React from "react";

const Wrapper = (WrappedCpmponent , className) =>{
    return (props)=>(
        <div className={className}><WrappedCpmponent/></div>
    )
}

export default Wrapper