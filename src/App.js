import React from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css"
import Main from "./components/Main/Main";
class App extends React.Component {
    state = {
        products: [
            {id: 1 ,title : "book1", price : 50},
            {id: 2 ,title : "book2", price : 80},
            {id: 3 ,title : "book3", price : 70},
        ],
        showAndHide : false ,
};
ChangeValue = (event , id) =>{
    const productIndex = this.state.products.findIndex((item) =>{
        return item.id === id
    })

    const product = {
        ...this.state.products[productIndex]
    }
    product.title = event.target.value
    const products = [...this.state.products]
    products[productIndex] = product

    this.setState({
        products:products
    })
};
changeTogleHandler = () =>{
    const show = this.state.showAndHide;
    this.setState({
        showAndHide : !show
    })
}
deleteStateHandler = (productIndex) => {
    const product = [...this.state.products]
    product.splice(productIndex,1)
    this.setState({
        products : product
    })

}
    render(){

    let nullProduct = null;
    if(this.state.showAndHide){
        nullProduct = (
            <div>
            <ProductList
             products={this.state.products}
             delete={this.deleteStateHandler}
             change={this.ChangeValue}
             />
             </div>
             
        )
    }
    return (
        <>
            <Main click={this.changeTogleHandler}>
                {nullProduct}
            </Main>
        </>
    )
    }
 }


export default App