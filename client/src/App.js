import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllquestion } from "./action/Question";
import {fetchAllusers} from './action/Users'


function App() {
   
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllquestion())
    dispatch(fetchAllusers())
  },[dispatch])


  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
