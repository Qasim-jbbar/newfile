"use client"
import Link from 'next/link';
import Header from '@/Compoent/Header/Header';
import Footer from '@/Compoent/Footer/Footer';
import Contnt from '@/Compoent/Content/Content';
import Container from '@/Compoent/Container/Container';
import style from "@/app/page.module.css"
import { useState,useEffect } from 'react';


 const Home =()=> {
  let url="https://random.imagecdn.app/v1/image?&&category=buildings&format";

  
  const [list, setList] = useState([]);

  const fetchData = async () => {
    
   fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
    .then( (response) => response.json())
    .then((data) => {
       
        setList(data.blogs) ;})
     };

  useEffect(() => {
    fetchData();
  }, []);

  
return (
    <div>
<Header/>
<Container >
<img className={style.cover} src={url}alt="photo" width={1200} height={280} />
</Container>



<Container>
  <div className={style.grid}>
    {list.map((blog, li) => (
      <Contnt  key={li} blog={blog} />
    ))}
  </div>
</Container>
<Footer />
  </div>
  
  )
}; export default Home;

