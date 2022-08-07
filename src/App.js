import React from "react";
import Product from "./components/Product/Product";

class App extends React.Component {
    state = {
        products: [
            {title : "book1", price : 50},
            {title : "book2", price : 80},
            {title : "book3", price : 70},
        ],
}
ChangeValue = () =>{
    this.setState({
        products: [
            {title : "book1", price : 30},
            {title : "book2", price : 30},
            {title : "book3", price : 30},
        ],
    })
}
    render(){
    return (
            <div id="main" className="container">
            <h1>React App</h1>
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
            <button onClick={this.ChangeValue}> click me!</button>
        </div>
    )
}
}

export default App