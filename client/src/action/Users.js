import * as api from "../Api"

export  const fetchAllusers = () => async (dispatch) => {

    try {
        
        const { data } = await api.fetchAllUsers()
        dispatch({type: 'FETCH_USERS', payload:data})

    } catch (error) {
        console.log(error)
    }

}

export const updateProfile = (id, updateData) => async (dispatch) => {

    try {
        const { data } = await api.updatedProfile(id, updateData)
        dispatch({type: 'UPDATE_CURRENT_USER', payload:data})
    } catch (error) {
        console.log(error)
    }

}