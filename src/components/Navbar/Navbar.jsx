import React from "react";
import MenuItem from "./MenuItem";
import "./Navbar.css";

function Navbar(){
    const [navbar ,setNavbar]=React.useState(true);
    function changeBackground(){
        console.log(window.scrollY);
        if(window.scrollY === 0){
            setNavbar(true);
        }
        else if(window.scrollY !==0){
            setNavbar(false);
        }
        
        console.log(navbar);
    }
    window.addEventListener("scroll",changeBackground);
    return(
          <nav className={navbar?"nav":"active"}>
              <div className={navbar?"logo":"activeLogo"}>
                  <span>TINKERING LAB</span>
              </div>
              <div>
                  <ul>
                  {MenuItem.map((item,index)=>{
                      return(<li key={index}><a className={item.cName} href={item.url} > {item.title} </a></li>)
                  })}                     
                  </ul>
              </div>
          </nav>
    );

}

export default Navbar;