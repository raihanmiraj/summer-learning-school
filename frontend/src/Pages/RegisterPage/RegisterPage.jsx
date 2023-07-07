import React, { useState,useContext } from 'react';

import LoginWithGoogle from '../../Component/LoginWithSocial/LoginWithGoogle';
import LoginWithGithub from '../../Component/LoginWithSocial/LoginWithGithub';
import LoginWithFacebook from '../../Component/LoginWithSocial/LoginWithFacebook';
import LoginWithApple from '../../Component/LoginWithSocial/LoginWithApple';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import Header from '../../Layout/Header/Header';
import { useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../Provider/AuthContextProvider';
const RegisterPage = ({setTitle}) => {
  const {register , handleSubmit} = useForm()
const [message , setMessage] = useState("");
const [pass , setPass] = useState(null);
const { registerUser, user, logOut, loginUser, isLogged, setIsLogged , loading,userData, setUserData} = useContext(AuthContext);

const changeInputPassword = (e)=>{
  setMessage("")
 }
useEffect(() => {
  setTitle("Registration")
}, []);
 
  const auth = getAuth(app); 
    const handleSubmitbtn = (e)=>{
        // e.preventDefault();
 let email = e.email
 let password = e.password
 let cfpassword = e.cfpassword
 let name = e.name;
let photoURL = e.image;
//  let email = e.target.email.value
//  let password = e.target.password.value
//  let cfpassword = e.target.cfpassword.value
 
 if(password == "" || email ==""){
  setMessage("Password or email can't be empty")
  return ;
 }else if(cfpassword!=password){
  setMessage("Password Doesn't Match")
  return ;
 }else if(!/[A-Z]/.test(password)){
  setMessage("Missing Capital letter")
  return ;
 }else if(!/[^a-zA-Z0-9]/.test(password)){
  setMessage("Missing Special Character")
  return ;
 }
 else if(password.length <6){
  setMessage("Password Must be more than 6")
return ;
}  

setUserData({
  name:name,
  email:email,
  photoURL:photoURL,
})
axios.post("/users", {
  name: name,
  email:email,
  photoURL: photoURL,
  role: 'student'
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   const user = userCredential.user;
    user.updateProfile({
      displayName: name,
      photoURL: photoURL,
    }).then((response) => {
      console.log(response)
    });
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });

    }
    return (
        <>
        <Header/>
           <section className=" w-full   flex justify-center items-center px-4 md:px-0 mt-12">
  <div className="flex flex-col gap-5">
    <div className="flex gap-5 text-2xl font-semibold items-center">
    <Link to="/login"  className="py-2 text-gray-500">Login </Link>
    <Link  to="/register"  className="py-2  border-b-4 border-[#4406CB]  ">Register Now</Link>
    </div>
  


<form onSubmit={handleSubmit(handleSubmitbtn)} className="flex flex-col gap-5 ">
<input
        type="text" 
        {...register("name")}
        id=""
        placeholder="Enter Your Name"
        className="p-2 rounded-lg text-black border"
      />
<input
        type="text"
       
        {...register("image")}
        id=""
        placeholder="Enter Your Photo Url"
        className="p-2 rounded-lg text-black border"
      />
      <input
        type="email"
        {...register("email")}
        id=""
        placeholder="Enter Your Email"
        className="p-2 rounded-lg text-black border" required
      />
      <input onChange={changeInputPassword}
        type="password"
      {...register("password")}
        id="password"
        placeholder="Enter Password"
        className="p-2 rounded-lg text-black border" required
      />

<input onChange={changeInputPassword}
        type="cfpassword" 
        {...register("cfpassword")}
        id="cfpassword"
        placeholder="Confirm Password"
        className="p-2 rounded-lg text-black border" required
      />
      <p className='text-red-700'>{message}</p>
      <button type="submit" className="btn btn-primary">Register</button>
      <a href="#">Forgot Password?</a>
      <a href="#">Already have an account ? <Link to="/login" className='text-blue-800'>Login</Link> </a>
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

export default RegisterPage;




 