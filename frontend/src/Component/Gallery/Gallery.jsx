import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryCard from './GalleryCard';
import Spinner from '../Spinner/Spinner';
import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
    const [loading, setLoading] = useState(true);
    const [galleryData, setGalleryData] = useState(null);
    useEffect(() => {
      AOS.init();
       if(loading){
        axios.get("/gallery")
        .then(response=>{
            setGalleryData(response.data);
            setLoading(false)
        })
       }
    }, []);
    return (
        <>
        
          <section className='space-y-8 mt-20'  >
  <h1 className='text-4xl font-bold text-center'>Gallery</h1>

<div className='flex justify-center'>
    <p className='w-[90%] md:w-[60%] text-center font-semibold'>
    The toy car is a stylish and durable miniature replica of a real car, designed for endless fun and imaginative play. Its vibrant colors and realistic details make it perfect for zooming around on any surface, providing hours of exciting adventures.
    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-[3%] md:px-[10%]">
  {loading?<>
  <Spinner/>
  </>:<>
  {galleryData.map(e=>{
     return <>
     <GalleryCard key={e.img} img={e.img}/> 
     </>
  })}
  </>}
</div>
</section>   

        </>
    );
}

export default Gallery;
