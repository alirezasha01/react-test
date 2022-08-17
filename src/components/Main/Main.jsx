import React , { useEffect } from "react";

const Main = (props) =>{
    useEffect(()=>{
        setTimeout(()=>{
            alert("HTTP Request");
        },2000)
        return(
            console.log("delete on useEffect")
        )
    },[])
    const btn = {
        backgroundColor: "rgb(100,206,250)",
        borderRadius: "3px",
        padding: "10px",
        margin:"3px auto"
    };
    return(
            <div className="center">
            <h1>Book Shop</h1>
            <button onClick={props.click} style={btn}>Show/Hide products</button>
            {props.children}
            </div>
    )
};

export default Main;