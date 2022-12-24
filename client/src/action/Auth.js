import * as api from "../Api"
import { setCurrentUser } from "./currentUser"

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.signUp(authData)
        dispatch({ type:'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    }catch(error){
        console.log(error);
    }
}

//my code
export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type:'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    }catch(error){
        console.log(error);
    }
}



// export const login = (authData, navigate) => async (dispatch) => {
//     try {
//         const { data } = await api.logIn(authData)
//         dispatch({ type: 'AUTH', data})
//         dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
//         navigate('/')
//     } catch (error) {
//         console.log(error)
//     }
// }