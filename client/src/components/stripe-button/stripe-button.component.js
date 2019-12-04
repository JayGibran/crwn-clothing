import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_8vuyAhVbSW6QxqxOPQMskZV400Oiw7bwsX";

  const onToke = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful');
    }).catch(err => {
      console.log('Payment error: ', JSON.parse(err));
      alert('There was an issue with your payment. ' +
            'Please sure you use the provided credit card.');
    })
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
