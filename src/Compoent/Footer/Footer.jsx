import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import IconButton from "../IconButton/IconButton";
import stylee from "@/Compoent/Footer/Footer.module.css"

const Footer =() =>{

    return(
        <div className={stylee.Home_parent}>
          <nav className={stylee.Home}>
          <div className={stylee.container}>
          <div className={stylee.content}>
      
            <h1><IconButton /></h1>
            <ul >
                <li><a href="https://www.youtube.com/"><FaFacebook /></a></li>
                <li><a href="https://www.instagram.com/"><FaXTwitter /></a></li>
                <li><a href="https://twitter.com/"><FaInstagram /></a></li>
                </ul>
      
           </div>
            </div>
      
          </nav
          ><hr/>
          
        
        </div>
        )
};
export default Footer;