import { useState } from "react";
import Authcontext from "./authcontext";

const Authstate=(props)=>{
    const [Auth,setAuth]=useState({value:"false"});

    return(
        <Authcontext.Provider value={Auth}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default Authstate;