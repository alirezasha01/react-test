import React from "react";

const Auth = React.createContext({
    auth: false,
    login : () => {}
})

export default Auth