import { Link, useNavigate } from "react-router-dom";
import { useProduct } from "../..";
import "../components/Address.css";

export const Address = () => {
  const { state, removeAddress, setEditAddress } = useProduct();

  const navigate = useNavigate();

  const editingAddress = (add) => {
    setEditAddress(add);
    navigate("/address-form");
  };

  return (
    <div>
      <div className="address-page">
        {state.address.map((add) => {
          const { id, mobile, flat, area, city, pincode, fullname } = add;
          return (
            <div key={id} className="address-details-container">
              <div className="address-name-city">
                <h2>Name:{fullname}</h2>
                <p>Mobile:{mobile}</p>
                <p>
                  Address: {flat}, {area}
                </p>
                <p>
                  City: {city} Pincode: {pincode}
                </p>
                <div className="address-btn-container">
                  <button
                    className="common-btn"
                    onClick={() => removeAddress(id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <Link to="/address-form" className="common-link">
          + Add Address
        </Link>
      </div>
    </div>
  );
};
