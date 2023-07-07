import React, { useContext, useState } from 'react';
 
import { AuthContext } from '../../Provider/AuthContextProvider';
 import ActiveLink from '../../Component/ActiveLink/ActiveLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const Header = () => {
 
  const [langBtn , setLangBtn] = useState(false)
  const [mobileMenuOpen , setMobileMenuOpen] = useState(false)
  const [dropDownOpen , setDropDownOpen] = useState(false); 
  const [imgDetails, setImgDetails] = useState(false)
  const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged , isAdmin, isInstructor, loading,userData, setUserData,handleToggle,dark}  = useContext(AuthContext);
  

 



 
 

    return (
        <>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/> 
 
      {/* <div className="navbar  px-2 md:px-[5%] z-[999999]">
  <div className="navbar-start"> 
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label> 
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-[#DCE2CB]">
      <li><ActiveLink to="/"> Home</ActiveLink> </li>
      <li><ActiveLink to="/toys"> All Toys</ActiveLink></li>
      <li><ActiveLink to="/mytoys"> My Toys</ActiveLink></li>
          <li><ActiveLink to="/addtoy"> Add Toy</ActiveLink></li> 
        
        <li><ActiveLink to="/blog">Blogs</ActiveLink></li>
      </ul>
    </div> 
   <Link className="normal-case text-xl font-bold" to="/"> <svg
  id="Component_17_3"
  data-name="Component 17 – 3"
  xmlns="http://www.w3.org/2000/svg"
  width="106.39"
  height={51}
  viewBox="0 0 106.39 51"
>
  <g id="Group_1" data-name="Group 1">
    <path
      id="Path_1"
      data-name="Path 1"
      d="M251.727,67.744a2.653,2.653,0,0,1-.378,1.792.781.781,0,0,1-1.135.229c-.693-.587-.252-1.565-.157-2.282.283-.913,1.828-.913,1.67.261Z"
      transform="translate(-210.792 -60.776)"
      fill="#1d1d1d"
    />
    <path
      id="Path_2"
      data-name="Path 2"
      d="M264.394,70.184c-.253.359-.379.978-.914,1.011-.5,0-.6-.554-.756-.913a2.421,2.421,0,0,1,.914-2.118c1.135-.294.6,1.4.757,2.02Z"
      transform="translate(-220.433 -61.75)"
      fill="#1d1d1d"
    />
    <path
      id="Path_3"
      data-name="Path 3"
      d="M247.848,87.036a2.179,2.179,0,0,1-.63,1.792,4.452,4.452,0,0,1-4.223.847,2.841,2.841,0,0,1-1.292-1.564c-.032-.521-.284-1.4.22-1.694.662-.261.315.619.63.847.252.62,1.009.62,1.576.457a5.014,5.014,0,0,0,2.427-1.63c.693-.228,1.166.359,1.292.945Z"
      transform="translate(-204.644 -75.147)"
      fill="#1d1d1d"
    />
    <path
      id="Path_4"
      data-name="Path 4"
      d="M143.162,47.043c1.639,4.237.41,9.224-2.175,12.646A10.483,10.483,0,0,1,130.62,63.6a1.438,1.438,0,0,0-.536-.131v.391c1.513,1.4,2.3,3.39,3.876,4.758l.819-.163c3.876-3.292,7-7.985,12.259-7.724a3.721,3.721,0,0,1,1.418,1.564l-.063,1.3c-2.994-.554-4.821,1.923-6.807,3.911-1.733,1.923-3.466,3.976-5.987,4.237-2.489-.261-5.168-.131-6.712-2.575-.913-1.3-2.4-2.706-1.891-4.466-3.246,2.868-7.059,6.03-9.013,10.006.284.848,1.324.652,1.891.782,3.34-.2,6.712-1.27,9.989-.684a8.526,8.526,0,0,1,3.4,3.259c.914,3.194-2.458,4.824-4.16,6.812a20.441,20.441,0,0,0-4.159,4.139c2.268.848,4.695.75,6.586,2.511.221.424.536.912.283,1.4-1.261.327-2.521.652-3.844.88a46.366,46.366,0,0,0-7.028-2.509,1.594,1.594,0,0,1-.914-1.011c-.22-2.282,1.891-4.041,3.4-5.411,2.048-1.955,4.664-3.813,6.27-6.03.095-.358-.346-.423-.536-.619-4.38-.1-8.981,2.249-13.14.391-.134-.354-1.009.815-1.608,1.336-3.057,2.412-6.082,5.965-10.273,5.085-1.355-.521-1.923-1.988-2.868-2.966-1.229-3.161.536-6.062,1.135-8.93a12.687,12.687,0,0,0-4.1,3.683c-.882.652-2.395.457-3.4.163-.063-3,3.245-4.791,5.231-6.486a3.568,3.568,0,0,1,2.269-.652,5.306,5.306,0,0,1,3.466,3.39c.158,3.063-1.765,5.475-1.292,8.506,2.8-.391,5.042-2.672,7.343-4.531a4.756,4.756,0,0,0,1.355-2.118,37.438,37.438,0,0,1,10.9-13.07c1.04-.456.126-1.531.221-.619-2.8,3.455-4.066-2.672-6.587-3.585-1.355-1.076-2.521-2.673-4.38-2.118a15.322,15.322,0,0,0-6.334,8.6c-.378.423-.977-.065-1.45-.065-.6-.489-1.607-.554-1.576-1.564.725-4.922,4.727-9.615,9.517-10.56,4.033-.847,7.185,2.346,9.517,5.378a12.461,12.461,0,0,1,5.168-12.287c2.931-2.542,7.154-2.9,10.872-1.858,1.544,1.076,3.341,1.728,4,3.683ZM135.6,44.925a11.013,11.013,0,0,0-8.446,7.725,7.757,7.757,0,0,0,.977,6.583,5.364,5.364,0,0,0,3.624,1.63c2.52.424,4.317-1.173,5.987-2.738,1.828-3,3.908-6.811,2.175-10.462-1.135-1.5-2.112-3.227-4.317-2.738Z"
      transform="translate(-94.915 -42.813)"
      fill="#1d1d1d"
    />
  </g>
  <g id="Group_3" data-name="Group 3" transform="translate(53.108 23.869)">
    <path
      id="Path_5"
      data-name="Path 5"
      d="M356.721,153.809c-.076.8.156,1.73-.711,2.166a2.09,2.09,0,0,1-1.512-.26,2.042,2.042,0,0,1,.2-2.209,1.307,1.307,0,0,1,2.025.3Z"
      transform="translate(-342.008 -149.22)"
      fill="#1d1d1d"
    />
    <g id="Group_2" data-name="Group 2" transform="translate(0 0)">
      <path
        id="Path_6"
        data-name="Path 6"
        d="M402.156,144.235a6.771,6.771,0,0,0,.566.985c-.119.2-.319.144-.5.137a2.49,2.49,0,0,0-1.341-.052,4.287,4.287,0,0,0-3.021,2.838,2.3,2.3,0,0,0-.559,2.284l-.17.33c.369,2.611,3.364,4.452,2.331,7.389a7.661,7.661,0,0,1-4.064,4.9,21.39,21.39,0,0,0-3.068.619c-.526-.29-.229-1.017-.6-1.367l.024-.626a19.529,19.529,0,0,0,2.7-.387c1.718-.985,3.256-2.537,3.072-4.716-.5-2.057-2.122-3.553-2.464-5.693-.236-1.4.572-2.619.957-3.881.47-.586.963-1.149,1.367-1.76a5.441,5.441,0,0,1,4.516-1.548l.247.547Z"
        transform="translate(-370.042 -142.08)"
        fill="#1d1d1d"
      />
      <path
        id="Path_7"
        data-name="Path 7"
        d="M493.555,150.7a23.672,23.672,0,0,1-.5,2.936c-.228.1-.038.4-.177.53.729.252,1.48.506,2.21.735a3.267,3.267,0,0,0-.262,1.558c-.747.194-1.445-.28-2.254-.2-.358-.014-.422.476-.523.785-.84,3.169-1.693,6.113-2.512,9.305-.224.014-.67-.027-.8-.255-.359.008-.722.151-1.063-.31a6.745,6.745,0,0,0,.7-2.436c.673-2.325.992-4.8,1.886-7.023-.772-.321-1.9.374-2.084-.551.292-.593.243-1.044.6-1.544a9.337,9.337,0,0,1,2.112-.186c.091-1.183.6-2.171.778-3.305.608-.088,1.055-.049,1.662-.137l.22.1Z"
        transform="translate(-441.81 -147.305)"
        fill="#1d1d1d"
      />
      <path
        id="Path_8"
        data-name="Path 8"
        d="M478.169,151.829c-1.068.988-2.6,1.868-3.122,3.147a22.258,22.258,0,0,0,.642,4.212,7.759,7.759,0,0,1,.321,2.654c-.2.618.621,1.882-.674,1.787-.307-.169-.259.326-.547.247a.456.456,0,0,1-.73-.23,11.517,11.517,0,0,0-.477-4.429,33.149,33.149,0,0,1-.854-5.674,13.219,13.219,0,0,0-.575-1.9,4.33,4.33,0,0,1,1.483-.7l.117-.152c.658.361.581,1.186.781,1.8a15.4,15.4,0,0,1,2.776-2.309c.225.546.653,1.056.857,1.556Z"
        transform="translate(-430.195 -147.062)"
        fill="#1d1d1d"
      />
      <path
        id="Path_9"
        data-name="Path 9"
        d="M426.039,165.493a3.533,3.533,0,0,1,2.655,2.521,18.291,18.291,0,0,1,.386,2.165,28.76,28.76,0,0,1,1.269-3.265c.414-.857,1.48-.636,2.12-.991a2.681,2.681,0,0,1,2.245,1.587c1.056,2.773.963,6.307-1.185,8.55-.546.785-1.374.238-2.123.5a3.62,3.62,0,0,1-2.346-1.86,5.889,5.889,0,0,1-.332-2.386,5.3,5.3,0,0,1-.859,1.377c-.647.489-1.291,1.517-2.138,1.416-.42-.128-.939-.014-1.24-.362.26,1.958.181,3.97.575,5.933-.76-.03-1.589,1.147-2.089.187-.19-2.6-.534-5.259-.654-7.928l-.108-.116c.161-2.389-.756-4.708-.8-7.061a1.616,1.616,0,0,1,.974-.3c.081-.355.544-.158.7-.242a1.892,1.892,0,0,1,.454.981,3.106,3.106,0,0,1,2.344-.983l.146.274Zm-.53,1.546a5.8,5.8,0,0,0-1.626,1.5c.381,1.716.3,3.347.564,5.059.244.077.43-.1.7-.018a3.78,3.78,0,0,0,1.769-2.886c-.149-1.349.076-3.087-1.4-3.659Zm6.583.571c-.886,2.047-2.134,4.193-1.06,6.518.442.152.411.957,1.042.847a2.714,2.714,0,0,0,.867-1.578c.32-1.891.827-4.557-.849-5.787Z"
        transform="translate(-392.244 -158.234)"
        fill="#1d1d1d"
      />
      <path
        id="Path_10"
        data-name="Path 10"
        d="M308.046,138.907a12.359,12.359,0,0,1,.644,4.145c.145.879.856,1.6.753,2.514l8.075-7.274c.553-.4.607.516,1.1.491l.352.708c-1.954,1.871-3.874,4.035-5.717,5.955A52.293,52.293,0,0,0,316.9,153a30.684,30.684,0,0,0,1.239-7.094c.051-.154.121-.219.059-.377.641-.356,1.138.088,1.839-.085l.106.161c-.046,1.184-.32,2.45-.366,3.635a3.575,3.575,0,0,1,.6-1.477,7.948,7.948,0,0,1,2.21-2.712,11.5,11.5,0,0,1,2.51-.059A2.988,2.988,0,0,1,327.2,146.1a2.4,2.4,0,0,0,.137-.644,43.818,43.818,0,0,1,1.9-5.724,2.049,2.049,0,0,1,1.7.067c-.093,1.81-1.159,3.313-1.475,5.092-.492,1.122-.349,2.628-.754,3.844-.718,2.9-1.568,5.76-2.308,8.664-.252.147-.6-.068-.866-.191-.15-.163-.564.113-.523-.356-.424-.039-.141-.408-.132-.632l.009-.223a2.58,2.58,0,0,1-1.777.2c-1.017-.913-2.6-1.668-2.988-3.183-.718-1.1-.26-2.518-.389-3.776a18.375,18.375,0,0,0-.586,3.537c-.275.146-.336.568-.391.835-.538,0-1.073-.042-1.522-.015.547.895.955,1.918,1.456,2.855-.7.152-1.4,1.4-2.118.343-.32.167-.535-.066-.73-.229-1.448-3.057-2.552-6.324-4.271-9.3a6.784,6.784,0,0,1-1.6,1.392c.655,3.317,1.417,6.727,1.758,10.054-.265.482-1.047-.13-1.248.444a.78.78,0,0,1-.9-.527c-.6-1.9-1.012-3.891-1.45-5.855a23.62,23.62,0,0,0-.577-4.164c-1.277-3.43-.371-7.133-1.9-10.395.235-.282.538-.024.709-.4a2.049,2.049,0,0,0,.817-.282c.575.2.57.9.865,1.377Zm18.484,8.243a5.006,5.006,0,0,0-3.049-.455c-.742,1.226-2.036,2.271-1.834,3.959a4,4,0,0,0,2.453,3.7l.876-.66c.2-.081.219-.461.549-.314a59.74,59.74,0,0,0,1.459-5.853c-.127-.184-.348-.26-.455-.377Z"
        transform="translate(-305.655 -137.53)"
        fill="#1d1d1d"
      />
      <path
        id="Path_11"
        data-name="Path 11"
        d="M501.028,221.867v.247h-.371V223.2h-.28v-1.082H500v-.247Zm1.539,0V223.2h-.247v-1.079l-.375,1.082H501.8l-.366-1.082V223.2h-.253v-1.329h.408l.283.809.3-.809Z"
        transform="translate(-451.025 -200.613)"
        fill="#1d1d1d"
      />
    </g>
  </g>
</svg>
</Link>  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">

  

      <li><ActiveLink to="/"> Home</ActiveLink> </li>
      <li><ActiveLink to="/instructorlist">Instructors</ActiveLink></li>
      <li><ActiveLink to="/classes">Classes</ActiveLink></li>
      
      {user && (
  <>
    <li>
      <ActiveLink to={!loading && (isAdmin ? '/admin' : (isInstructor ? '/instructor' : '/student'))}>
        Dashboard
      </ActiveLink>
    </li>
  </>
)}
     
    </ul>
  </div>
  <div className="navbar-end">
    {user?<> <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full relative">
          <img 
            onMouseEnter={() => setImgDetails(true)}
            onMouseLeave={() => setImgDetails(false)}
          src={user.photoURL?user.photoURL:userData.photoURL} />
    
        </div>
      </label>
      {imgDetails  &&     <div id="tooltip-light" role="tooltip" class="absolute z-[999999999] right-5 top-7   inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 tooltip">
        {user.displayName?user.displayName:userData.name}
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>}
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={logOut}>Logout</button></li>
      </ul>
    </div>
    </>:<>
    <Link to="/login" className="bg-[#406147] text-center text-white font-semibold px-8 py-2 rounded-3xl">Sign In</Link>
   
    </>}
   
  </div>



</div> */}


<header className="py-5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="relative z-50 flex justify-between">
              <div className="flex items-center md:gap-x-12">
              <img className='w-8' src="/assets/img/music.png" alt="" />
                 <Link to="/"> Summer School</Link>
                 
                   
                 
              
                <div className="hidden md:flex md:gap-x-6">

                    

       <ActiveLink className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    to="/"> Home</ActiveLink>   
      <ActiveLink  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    to="/instructorlist">Instructors</ActiveLink> 
       <ActiveLink  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    to="/classes">Classes</ActiveLink>  
      

                
                </div>
              </div>
              <div className="flex items-center gap-x-5 md:gap-x-8">
              <label className="swap swap-rotate">

{/* this hidden checkbox controls the state */}
<input onClick={handleToggle} checked={dark} type="checkbox" />

{/* sun icon */}

<svg className="swap-on fill-current w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


<svg className="swap-off   w-8 h-8 text-white fill-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>




{/* moon ico */}

</label>
              {user ? (
  <>
    

      <Link className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600" to={!loading && (isAdmin ? '/admin' : (isInstructor ? '/instructor' : '/student'))}>
        Dashboard
      </Link>
      <div className="navbar-end">
    {user?<> <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full relative">
          <img 
            onMouseEnter={() => setImgDetails(true)}
            onMouseLeave={() => setImgDetails(false)}
          src={user.photoURL?user.photoURL:userData.photoURL} />
    
        </div>
      </label>
      {imgDetails  &&     <div id="tooltip-light" role="tooltip" class="absolute z-[999999999] right-5 top-7   inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 tooltip">
        {user.displayName?user.displayName:userData.name}
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>}
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={logOut}>Logout</button></li>
      </ul>
    </div>
    </>:<>
    <Link to="/login" className="bg-[#406147] text-center text-white font-semibold px-8 py-2 rounded-3xl">Sign In</Link>
   
    </>}
   
  </div>
  </>
):<><ActiveLink  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
to="/login">Sign in</ActiveLink> 

<Link to="/register"
className="hidden lg:inline group  items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"

>
<span>
Get started <span className="hidden lg:inline">today</span>
</span>
</Link></>}


                <div className="-mr-1 md:hidden">
                  <div data-headlessui-state="">
                  <div className="dropdown ">
  <label tabIndex={0} className="btn btn-ghost lg:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  </label>
  <ul
    tabIndex={0}
    className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-white right-0 px-6 py-3 space-y-2"
  >
     <ActiveLink className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    to="/"> Home</ActiveLink>   
      <ActiveLink  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    to="/instructorlist">Instructors</ActiveLink> 
       <ActiveLink  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    to="/classes">Classes</ActiveLink>  
  </ul>
</div>

                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>       
        
        
 </>
    );
}

export default Header;
