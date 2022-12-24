import React from "react";
import { useSelector } from "react-redux";

import './Users.css'
import LeftSidebar from  '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'




const Users = () => {
    
    const user = useSelector((state) => (state.currentUserReducer))


    return(

            <div className="home-container-1">
                <LeftSidebar/>
            <div className="home-container-2">
                {
                    user===null?
                    <h1 style={{fontWeight: "400"}}>Please!! LogIn or SignUp  See to all Users</h1>:
                    <>
                     <h1 style={{fontWeight: "400"}}>Users</h1>
                     <UsersList /> 
                     </>
                }
            </div>
            </div>

    )
}

export default Users