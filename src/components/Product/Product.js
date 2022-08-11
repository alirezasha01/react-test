import React from "react";
import "./Product.css"

const Product = (props) =>{
    return(
        <div className="product">
            <p onClick={props.click}>{props.title}</p>
            <p>{props.price}</p>
            <input type="text"></input>
        </div>
    )
};

export default Product;