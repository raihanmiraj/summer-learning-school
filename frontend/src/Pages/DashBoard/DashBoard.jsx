import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
const DashBoard = ({setTitle}) => {
    const { registerUser, user, logOut, loginUser, isLogged, setIsLogged , isAdmin, isInstrucor, loading} = useContext(AuthContext);

    const navigate = useNavigate();
    useEffect(() => {
        setTitle("dashboard")
        if( !loading && user ){
             if(isAdmin){
            navigate('/admin')
        }else if(isInstrucor){
            navigate("/instructor")
        }else {
            navigate("/student")
        }
        }
       
 
    }, []);

    return (
        <>
            
        </>
    );
}

export default DashBoard;
