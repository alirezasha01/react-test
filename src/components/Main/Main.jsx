import React , { useEffect , useRef , useContext} from "react";
import Auth from "../../context/Auth";

const Main = (props) =>{
    const btnRef = useRef(null)
    const auth = useContext(Auth)
    useEffect(()=>{
        btnRef.current.click()
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
            <button ref={btnRef} onClick={props.click} style={btn}>Show/Hide products</button>
            {props.children}
            <button style={btn} onClick={auth.login}>Login</button>
            </div>
    )
};

export default Main;