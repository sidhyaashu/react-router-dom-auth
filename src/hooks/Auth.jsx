import { createContext,useContext,useReducer} from "react";

/* STORE */
const initialState ={auth:false}
const authContext = createContext(initialState)

/* REDUCER */
export const reducer =(state,action)=>{
    switch(action.type){
        case 'LOGIN':return {auth:true};
        case 'LOGOUT':return {auth:false};
        default: throw new Error()
    }
}

/* PROVIDER */

export const AuthProvider=({children})=>{
    const [authed,dispatch] = useReducer(reducer,initialState)

    return(
        <authContext.Provider value={[authed,dispatch]} >
        {children}
        </authContext.Provider>
    )
}


/* Own Auth Consumer */

export const AuthConsumer=()=>{
    return useContext(authContext)
}