import React, { useEffect, useState, createContext, useContext } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthContextProvider';
import Spinner from '../Spinner/Spinner';
import InstructorCard from '../../Pages/InstructorListPages/InstructorCard';
 
 

 
 

const PopularInstructor = () => {
    const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged ,toastPush}  = useContext(AuthContext);
    
   const [loading, setLoading] = useState(true)
    const [renderData, setRenderData] = useState(null);
    const [UsersData, setUsersData] = useState(null)
    const [currentID, setCurrentID] = useState(null)
    const [feedbackdetails, setFeedbackdetails] = useState(null)
    const [feedbackclassid, setfeedbackclassid] = useState(null)
    const [progresssending, setprogresssending] = useState(false)
   
    useEffect(() => {
        if (loading) {
          axios.get(`/instructor/all`)
                .then(response => {
                    let data = response.data
                    setUsersData(data)
                    setRenderData(data)
                    setLoading(false)

                })
        }
    }, []);
    
 
  
    return (
        <>
             <div className="bg-transparent"> 
             <div class="mx-auto max-w-2xl py-0 px-4 sm:py-0 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-xl font-bold ">Popular Instructor</h2>
    <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">  {loading ? <>
                <Spinner />
              </> : <>
                {renderData.map(e => {
                  return <>
              <InstructorCard data={e} />
                  </>
                })}
              </>}
    
      </div>
    </div>
  </div>
        </>
    );
}

export default PopularInstructor;
