import React from "react"
import Product from "../Product/Product"

const ProductList = (props) =>{
        return props.products.map((item , index)=>{
         return (
         <Product
         click = {() => props.delete(index)}
         title={item.title}
         price={item.price}
         change={(event) => props.change(event , item.id)}
         key = {index}              
         />
         )
    })
}

export default ProductList