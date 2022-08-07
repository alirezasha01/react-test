import React from "react";
import Product from "./components/Product/Product";

const App = () =>{
    return (
        <div id="main" className="container">
            <h1>React App</h1>
            <Product title = "headset" price ="500000t"/>
        </div>
    )
}

export default App