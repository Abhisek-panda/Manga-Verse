import { useProduct } from "../../..";
import "../Checkout/Checkout.css";

export const CheckoutAddress = ({ add }) => {
  const { setCheckoutAddress } = useProduct("");

  const setAddresss = () => {
    const { id, ...rest } = add;
    const addArray = Object.values(rest);
    setCheckoutAddress(addArray.join(" ,"));
  };

  return (
    <div>
      <div className="checkout-address-select">
        <label htmlFor={add?.id} className="checkout-address-label">
          <input
            type="radio"
            id={add?.id}
            value={add.id}
            name="address-checkout"
            onChange={(e) => setAddresss()}
          />
          <span className="checkout-name-span">{add?.fullname}</span>
        </label>
        <p>
          Address : {add?.city}
          {add?.area}
        </p>
        <p>Pincode : {add?.pincode}</p>
      </div>
    </div>
  );
};
