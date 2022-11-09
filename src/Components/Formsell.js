import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Sell.css";
import React,{useState} from "react";
import Axios from 'axios';

import { useUserAuth } from "../Context/UserAuthContext";

function Formsell()
{

  const {user} = useUserAuth();
  const [imageUrl1,setImageurl1]=useState("")
  const [imageUrl,setImageurl]=useState("")
  console.log(imageUrl)
  const [loading,setLoading]=useState(true)
  const [loading1,setLoading1]=useState(true)
  const [image,setImage]=useState("")
  const [image1,setImage1]=useState("")
  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'medcert')
    setLoading(true)
    const res = await fetch("https://api.cloudinary.com/v1_1/dlsikurd1/image/upload",
        {
            method: 'POST',
            body: data
        })

    const file = await res.json()   
    console.log(file)
    console.log(file.url)
    setImageurl(file.url)
    setImage(file.secure_url)
    setLoading(false)

}

const uploadImage1 = async e => {
  const files = e.target.files
  const data = new FormData()
  data.append('file', files[0])
  data.append('upload_preset', 'medcert')
  setLoading1(true)
  const res = await fetch("https://api.cloudinary.com/v1_1/dlsikurd1/image/upload",
      {
          method: 'POST',
          body: data
      })

  const file = await res.json()   
  console.log(file)
  console.log(file.url)
  setImageurl1(file.url)
  setImage1(file.secure_url)
  setLoading1(false)

}
    const [ownername,setownername]=useState("");
    const [petType,setpetType]=useState("");
    const [BreedType,setBreedType]=useState("");
    const [Age,setAge]=useState("");
    const [Gender,setGender]=useState("");
    const [Landmark,setLandmark]=useState("");
    const [District,setDistrict]=useState("");
    const [Pincode,setPincode]=useState(0);
    const [State,setState]=useState("");
    console.log(user);
    const create =() => {
        
        Axios.post("https://petshop.herokuapp.com/insert", {
            emailid:user.email,
            ownername:ownername,
            petType:petType,
            BreedType:BreedType,
            Age:Age,
            Gender :Gender,
            medcert:imageUrl,
            photo:imageUrl1,
            Landmark :Landmark,
            District :District,
            Pincode:Pincode,
            State:State,
        })
    };

   
    return(
      <>
        <Form className=' SellPage'>
            
            
                <div className="cardc sm">
                    <div className="card ">
                    <span style={{color:"white",backgroundColor:"black",padding:"10px"}}><center><b >Pet Details</b></center></span>
        
                <Form.Group className="m-2" controlId="formBasicText">
                 <Form.Label className="m-2">Owner Name</Form.Label>
                 <Form.Control type="text"  required={true} placeholder="Only Alphabets and numbers with atleast 8 characters" onChange={(event) => { setownername(event.target.value); }} />
                </Form.Group>
                <Form.Group className="m-2" controlId="formBasicText">
                 <Form.Label className="m-2">Pet Type</Form.Label>
                 <Form.Control type="text"  required={true} placeholder="Ex: Dog , Cat" onChange={(event) =>{setpetType(event.target.value);}} />
                 </Form.Group>
                 <Form.Group className="m-2" controlId="formBasicText">
                 <Form.Label className="m-2">Breed Type</Form.Label>
                 <Form.Control type="text"  required={true} placeholder="Ex: German Shepherd , Labrador" onChange={(event) =>{setBreedType(event.target.value);}} />
                 </Form.Group>
                 <Form.Group className="m-2 " controlId="formBasicText">
                 <Form.Label className="m-2">Pet's Age</Form.Label>
                 <Form.Control type="text"  required={true} placeholder="Ex : 6 months , 1 year 2 months" onChange={(event) => { setAge(event.target.value); }} />
                </Form.Group>

                 <Form.Group className='ml-2'>
                    <Form.Label className='ml-2'>Pet's Gender</Form.Label>
                    <div key={`inline-radio`} className="ml-2">
          <Form.Check
            inline
            label="Male"
            name="gender"
            type="radio"
            value="Male"
            id={`inline-radio-1`}
            onClick={(event) =>{setGender("Male");}}
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            type="radio"
            value="Female"
            id={`inline-radio-2`}
            onClick={(event) =>{setGender("Female");}}
          />
         
        </div>
        </Form.Group>              
                
                </div>
                
                </div>
                <div className="cardc">
                    <div className='card'><span style={{color:"white",backgroundColor:"black",padding:"10px"}}><center><b >Upload Files</b></center></span>
                <Form.Group controlId="formFile" className="m-3">
                <Form.Label>Medical Certificate</Form.Label>
                <Form.Control type="file" onChange={uploadImage}/>
                {
          loading ?(<>
            <br></br>
            <h5 style={{textAlign:"center"}}>Loading ...</h5>
            </>
          ):
          (<>
            <br></br>
           <img alt="." src={image} style={{width:'300px',height:'150px',marginLeft:"210px"}}/>
           </>
          )
          
        }
                </Form.Group>
                
                

                <Form.Group controlId="formFile" className="m-3">
                <Form.Label>Pet's Photo</Form.Label>
                <Form.Control type="file" onChange={uploadImage1} />
                {
          loading1 ?(<>
            <br></br>
            <h5 style={{textAlign:"center"}}>Loading ...</h5>
            <br></br>
            </>
          ):
          (<>
            console.log(image),
            <br></br>
              <img alt="." src={image1} style={{width:'300px',height:'150px',marginLeft:"210px"}}/>
              </>
           
          )
          
        }
                </Form.Group>
                </div>
                <div className="sm-4 mt-5 ">
                <div className='card'>
                <span style={{color:"white",backgroundColor:"black",padding:"10px"}}><center><b >Location</b></center></span>
                <Form.Group className="m-2" controlId="formBasicText">
                 <Form.Label className="m-2">Landmark</Form.Label>
                 <Form.Control type="text"  required={true} placeholder="Ex : Near  XYZ  Park , Near  Govt.  Hospital" onChange={(event) => { setLandmark(event.target.value); }} />
                </Form.Group>

                <Form.Group className="m-2" controlId="formBasicText">
                 <Form.Label className="m-2">State</Form.Label>
                 <Form.Control type="text"  required={true} placeholder="Ex : Tamil Nadu" onChange={(event) => { setState(event.target.value); }} />
                </Form.Group>

                <Form.Group className="m-2" controlId="formBasicText">
                 <Form.Label className="m-2">District</Form.Label>
                 <Form.Control type="text"  required={true} placeholder="Ex : Erode" onChange={(event) => { setDistrict(event.target.value); }} />
                </Form.Group>

                <Form.Group className="m-2" controlId="formPincode">
                 <Form.Label className="m-2">Pincode</Form.Label>
                 <Form.Control type="pincode"  required={true} placeholder="Ex : 600028" onChange={(event) => { setPincode(event.target.value); }} />
                </Form.Group>
                </div></div>    
            </div>
           
            <center>
            <Form.Group className='m-3 ' >
                    
                    <div key={`inline-checkbox`} className="ml-2">
          <Form.Check
            inline
            label="I hereby declare that all the details are correct"
            name="gender"
            type="checkbox"
            
          />
           </div>
           
        </Form.Group>
            </center>
            
            <div>
           <center><Button variant="success" type="submit" size="lg" onClick={create}>
        Create
      </Button></center>
           </div>

        </Form>
        
        </>
    );
}

export default Formsell;