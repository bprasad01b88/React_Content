import React from "react";
import { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./Navbar.css";
// import MenuIcon from "@material-ui/icons/Menu";


export default function Header() {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggleNav, setToogleNav] = useState(true);
  //If small screen detected at first run then do not display any nav headers by default

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if(window.innerWidth<=507)setToogleNav(false);
    else
    setToogleNav(true);
  }, []);

  const handleResize=()=>{
    setWindowWidth(window.innerWidth)
  }

  return (
    <>
    {windowWidth<=507?
    <div id="WindowWidth<=507">
      <nav
        role="navigation"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "10px",
          paddingBottom: "100px",
        }}
      >
        <div class="logoAnd">
          <img
            class="img"
            src="https://i.ibb.co/DpH0HMd/High-Resolution-02.jpg"
            style={{
              width: "6rem",
              padding: "2%",
              marginLeft: "3vw",
              marginRight: "1vw",
            }}
          />
           {/* {windowWidth <= 507 ?  <div><X style={{cursot:"pointer",fontSize:"60px",marginLeft:"6vw"}} onClick={()=>{setToogleNav(!toggleNav)}} /> </div>: null} */}
        </div>
        </nav>
       { toggleNav?
        <ul className="navHeader">
          <li>
            <a  href="/home" class="links">
              Home
            </a>
          </li>
          <li>
            <a href="/aboutUs" class="links">
              About Us
            </a>
            <ul>
              <li>
                <a class="temp" href="/aboutUs">
                  About anziam
                </a>
              </li>
              <li>
                <a href="/aboutUs">Vision and mission</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/products1" class="links">
              Products
            </a>
            <ul>
          <li>
              <a href="products1">calcium Alginate </a>
            </li>
            <li>
              <a href="products2">reinforce calcium Alginate</a>
            </li>

            <li>
              <a href="products3">reinforce silver Alginate </a>
            </li>
            <li>
              <a href="products4">cmc</a>
            </li>
          </ul>
          </li>

          <li>
            <a href="" class="links">
              Latest
            </a>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/team" class="links">
              Team
            </a>
          </li>
          <li>
            <a href="#" class="links">
              Innovation
            </a>
          </li>
          <li>
            <a href="contactUs" className="contact" class="links" style={{marginBottom:"10vh"}}>
              Contact Us
            </a>
          </li>
        </ul>
       :null}
       </div>
       :
       <div id="WindowWidth>507">
      <nav
        role="navigation"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "10px",
          paddingBottom: "150px",
        }}
      >
      
        
        <div class="logoAnd">
          
          <img
            class="img"
            src="https://i.ibb.co/DpH0HMd/High-Resolution-02.jpg"
            style={{
              width: "6rem",
              padding: "2%",
              marginLeft: "3vw",
              marginRight: "1vw",
            }}
          />
          <pre style={{fontSize:"15px",color:"grey",fontWeight:"bolder",margin:"0px 14px"}}>SUSTAINABLE HEALTHCARE <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                        SOLUTIONS</pre>
          
           {/* {windowWidth <= 507 ?  <div><MenuIcon style={{cursot:"pointer",fontSize:"60px",marginLeft:"6vw"}} onClick={()=>{setToogleNav(!toggleNav)}} /> </div>: null} */}
        </div>
       { toggleNav?
        <ul className="navHeader">
          <li>
            <a  href="/home" class="links">
              Home
            </a>
          </li>
          <li>
            <a href="aboutUs" class="links">
              About Us
            </a>
            <ul>
              <li>
                <a class="" href="/aboutUs">
                  About anziam
                </a>
              </li>
              <li>
                <a href="/aboutUs">Vision and mission</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="products1" class="links">
              Products
            </a>
            <ul>
          <li>
              <a href="products1">calcium Alginate </a>
            </li>
            <li>
              <a href="products2">reinforce calcium Alginate</a>
            </li>

            <li>
              <a href="products3">reinforce silver Alginate </a>
            </li>
            <li>
              <a href="products4">cmc</a>
            </li>
          </ul>
          </li>

          <li>
            <a href="#" class="links">
              Latest
            </a>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/team" class="links">
              Team
            </a>
          </li>
          <li>
            <a href="#" class="links">
              Innovation
            </a>
          </li>
          <li>
            <a href="/contactUs" className="contact" class="links">
              Contact Us
            </a>
          </li>
        </ul>
       :null}
      
        </nav>
       </div>}
    </>

  );
}
