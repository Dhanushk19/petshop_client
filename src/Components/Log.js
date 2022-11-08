import { Link } from "react-router-dom";
import React from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { useUserAuth } from "../Context/UserAuthContext";

function Log() {
    const { user } = useUserAuth();
    const { id } = useParams()

    const [sell, setSell] = React.useState([]);
    Axios.get(`https://petshop.herokuapp.com/more/${id}`, {

    }).then((res) => {
        const data = res.data
        setSell(data)
    });



    const handle = () => {
        Axios.post("https://petshop.herokuapp.com/delete",
            {
                emailid: sell.emailid,
                petType: sell.petType,
                breedType: sell.breedType,
                photo: sell.photo,
            })
    };

    return (
        <div style={{ fontFamily: "Gemunu Libre" }}>
            <center><h3>Pet Details</h3></center>
            <table className="table table-bordered">
                <tr>
                    <th>Pet Type:</th>
                    <td>{sell.petType}</td>
                </tr>
                <tr>
                    <th>Breed Type:</th>
                    <td>{sell.BreedType}</td>
                </tr>
                <tr>
                    <th>Owner Name:</th>
                    <td>{sell.ownername}</td>
                </tr>
                <tr>
                    <th>Email Id</th>
                    <td>{sell.emailid}</td>
                </tr>
                <tr>
                    <th>Pet Age</th>
                    <td>{sell.Age}</td>
                </tr>
                <tr>
                    <th>Pet Gender:</th>
                    <td>{sell.Gender}</td>
                </tr>
                <tr>
                    <th>Landmark:</th>
                    <td>{sell.Landmark}</td>
                </tr>
                <tr>
                    <th>District</th>
                    <td>{sell.District}</td>
                </tr>
                <tr>
                    <th>Pincode:</th>
                    <td>{sell.Pincode}</td>
                </tr>
                <tr>
                    <th>State:</th>
                    <td>{sell.State}</td>
                </tr>

            </table>

            <h3 style={{ textAlign: "center" }}>Pet Photo</h3>
            <center><img src={sell.photo} alt="petimage" width="40%" height="25%" /></center>
            <br></br>
            <br></br>
            <h3 style={{ textAlign: "center" }}>Medical Certificate</h3>
            <center><img src={sell.medcert} alt="petimage" width="40%" height="25%" /></center>
            <br></br>
            <Link to="/buy" style={{ textDecoration: "none", color: "black" }}><button className="btn btn-success btn-lg" style={{ marginLeft: "47%", paddingLeft: "2%", paddingRight: "2%" }}>Back</button></Link>
            <br></br>
            <br></br>
            <center>
                {
                    user.email === sell.emailid ?
                        (
                            <>
                            <Link to="/buy"><button onClick={handle} className="btn btn-danger btn-lg">Delete</button></Link>
                            <br></br>
                            </>
                        ) :
                        (
                            <></>
                        )
                }
            </center>

        </div>



    )
}

export default Log;