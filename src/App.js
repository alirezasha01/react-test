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
        showAndHide : false ,
};
ChangeValue = (event) =>{
    this.setState({
        products: [
            {title : event.target.value, price : 30},
            {title : event.target.value, price : 30},
            {title : event.target.value, price : 30},
        ],
    })
};
changeTogleHandler = () =>{
    const show = this.state.showAndHide;
    this.setState({
        showAndHide : !show
    })
}
    render(){
        const btn = {
            backgroundColor: "rgb(100,206,250)",
            borderRadius: "3px",
            padding: "10px",
            margin:"3px auto"
        };
    return (
            <div className="center">
            <h1>Book Shop</h1>
            <button onClick={this.changeTogleHandler} style={btn}>Show/Hide products</button>
            {this.state.showAndHide ? (
            <div>
            <Product
            title = {this.state.products[0].title}
            price = {this.state.products[0].price}
            />
            <Product
            title = {this.state.products[1].title}
            price = {this.state.products[1].price}
            />
            <Product
            title = {this.state.products[2].title}
            price = {this.state.products[2].price}
            />
            </div> )
             :null}
        </div>
    )
    }
 }


export default App