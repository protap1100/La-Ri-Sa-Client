import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckoutForm = ({ price }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transaction, setTransaction] = useState("");
  const [success, setSuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: price }),
      credentials : 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    // making payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      //   console.log("Payment Error", error);
      setError(error.message);
    } else {
      console.log("Payment Done", paymentMethod);
      setSuccess("Payment Complete");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Transaction Id", paymentIntent.id);
        setTransaction(paymentIntent.id);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-accent"
          type="submit"
          //   disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-1xl font-bold text-red-500">
        {" "}
        {error ? error : <span className="text-green-400">{success}</span>}{" "}
      </p>
      <p> {transaction && `Your Transaction Id: ${transaction}`} </p>
    </div>
  );
};

export default CheckoutForm;
