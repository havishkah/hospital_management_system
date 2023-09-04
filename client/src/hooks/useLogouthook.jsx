import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () =>{
        localStorage.removeItem('admin')
        localStorage.removeItem('role')
        
        dispatch({type: 'LOGOUT'})
        
    }

    return { logout }
}