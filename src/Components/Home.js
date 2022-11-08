
import React from "react";
import BCarousel from "./BCarousel";
import "./Home.css";
import { useUserAuth } from "../Context/UserAuthContext";
import { Link} from "react-router-dom";

function Home()
{
  const { user } = useUserAuth();
   
    return(<>
       <div className="car" style={{overflow:"hidden"}}>
            <BCarousel/><br></br>
            <h3 style={{textAlign:"center",fontFamily:"gemunu Libre"}}>Find you a pet and Sell your pet.</h3>
            <br></br>
            
            {
               user!=null ?
               (<>
                <h3 style={{textAlign:"center",fontFamily:"gemunu Libre"}}>Your Feedback is valuable for us</h3>
                <button style={{fontFamily:"gemunu Libre",marginLeft:"45%",marginBottom:"50px"}} className="btn btn-warning btn-lg"><Link to="/feedback" style={{color:"black",textDecoration:"none"}}>Feedback</Link></button>
                
                </>
               ):
               (
                <></>
               )
            }
            
            <br></br>
            <hr></hr>
       </div>
       
     </>
    );
}

export default Home;