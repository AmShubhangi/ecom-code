import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import './stripe.button.styles.scss';
import shortLogo from '../../assets/images/shortLogo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 70;
    const publishableKey = "pk_test_syUszlQlr0UfOSK04or4nxi0001606CHBS";

    const onToken = token => {
        toast.success('Payment successfully !', { containerId: 'B' });
    }

    return (
        <div>
            <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} />
            <StripeCheckout label="Pay Now"
                name="Brand Fashion"
                billingAddress
                shippingAddress
                image={shortLogo}
                currency="INR"
                locale="auto"
                description={`Your Total amount is $${price}`}
                amount={priceForStripe}
                panelLabel="Pay Now "
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeCheckoutButton;