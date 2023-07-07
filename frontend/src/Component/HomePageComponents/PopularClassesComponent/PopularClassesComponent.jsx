import React, { useContext, useEffect, useState } from 'react';
import PopularClassesCard from '../../PopularClassesCard/PopularClassesCard';
import axios from 'axios';
import Spinner from '../../Spinner/Spinner';
import ClassCard from '../../../Pages/ClassesListPage/ClassCard';
import { AuthContext } from '../../../Provider/AuthContextProvider';
 

const PopularClassesComponent = () => {
    const [loading, setLoading] = useState(true)
    const [popularClassesData, setPopularClassesData] = useState(true)
    const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged , isAdmin, isInstructor,userData, setUserData,handleToggle,dark}  = useContext(AuthContext);
    useEffect(() => {
       axios.get("/popularclasses")
    .then(response=>{
        setPopularClassesData(response.data)
        setLoading(false)
    })
    }, []);
    return (
        <>
 
<div class="">
  <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class={`text-xl font-bold  ${dark?'text-white':'text-gray-900'}`}>Classes List</h2>
    <div class="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-2">
    {loading ? <>
                <Spinner />
              </> : <>
                {popularClassesData.map(e => { 
                  return <>
              <PopularClassesCard data={e} />
                  </>
                })}
              </>}
    
   
      

     
    </div>
  </div>
</div>
        </>
    );
}

export default PopularClassesComponent;
