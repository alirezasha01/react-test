import React from "react";
import "./Product.css"

const Product = (props) =>{
    console.log("Product")
    return(
        <div className="product">
            <p onClick={props.click}>{props.title}</p>
            <p>{props.price}</p>
            <input type="text" onChange={props.change} value={props.title}></input>
        </div>
    )
};

export default Product;