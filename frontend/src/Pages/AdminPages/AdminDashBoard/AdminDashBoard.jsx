import React,{useEffect} from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminDashBoard = () => {
    const navigate = useNavigate()
useEffect(() => {
    navigate("/admin/manageclass")
}, []);
    return (
        <>
 
      </>
      
    );
}

export default AdminDashBoard;
