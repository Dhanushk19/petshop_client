import React from "react";
import "./App.css";

import Login from "../src/Components/Login";
import {
	BrowserRouter ,
	Routes,
	Route,
 
} from 'react-router-dom';
import Nav from "../src/Components/Nav.js";
import Home from "../src/Components/Home.js";
import Buy from "../src/Components/Buy.js";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import Sell from "../src/Components/Sell.js";
import Signup from "./Components/Signup";
import Feedback from "./Components/Feedback";
import Log from "./Components/Log";


function App(){
  return(
    <BrowserRouter>
    <UserAuthContextProvider>
    <Routes>
      <Route path="/" element={<Nav/>}>
      <Route index element={<Home/>} /> 
      <Route path="/sell" element={<ProtectedRoute><Sell/></ProtectedRoute>}/>
      <Route path="/buy" element={<ProtectedRoute><Buy/></ProtectedRoute>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/log/:id' element={<Log/>}/>
      <Route path='/feedback' element={<Feedback/>}></Route>
      </Route>
    </Routes>
    </UserAuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
