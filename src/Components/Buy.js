import React, { useState } from "react";
import Axios from "axios";
import "./Home.css";
import { Link} from "react-router-dom";




function Buy() {
    
   
    const [sell, setSell] = useState([]);
  

   




    Axios.get("https://petshop.herokuapp.com/show", {

    }).then((res) => {
        const data = res.data
        setSell(data)


    });
    const Body = sell.map((val, key) => {
        
        return (

<div >
            <div className="card dhan ml-5" key={key} >
                <img src={val.photo} alt="petp" width="100%" height="250px"></img>
                <hr></hr>
                <h6>Pet Type : {val.petType}</h6>
                <h6>Breed Type : {val.BreedType}</h6>
                <h6>Gender : {val.Gender}</h6>
                <Link to={`/log/${val._id}`} style={{textDecoration:"none",color:"white"}}><button className="btn btn-primary ">See more</button></Link>
                
            </div>
            <div>
                
            </div>
 </div>
            
        )
    })
  
    return (
        <div>
            <br></br>
            <h3 style={{ textAlign: "center", fontFamily: "gemunu Libre", fontWeight: "bold" }}>Buy Pets</h3>
            <br></br>
            <div className="flexing">{Body}</div>
            
        </div>
    );
}

export default Buy;