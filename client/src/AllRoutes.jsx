import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestions/AskQuestion";
import DisplayQuestion  from "./pages/Questions/DisplayQuestion";
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from "./pages/UserProfile/UserProfile";

const AllRoutes = () =>{
    return(
        <>

        
            <Routes>
            <Route exect path='/' element={<Home/>}/>
            <Route exect path='/Auth' element={<Auth/>}/>
            <Route exect path='/Questions' element={<Questions/>}/>
            <Route exect path='/AskQuestion' element={<AskQuestion/>}/>
            <Route exect path='/Questions/:id' element={<DisplayQuestion/>}/>
            <Route exect path='/Tags' element={<Tags/>}/>
            <Route exect path='/Users' element={<Users/>}/>
            <Route exect path='/Users/:id' element={<UserProfile/>}/>
            </Routes>

            
        </>
    )
}


export default AllRoutes