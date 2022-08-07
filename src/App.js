import React from "react";
import Product from "./components/Product/Product";

// const App = () =>{
//     return (
//         <div id="main" className="container">
//             <h1>React App</h1>
//             <Product/>
//         </div>
//     )
// }

class App extends React.Component{
    render(){
        return(
          <div id="main" className="container">
              <h1>React App</h1>
              <Product/>
          </div>
        )
    }
}
export default App