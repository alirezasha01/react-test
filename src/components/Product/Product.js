import React from "react";
import "./Product.css"

const Product = (props) =>{
    return(
        <div className="product">
            <p>{props.title}</p>
            <p onClick={props.click}>{props.price}</p>
            <input type="text" onChange={props.change}></input>
        </div>
    )
};

export default Product;