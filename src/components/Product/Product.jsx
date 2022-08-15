import React from "react";
import "./Product.css"

class Product extends React.Component{
    render(){
        console.log("Product")
        return(
        <div className="product">
            <p onClick={this.props.click}>{this.props.title}</p>
            <p>{this.props.price}</p>
            <input type="text" onChange={this.props.change} value={this.props.title}></input>
            </div>
            )
        }
};

export default Product;