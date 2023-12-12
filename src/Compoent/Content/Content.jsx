"use client"
import Container from "../Container/Container";
import style from "@/Compoent/Content/Content.module.css"
import Space from "../space/Space";
import a from "next/link";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
     

const Contnt = ({blog}) =>{
const[primear,setprimear] =useState(blog.description)
   return(
        <div>

<Space />

<div className={style.content}>
<div className={style.img} > <img src={blog.photo_url} width={322} /> </div>
<p className={style.title}> Title: {blog.description}</p>
<p className={style.subtitl}>Caturage {blog.category} 
<button type="button" class="btn btn-default">Enter</button>
<button type="button" class="btn btn-primary">Enter</button>
<button type="button" class="btn btn-danger">Enter</button>

 </p>
<div className={style.footer} >
    <a href={blog.content_html}><button  >Read Article</button>
</a>
    <span> Author {blog.title}</span>

</div>
</div>


         </div>
    )}
   ; export default Contnt