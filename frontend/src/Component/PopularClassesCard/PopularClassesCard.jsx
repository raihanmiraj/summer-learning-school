import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';

const PopularClassesCard = ({data , disablebtn}) => {
  const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged , isAdmin, isInstructor,userData, setUserData,handleToggle,dark}  = useContext(AuthContext);
  return (
      <>
     <div className={ `   px-4 py-3 rounded-lg`}>
        <div class="relative">
          <div class="relative h-72 w-full overflow-hidden rounded-lg">
            <img src={data.image} alt="" class="h-full w-full object-cover object-center"/>
          </div>
          <div class="relative mt-4">
            <h3 class="text-sm font-medium  ">{data.classname} ({data.enrolledstudents} Enrolled)</h3>
            <p class="mt-1 text-sm  ">By {data.instructorname} ({data.availableseat} seat left)</p>
          </div>
          <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
            <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
            <p class="relative text-lg font-semibold text-white">${data.price}</p>
          </div>
        </div>
        
      </div>        
      </>
  );
}

export default PopularClassesCard;
