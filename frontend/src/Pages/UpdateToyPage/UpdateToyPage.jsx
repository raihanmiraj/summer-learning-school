import axios from 'axios';
import React, { useContext, useState ,useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';
 
const UpdateToyPage = ({setTitle}) => {
  const [loading, setLoading] = useState(true);
  const [toyData, setToyData] = useState(null);
  const [message, setMessage] = useState(null);
  const [progresssending, setProgresssending] = useState(false);
  const  { toastPush}  = useContext(AuthContext);
   const {id} = useParams();
    useEffect(() => {
      setTitle("Update Toy")
       axios.get(`/toy/${id}`)
       .then(response =>{
        setToyData(response.data)
        setLoading(false)
       })
    }, []);
    const formSubmitHandler = (e)=>{
      setProgresssending(true)
        e.preventDefault()
let price = e.target.price.value
let quantity = e.target.quantity.value
let description = e.target.description.value
axios.put(`/toy/update/${id}`,{ 
    price:price,
    quantity:quantity,
    description:description,

})
.then(response=>{ 
   console.log(response.data)
   toastPush("Toy Updated!")
   setMessage("Toy Updated!")
   setProgresssending(false)
})
.catch(err=>{
    console.log(err)
    toastPush("Toy Updated Failed!")
    setProgresssending(false)
})

    }

    const inputChangeHandler =(e)=>{
        setToyData({...toyData, [e.target.id]:e.target.value})
        setMessage(null)
    } 
    return (
        <>
        <section className='flex flex-col justify-center items-center space-y-5 mt-20'>
<h1 className='text-3xl font-semibold'>Update Toy</h1>
{
    loading?<></>:<form action="" className='w-[90%] md:w-[50%]' onSubmit={formSubmitHandler}>

    <div className="form-control w-full ">
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <input name='price'   id='price' value={toyData.price} onChange={inputChangeHandler} type="text" placeholder="Price" className="input input-bordered w-full " />
     </div>
     <div className="form-control w-full ">
      <label className="label">
        <span className="label-text">Quantity</span>
      </label>
      <input type="text" value={toyData.quantity} onChange={inputChangeHandler} name='quantity' id='quantity' placeholder="Quantity" className="input input-bordered w-full " />
     </div>
     <div className="form-control w-full ">
      <label className="label">
        <span className="label-text">Description</span>
      </label>
      <textarea value={toyData.description} onChange={inputChangeHandler} name='description'   id='description' placeholder="Description" className="textarea textarea-bordered textarea-lg w-full " ></textarea></div>
    
    <div className='flex justify-center mt-4'> 
  <button className="btn btn-primary gap-2" disabled={progresssending}>
        {progresssending && <div class="w-4 h-4 rounded-full animate-spin
                    border-2 border-solid border-white border-t-transparent"></div> }
      
                    <span>Update</span>
        </button>
     </div>
    </form>
}

        </section>
            
        </>
    );
}

export default UpdateToyPage;
