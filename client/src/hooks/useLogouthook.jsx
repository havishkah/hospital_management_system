import { useAuthContext } from "./useAuthContext";
import Cookies from "js-cookie";

export const useLogout = () => {
    const { dispatch }= useAuthContext()

    const logout = () => {
        localStorage.removeItem('admin')
        Cookies.remove('user')

        dispatch({type: 'LOGOUT'})
        
    }

    return {logout}
}