import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckOut";

const Payment = () => {
  const paymentData = useLoaderData();
  const price = paymentData.price;
  // console.log(paymentData.price)
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
  return (
    <div>
      <h1>Payment Now</h1>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
