import React,{useEffect} from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const InstructorPage = () => {
 
        const navigate = useNavigate()
    useEffect(() => {
        navigate("/instructor/myclass")
    }, []);

 
    return (
        <>
           
        </>
    );
}

export default InstructorPage;
