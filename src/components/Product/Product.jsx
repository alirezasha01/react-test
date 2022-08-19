import React from "react";
import "./Product.css"
import Container from "../../hoc/Container";
import Wrapper from "../../hoc/Wrapper";
import Auth from "../../context/Auth";
class Product extends React.Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    render(){
        console.log("Product")
        return(
            <Container>
            <Auth.Consumer>
            {(context)=>context.auth ? <p>logged in</p> : <p>please login</p>}
            </Auth.Consumer>
            <p key="2" onClick={this.props.click}>{this.props.title}</p>
            <p key="3">{this.props.price}</p>
            <input ref={this.inputRef} key="1" type="text" onChange={this.props.change} value={this.props.title}></input>
            </Container>
        )
        }
};

export default Wrapper(Product,"product");