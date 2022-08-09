import React, { useState } from "react";
import Product from "./components/Product/Product";
import "./App.css"

// const App = () => {
//     const [productState , setProductState] = useState({
//         products: [
//             {title : "book1", price : 50},
//             {title : "book2", price : 80},
//             {title : "book3", price : 70},
//         ],
// })
// const ChangeValue = () =>{
//     setProductState({
//         products: [
//             {title : "book1", price : 30},
//             {title : "book2", price : 30},
//             {title : "book3", price : 30},
//         ],
//     })
// }
//     return (
//             <div className="center">
//             <h1>React App</h1>
//             <Product
//             title = {productState.products[0].title}
//             price = {productState.products[0].price}
//             />
//             <Product
//             title = {productState.products[1].title}
//             price = {productState.products[1].price}
//             />
//             <Product
//             title = {productState.products[2].title}
//             price = {productState.products[2].price}
//             />
//             <button onClick={ChangeValue}> click me!</button>
//         </div>
//     )
// }
class App extends React.Component {
    state = {
        products: [
            {title : "book1", price : 50},
            {title : "book2", price : 80},
            {title : "book3", price : 70},
        ],
}
ChangeValue = (event) =>{
    this.setState({
        products: [
            {title : event.target.value, price : 30},
            {title : event.target.value, price : 30},
            {title : event.target.value, price : 30},
        ],
    })
}
    render(){
    return (
            <div className="center">
            <h1>Book Shop</h1>
            <Product
            title = {this.state.products[0].title}
            price = {this.state.products[0].price}
            change = {this.ChangeValue}
            />
            <Product
            title = {this.state.products[1].title}
            price = {this.state.products[1].price}
            change = {this.ChangeValue}
            />
            <Product
            title = {this.state.products[2].title}
            price = {this.state.products[2].price}
            change = {this.ChangeValue}
            />
            
            <button onClick={this.ChangeValue}> click me!</button>
        </div>
    )
    }
 }


export default App