import React from "react";
import {Outlet,Link} from 'react-router-dom';
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";
import "./Nav.css";
function Nav()
{
 
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        // console.log(error.message);
      }
    };  
    console.log(user);  
    return(
        <>
       
        {
            
            user == null ?
            (
          
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0">
  
            <ul className="navbar-nav">
               <li className="navbar" >
                <Link className="navbar-brand" href="#"><h1 style={{fontSize:"50px",marginLeft:"20px"}}>Pet Paradise</h1></Link>
               </li>
                <li className="navbar"  >
                <Link to='/' className="nav-link active"><h2>Home</h2></Link>
                 
                </li>
                <li className="navbar"  >
                 <Link to='/buy' className="nav-link active"><h2>Buy</h2></Link>
                </li>
                <li className="navbar " >
                 <Link to='/sell' className="nav-link active"><h2>Sell</h2></Link>
                </li>
                
                <li className="navbar" >
                 <Link to='/login' className="nav-link active"><button type="button" className="btn btn-success" style={{fontFamily: 'Gemunu Libre',fontSize:"30px",paddingLeft:"20px",paddingRight:"20px"}}>Login</button></Link>
                </li>
                
                
            </ul>
        

           </nav>
        
            ):
            (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0">
  
            <ul className="navbar-nav">
               <li className="navbar" style={{marginLeft:"30px"}}>
                <Link className="navbar-brand" href="#"><h1 style={{fontSize:"50px"}}>Pet Paradise</h1></Link>
               </li>
                <li className="navbar" style={{marginLeft:"100px"}} >
                <Link to='/' className="nav-link active"><h2>Home</h2></Link>
                 
                </li>
                <li className="navbar" style={{marginLeft:"100px"}} >
                 <Link to='/buy' className="nav-link active"><h2>Buy</h2></Link>
                </li>
                <li className="navbar" style={{marginLeft:"100px"}} >
                 <Link to='/sell' className="nav-link active"><h2>Sell</h2></Link>
                </li>
                <li className="navbar" style={{marginLeft:"250px"}} >
                    <h3 style={{fontFamily: 'Gemunu Libre',color:'white'}}>Hello {user && user.email} !</h3>
                </li>
                <li className="navbar" style={{marginLeft:"50px"}}>
                <button type="button" className="btn btn-danger" onClick={handleLogout} style={{fontFamily: 'Gemunu Libre',fontSize:"30px",paddingLeft:"20px",paddingRight:"20px"}}>Logout</button>
                </li>
            </ul>
        

           </nav>
            )
        }
        <Outlet/>
        </>
    );
}

export default Nav;