import React from "react";
import "./Footer.css";

function Footer(){

  return (
  <div><div className="footer">
      <div className="div1 a">
       <img src="https://tinkeringlab.iitr.ac.in:8080/media/logo/logo.png" alt="lab logo" />
       <img src="https://www.iitr.ac.in/departments/CSE/uploads/Misc/IITR_logo/IITR_new_logo_color.jpg" alt="iit logo" />
       <div className="div12">
          <h1>For institution details visit</h1>
          <a href="www.iitr.ac.in">www.iitr.ac.in</a>
       </div>       
      </div>
       <div className="a">
           <h2>Follow</h2>
           <p>Linked In</p>
           <p>Facebook</p>
       </div>
       <div className="a">
           <h2>
               Projects
           </h2>
           <p>OnGoing</p>
           <p>Completed</p>
       </div>
       <div className="a">
           <h2>
              Help
           </h2>
           <p>Contact Us</p>          
       </div>
       <div className="a">
           <h2>
             Visit
           </h2>
           <p href="#">Tinkering laboratory,<br/>
Hafiz Mohd.Ibrahim Building,<br/>
Opposite Security office,<br/>
Indian Institute of Technology Roorkee,<br/>
Roorkee, Haridwar district,<br/>
Uttarakhand, India<br/>
PIN - 247667</p>          
       </div>  
       </div>
       <div className="copyright">
           <p>Crafted with ❤️ by Design Studio & Developed by Tinkering Lab Students' Body</p>
           <p>Copyright 2021 </p>
       </div>     
  </div>)
}
export default Footer;