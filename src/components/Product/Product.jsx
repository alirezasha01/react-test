import React from "react";
import "./Product.css"

class Product extends React.Component{
    render(){
        console.log("Product")
        return[
            <p key="1" onClick={this.props.click}>{this.props.title}</p>,
            <p key="2">{this.props.price}</p>,
            <input key="3" type="text" onChange={this.props.change} value={this.props.title}></input>,
        ]
        }
};

export default Product;