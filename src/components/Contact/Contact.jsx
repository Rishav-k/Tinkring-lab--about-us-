import React from "react";
import "./Contact.css";
import Division from "../Division/Division.jsx";

function Contact(){
    return (
        <div>
            <Division name="Contact" />
            <div className="contact">
            <div className="form">
             <form>
                 <h1>Give Your details and we will contact you</h1>
                 <label>NAME</label>
                 <br />
                 <input />
                 <br />
                 <label>EMAIL</label>
                 <br />
                 <input />
                 <br />
                 <label>MESSAGE</label>
                 <br /><br/>
                 <textarea />
                 <br />
                 <button>Submit</button>      
             </form>
            </div>
            <div className="details">
              <div className="adress">
              <span>🏠 Adress</span>
              <p>Tinkering laboratory,<br/>
                   Hafiz Mohd. Ibrahim Building,<br/>
                   Opposite Security office,<br/>
                   IIT Roorkee,<br/>
                   Roorkee, Haridwar district,<br/>
                   Uttarakhand, India<br/>
                   
                   PIN - 247667 </p>

              </div>
              <div className="mail">
              <span>📧Mail</span>
              <p>rethinktinkering@iitr.ac.in</p>
                  
                  </div>
                  <div className="phone">
                  <span>📞Contact</span>
                  <p>+91 1332 286581</p>                 
                  </div>
                  <div className="student-mail">
                  <span>📧Mail (Student Body)</span>
                  <p>tinkeringlab@iitr.ac.in</p>
                  </div>
            </div>

            </div>
        </div>
    )
}
export default Contact;