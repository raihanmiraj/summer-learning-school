import React from 'react';

const GalleryCard = ({img}) => {
    return (
        <>
 <div className='p-12 bg-gray-200 rounded-lg' >
    <img
      className="h-auto max-w-full rounded-lg  "
      src={img}
      alt=""
    />
  </div>


           
        </>
    );
}

export default GalleryCard;
