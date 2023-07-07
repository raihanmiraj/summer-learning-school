import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import PricingAdmission from '../../Component/PricingAdmission/PricingAdmission';
import PopularClassesCard from '../../Component/PopularClassesCard/PopularClassesCard'; 
import InstrumentGallery from '../../Component/InstrumentGallery/InstrumentGallery';
import ClassesCard from '../../Component/ClassesCard/ClassesCard';
import PopularClassesComponent from '../../Component/HomePageComponents/PopularClassesComponent/PopularClassesComponent';
import PopularInstructor from '../../Component/PopularInstructor/PopularInstructor';
 

import { Fade, Zoom,Slide } from "react-awesome-reveal";

 
const HomePage = ({setTitle}) => {
  const [loading, setLoading] = useState(true)
const [toyData, setToyData] = useState(null); 
  useEffect(() => {
    if (loading) {
      setTitle("Homepage")
      setLoading(false)
    }


  }, []);

 

  return (


    <> 


 
<Slide>
<PopularClassesComponent/>
</Slide>

<PopularInstructor/>
 <Zoom>
 <InstrumentGallery/>
    
 </Zoom>

     
    </>



  );
}

export default HomePage;
