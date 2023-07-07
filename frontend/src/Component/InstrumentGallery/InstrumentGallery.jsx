import React from 'react';

const InstrumentGallery = () => {
    return (
        <>
           <div className="mx-auto container flex justify-center items-center py-12 px-6  md:px-[8%]   mt-20">
  {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
  <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
    <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
      <div>
        <p className="text-3xl xl:text-4xl font-semibold leading-9   dark:text-white">
          Introduce Slash
        </p>
      </div>
      <div className="mt-4 lg:w-4/5 xl:w-3/5">
        <p className="text-base leading-6  dark:text-white">
        Slash: The Legendary Guitar Virtuoso of Guns N' Roses, known for his iconic riffs and soulful solos, captivating audiences with his unparalleled rock and roll energy.
        </p>
      </div>
      <div className="mt-16 w-full">
        <button className="px-4 bg-gray-900 dark:bg-white dark:text-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700 focus:ring-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 dark:hover:bg-gray-100">
          <p className="text-xl font-medium leading-5 ">See More</p>
          <svg
            className="dark:text-gray-900"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66663 16H25.3333"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 21.3333L25.3333 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 10.6667L25.3333 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

    {/* <img src="https://i.ibb.co/4ZjjvLW/Slash-live-in-London-2022-Cropped.jpg" alt="Slash-live-in-London-2022-Cropped" border="0">
<img src="https://i.ibb.co/NYXG3Kg/slash-february-2022.jpg" alt="slash-february-2022" border="0">
<img src="https://i.ibb.co/5GFC3dz/af4cd9c1-a2e2-4a91-8d15-5b4e615befa2-MAIN-Slash-Solo-Shot-2021-22.webp" alt="af4cd9c1-a2e2-4a91-8d15-5b4e615befa2-MAIN-Slash-Solo-Shot-2021-22" border="0"> */}




    <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
      <div className="">
        <img
          className="hidden w-[300px] lg:block rounded-lg"
          src="https://i.ibb.co/4ZjjvLW/Slash-live-in-London-2022-Cropped.jpg"
          alt="sofa"
        />
        <img
          className="w-80 sm:w-auto lg:hidden rounded-lg"
          src="https://i.ibb.co/4ZjjvLW/Slash-live-in-London-2022-Cropped.jpg"
          alt="sofa"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
        <div>
          <img
            className="hidden lg:block w-80 rounded-lg"
            src="https://i.ibb.co/NYXG3Kg/slash-february-2022.jpg"
            alt="chairs"
          />
          <img
            className="w-80 sm:w-auto lg:hidden  rounded-lg"
            src="https://i.ibb.co/5GFC3dz/af4cd9c1-a2e2-4a91-8d15-5b4e615befa2-MAIN-Slash-Solo-Shot-2021-22.webp"
            alt="chairs"
          />
        </div>
        <div>
          <img
            className="hidden lg:block w-80 rounded-lg"
            src="https://i.ibb.co/5GFC3dz/af4cd9c1-a2e2-4a91-8d15-5b4e615befa2-MAIN-Slash-Solo-Shot-2021-22.webp"
            alt="chairs"
          />
          <img
            className="w-80 sm:w-auto lg:hidden rounded-lg"
            src="https://i.ibb.co/NYXG3Kg/slash-february-2022.jpg"
            alt="chairs"
          />
        </div>
      </div>
    </div>
  </div>
</div>
 
        </>
    );
}

export default InstrumentGallery;
