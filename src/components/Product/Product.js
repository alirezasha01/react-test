import React from "react";
import "./Product.css"

const Product = (props) =>{
    return(
        <div className="product">
            <p>{props.title}</p>
            <p onClick={props.click}>{props.price}</p>
        </div>
    )
};

export default Product;