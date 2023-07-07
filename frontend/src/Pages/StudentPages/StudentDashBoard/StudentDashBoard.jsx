import React, { useEffect, useState, createContext, useContext } from 'react';
 
import axios from 'axios'; 
 
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../../Provider/AuthContextProvider';
 import Spinner from '../../../Component/Spinner/Spinner';
 

const StudentDashBoard = ({setTitle }) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/student/class/selected")
    }, []);
    return (
     
 
 
 
 
 
 
         
             <>
 
         
         </> 
             
              
            
        
    );
}
export default StudentDashBoard;
