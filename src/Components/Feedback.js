import "./Home.css";

function Feedback()
{
    return(
        <div >
            <img src="https://www.platinumcopiers.com/website/wp-content/uploads/2020/12/shutterstock_1490127344-scaled.jpg" alt="fb" width="65%" height="600em"/>
            {/* <img src="https://blog.bonus.ly/hubfs/feedback-examples-featured-01-2.png" alt="fb" width="65%" height="600em"/> */}
            <div className="centered fform">
                <h3 style={{textDecoration:"underline"}}>Feedback Form</h3>
                <label>Enter your name:</label>
                <br></br>
                <input type="text"></input>
                <br></br>
                <br></br>
                <label>Enter your Feedback</label>
                <br></br>
                <textarea rows="5" cols="45" style={{resize:"none"}}></textarea>
                <br></br>
                <br></br>
                <button className="btn btn-success btn-lg"><a href="mailto:dhanushk.20it@kongu.edu?&subject:Feedback&body:feedback"  style={{textDecoration:"none",color:"white"}}>Submit</a></button>
                
            </div>
        </div>
    )
}

export default Feedback;