import React from 'react';

const InstructorCard = ({data , disablebtn}) => {
    return (
        <>
             <div className={data.availableseat == 0 && `bg-red-500`}>
        <div class="relative">
          <div class="relative h-72 w-full overflow-hidden rounded-lg">
            <img src={data.photoURL} alt="" class="h-full w-full object-cover object-center"/>
          </div>
          <div class="relative mt-4">
            <h3 class="text-sm font-medium">{data.name} </h3>
            <p class="mt-1 text-sm ">{data.email}</p>
            <p class="mt-1 text-sm ">{data.role}</p>
          </div>
        
        </div>
         
      </div>      
        </>
    );
}

export default InstructorCard;
