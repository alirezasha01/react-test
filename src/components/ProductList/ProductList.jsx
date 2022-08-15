import React from "react"
import Product from "../Product/Product"

class ProductList extends React.Component{
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
        render(){
        return this.props.products.map((item , index)=>{
            return (
            <Product
            click = {() => this.props.delete(index)}
            title={item.title}
            price={item.price}
            change={(event) => this.props.change(event , item.id)}
            key = {index}              
            />
            )
       })
    }
}

export default ProductList