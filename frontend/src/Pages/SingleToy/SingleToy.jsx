import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleToy = ({setTitle}) => {
    const [loading, setLoading] = useState(true)
    const [toyData, setToyData] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        if (loading) {
            axios.get(`/toy/${id}`)
                .then(response => {
                    setLoading(false)
                    setToyData(response.data)
                    setTitle(response.data.toyname)
                })
                .catch(err => {
                    console.log(err)

                   
                })
        }
    }, []);
    return (
        <>
            {
                loading ? <></> : <>
                    <section className="py-20 overflow-hidden bg-white font-poppins dark:bg-gray-800">
                        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full px-4 md:w-1/2 ">
                                    <div className="sticky top-0 z-50 overflow-hidden bg-green-200 px-12 rounded-lg">
                                        <div className="relative mb-6 lg:mb-10" style={{ height: 450 }}>
                                            <img
                                                src={toyData.img}
                                                alt=""
                                                className="object-contain w-full h-full "
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2 ">
                                    <div className="lg:pl-20">
                                        <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                                            <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                                            {toyData.category}
                                            </span>
                                            <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                                                {toyData.toyname}
                                            </h2>
                                            <div className="flex flex-wrap items-center mb-6 gap-2">
                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                            </svg> 
                                                           <span className='text-gray-700 dark:text-gray-400'> 4.2</span>
                                            </div>
                                            <p className="   text-gray-700 dark:text-gray-400">
                                            {toyData.description}
                                            </p>
                                     
                                           
                                            
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                        <p className=" text-xl font-semibold text-gray-700 dark:text-gray-400 ">
                                                <span>Price : ${toyData.price}</span>
                                                 
                                            </p>
                                            <p className=" text-xl font-semibold text-gray-700 dark:text-gray-400 mb-5">
                                                <span>Quantity : {toyData.quantity}</span>
                                                 
                                            </p>
                                            <p className="   font-semibold text-gray-700 dark:text-gray-400 ">
                                                <span>Posted By : {toyData.seller}</span>
                                                 
                                            </p>
                                            <p className="   font-semibold text-gray-700 dark:text-gray-400 ">
                                                <span>Contact : {toyData.selleremail}</span>
                                                 
                                            </p>
                                        </div>
                                        
                                
                                        <div className="flex flex-wrap items-center mt-12">
                                            <div className="mb-4 mr-4 lg:mb-0">
                                                <div className="w-28">
                                                    <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                                        <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                                            <span className="m-auto text-2xl font-thin">-</span>
                                                        </button>
                                                        <input
                                                            type="number"
                                                            className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                                            placeholder={1}
                                                        />
                                                        <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                                            <span className="m-auto text-2xl font-thin">+</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4 mr-4 lg:mb-0">
                                                <button className="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                                                    Buy Now
                                                </button>
                                            </div>
                                            <div className="mb-4 mr-4 lg:mb-0">
                                                <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-cart"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="mb-4 lg:mb-0">
                                                <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className=" bi bi-heart"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }

        </>
    );
}

export default SingleToy;
