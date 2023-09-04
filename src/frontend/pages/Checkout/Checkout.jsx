import { useProduct } from "../../..";
import { Header } from "../Header/Header";
import "../Checkout/Checkout.css";
import { CheckoutAddress } from "./CheckoutAddress";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { totalCartDiscount, state, checkoutAddress, dispatch } = useProduct();

  const navigate = useNavigate();

  const newCart = [];

  const handleOrderPlaced = () => {
    dispatch({ type: "CLEARED_CART", payload: newCart });
    toast.success("Thanks For Order.");
    navigate("/");
  };

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

            <button
              className="common-link place-order-link"
              onClick={() => handleOrderPlaced()}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
