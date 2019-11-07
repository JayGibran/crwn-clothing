import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_8vuyAhVbSW6QxqxOPQMskZV400Oiw7bwsX";

  const onToke = token => {
    console.log(token);
    alert("Payment Successful  ");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $ ${price}`}
      price={priceForStripe}
      panelLabel="Pay Now"
      token={onToke}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
