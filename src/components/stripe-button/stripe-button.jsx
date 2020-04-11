import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; //stripe cent olarak istedigi icin parayi 100 ile carpiyoruz.
    const publicshableKey = 'pk_test_yQ1Rfc0JOtZx0CxipfMvdHTU00JhmiXMQJ';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
        label='Pay Now'
        name='Hanger Ltd. Şti.'
        billingAddress
        shippingAddress
        image='https://www.svgrepo.com/show/108090/clothes-hanger.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publicshableKey}
        />
    )
}

export default StripeCheckoutButton;