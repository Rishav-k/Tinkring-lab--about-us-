import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Banner from "./Banner/Banner.jsx";
import Vision from "./Vision/Vision.jsx";
import Team from "./Team/Team.jsx";
import Contact from "./Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";

import './App.css';

function App() {
  return (<div>
     <div className="navbar">
     <Navbar  />
     </div>  
     <Banner />
     <Vision />
     <Team />
     <Contact />
     <Footer />
    </div>
  )
}

export default App;
