import React from "react";

const Product = (props) =>{
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.price}</p>
        </div>
    )
};

export default Product;