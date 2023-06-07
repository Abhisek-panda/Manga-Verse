import { useProduct } from "../../..";
import { Header } from "../Header/Header";

export const OrderSummary = () => {
  const { state } = useProduct();
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="order-summary">
        {state.cart.map((product) => {
          const { title } = product;
          return <div>{title}</div>;
        })}
      </div>
    </div>
  );
};
