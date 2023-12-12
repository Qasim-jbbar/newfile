"use client"
import Link from "next/link";
// import { PiPatreonLogoFill } from "react-icons/pi";
import IconButton from "../IconButton/IconButton";
import stylee from "@/Compoent/Header/header.module.css"

const Header = () =>{
    return(
      
    <div className={stylee.Home_parent}>
      <nav className={stylee.Home}>
      <div className={stylee.container}>
      <div className={stylee.content}>
   
        <h1> <IconButton /></h1>
   
        <ul >
        <li style={{position: "sticky", left: "-247px", color: "black" }}>
  Search: <input type="search" placeholder="search.." id="" />
</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Help</a></li>
            </ul>
  
       </div>
        </div>
      </nav
      ><hr/>
      
    
    </div>
    )
};
export default Header;