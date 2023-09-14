import { createContext,useReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return { admin: action.payload}
        case 'LOGOUT': 
            return { admin: null}
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(authReducer, {
        admin: null
    })
}