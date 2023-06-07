import { useProduct } from "../../..";
import { Header } from "../Header/Header";
import "../Checkout/OrderSummary.css";
import { Link } from "react-router-dom";

export const OrderSummary = () => {
  const { state } = useProduct();
  return (
    <div>
      <div className="orders">
        <div className="order-summary">
          {state.cart.map((product) => {
            const { title } = product;
            return <div>{title}</div>;
          })}
        </div>
      </div>
      <Link to="/" className="complete-link">
        Order Completed, Go Back
      </Link>
    </div>
  );
};
