import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const Paypal = ({amount,onError,onSucess}) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <PayPalScriptProvider
        options={{
          "client-id":
            "AeQo0U8d1RQHkdhpIe8D1xCj6rmTl_JHrOEcrn29OfBQXUaQvxpd8jhwKNVLgjZ6L0cf7_J3z8EiqJqs",
          currency: "USD",
        }}
      >
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
          }}
          onError={onError}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Paypal