import React, { useEffect, useState, createContext, useContext } from 'react';
 
import axios from 'axios';
import ShopCard from '../../Component/ShopByCategory/ShopCard';
import { AuthContext } from '../../Provider/AuthContextProvider';
import {Link} from 'react-router-dom'
import Spinner from '../../Component/Spinner/Spinner';

const MyToys = ({setTitle}) => {
    const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged }  = useContext(AuthContext);
    const  { toastPush}  = useContext(AuthContext);

            
    const [loading, setLoading] = useState(true)
    const [renderData, setRenderData] = useState(null);
    const [toysData, setToysData] = useState(null)
    const [currentID, setCurrentID] = useState(null)
  
    
    useEffect(() => {
        if (loading && user) {
          setTitle("My Toy")
            axios.get(`/mytoys/${user.email}`)
                .then(response => {
                    let data = response.data
                    setToysData(data)
                    setRenderData(data)
                    setLoading(false)

                })
        }
    }, []);
    
    const deleteButtonHandler =(e)=>{
        axios.delete("/delete/"+currentID )
        .then(response=>{
            let data = renderData.filter(e=>e._id !=currentID)
            setCurrentID(null)
            setRenderData(data)
            toastPush("Deleted Successfully")
        })
        .catch(err=>{
            console.log(err)
        })
    }
 const sortByprice = (e)=>{
  setLoading(true)
  let id =  e.target.id ;
   if (user) {
    axios.get(`/mytoys/${id}/${user.email}`)
        .then(response => {
            let data = response.data
            setToysData(data)
            setRenderData(data)
            setLoading(false)

        })
}
 }
    return (
        <>
 
 
{
    currentID && <>
    <input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Warning</h3>
    <p className="py-4">Are You Ready to delete this?</p>
    <div className="modal-action">
    <button onClick={deleteButtonHandler} className="btn btn-warning">Yes</button>
      <label htmlFor="my-modal" className="btn">No</label>
    </div>
  </div>
</div>
    </>
}


            {user ?
            <>

            <section className='flex flex-col items-center justify-center mt-20 space-y-8'>
   
            <h1 className='text-4xl font-bold text-center'>My Toys</h1>
        
<div className="overflow-x-auto w-[75%]">
<div className='flex justify-end  w-full my-5' >
        <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn m-1 btn-primary">Sort</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><button id='aesc' onClick={sortByprice}>Ascending By Price</button></li>
    <li><button  id='desc' onClick={sortByprice}>Descending By Price</button></li>
  </ul>
</div>
</div>

  <table className="table w-full bg-white"> 
    <thead>
      <tr>
         <th>Name</th>
        <th>Rating</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    


    {loading ? <>
    <Spinner/>
    </> : <>
                        {renderData.map(e => {

return <>
  <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={e.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{e.toyname}</div>
              <div className="text-sm opacity-50">{e.category} </div>
            </div>
          </div>
        </td>
        <td>
         {e.rating}
         </td>
        <td>{e.price}</td>
        <td>
         {e.quantity}
         </td>
        <th>
          <Link to={`/updatetoy/${e._id}`} className="btn btn-info btn-xs">Update</Link>
        </th>
        <th>
          <label onClick={()=>setCurrentID(e._id)} htmlFor="my-modal"  className="btn btn-danger btn-xs">Delete</label>
        </th>
      </tr>
</> 
                        })}
                    </>}



    
 
     
    </tbody>
    {/* foot */}
    <tfoot>
    <tr>
         <th>Name</th>
        <th>Rating</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </tfoot>
    
  </table>
</div>

            </section>
        </>:<>

        <div className='flex justify-center mt-12'>
            <h1 className='text-4xl font-semibold text-center'>No Content Available. User needs to Sign in</h1>
        </div>
        </>
            
             
           
            }
        </>
    );
}

export default MyToys;












 