import React, { useState } from 'react';
 

import LoginWithGoogle from '../../Component/LoginWithSocial/LoginWithGoogle';
import LoginWithGithub from '../../Component/LoginWithSocial/LoginWithGithub';
import LoginWithFacebook from '../../Component/LoginWithSocial/LoginWithFacebook';
import LoginWithApple from '../../Component/LoginWithSocial/LoginWithApple';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import Header from '../../Layout/Header/Header';
import { useEffect } from 'react';
import { useForm } from "react-hook-form"
const LoginPage = ({setTitle}) => {
const {register , handleSubmit} = useForm()
  const [message , setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false)
 useEffect(() => {
  setTitle("Login")
 }, []);
  const auth = getAuth(app); 
    const handleSubmitbtn = (e)=>{
        // e.preventDefault();
//  let email = e.target.email.value
//  let password = e.target.password.value
 let email = e.email
 let password = e.password
 signInWithEmailAndPassword( auth,email, password)
 .then((userCredential) => {
 
   const user = userCredential.user;
   console.log(user)
 
 
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log(error)
   setMessage("Email or password doesn't match");
   // ..
 });
    }
    const handleShowPassword = () =>{
      setShowPassword(showPassword?false:true)
     }
   
 
    return (
        <>
   
      <section className=" w-full    flex justify-center items-center px-4 md:px-0 mt-12">
  <div className="flex flex-col gap-5">
    <div className="flex gap-5 text-2xl font-semibold items-center">
      <Link to="/login" className="border-b-4 border-[#4406CB] py-2">Login</Link>
      <Link  to="/register" className="py-2 text-gray-500">Register Now</Link>
    </div>
    <form onSubmit={handleSubmit(handleSubmitbtn)} className="flex flex-col gap-5 ">
      <input
        type="email"
        {...register("email")}
        id=""
        onChange={()=>setMessage("")}
        placeholder="Enter Your Email"
        className="p-2 rounded-lg text-black  border"
      />
      {/* <input
        type="password"
        {...register("password")}
        id=""
        onChange={()=>setMessage("")}
        placeholder="Enter Password"
        className="p-2 rounded-lg text-black border"
      /> */}
          <div class="relative">
  <input
    type={showPassword?"text":"password"}
    {...register("password")}
    onChange={()=>setMessage("")}
    class="w-full p-2 rounded-lg text-black border"
    placeholder="Password"
  />
  <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
    <button
      type="button"
      class="p-2 focus:outline-none"
      onClick={handleShowPassword}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6  ${showPassword?'hidden':'inline'}` }>
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6  ${showPassword?'inline':'hidden'}` }>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>

    </button>
  </div>
</div>
      <p className='text-red-600'> {message}</p>
      <button className="btn btn-primary">Login</button>
      <a href="#">Forgot Password?</a>
      <a href="#">If you've no account <Link to="/register" className='text-blue-800'>Create One</Link> </a>
    </form>
    <div className="grid grid-cols-2 gap-4 text-black text-[10px] md:text-sm">
   {/* <LoginWithFacebook/>
   <LoginWithApple/> */}
     <LoginWithGoogle/>

  <LoginWithGithub/>
    </div>
  </div>
</section>


        </>
    );
}

export default LoginPage;
