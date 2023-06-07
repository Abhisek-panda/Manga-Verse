import { Link } from "react-router-dom";
import { useProduct } from "../../..";
import { Header } from "../Header/Header";
import "../Checkout/Checkout.css";
import { CheckoutAddress } from "./CheckoutAddress";

export const Checkout = () => {
  const { totalCartDiscount, state, checkoutAddress } = useProduct();
  console.log(state.checkoutAddress);
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="checkout-page-container">
        <div className="checkout-page profile-page-container">
          <div className="checkout-address-container profile-container background-clr-shadow">
            <div className="no">
              {state?.address?.map((add) => {
                return (
                  <div className="checkout-address" key={add?.id}>
                    <CheckoutAddress add={add} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-summary address-container background-clr-shadow ">
            <div className="order-title">
              <h2>Order Summary</h2>
              <hr className="hr" />
            </div>

            <div>
              {state.cart.map((product) => {
                const { _id, title, quantity } = product;
                return (
                  <div key={_id} className="order-summary-title-qty">
                    <p>{title}</p>
                    <p>{quantity}</p>
                  </div>
                );
              })}
            </div>
            <hr className="hr" />

            <div className="total-order-price">
              <p>Total Order Price: {totalCartDiscount}</p>
            </div>

            <div className="checkout-address-combine">{checkoutAddress}</div>

            <Link to="/order-summary" className="common-link place-order-link">
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
