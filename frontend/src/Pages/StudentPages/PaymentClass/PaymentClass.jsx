import { loadStripe } from "@stripe/stripe-js";
 import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
 
 
// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PaymentClass = ({setTitle}) => {
 useEffect(() => {
    setTitle("payment Page")
 }, []);
    const {classid} = useParams()
    const cart  = null;
    const total = null;
    const price =60
    return (
        <div className="flex justify-center items-center w-full">
          
            <Elements stripe={stripePromise}>
                <CheckoutForm classid={classid} cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PaymentClass;