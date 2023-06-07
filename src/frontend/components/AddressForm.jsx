import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { useProduct } from "../..";
import { Header } from "../pages/Header/Header";
import "../components/AddressForm.css";

export const AddresssForm = () => {
  const {
    addAddress,
    updateAddress,
    setCurrAddress,
    setEditAddress,
    editAdress,
  } = useProduct();

  const [newAddress, setNewAddress] = useState(
    editAdress
      ? editAdress
      : {
          id: uuid(),
          fullname: "",
          mobile: "",
          flat: "",
          area: "",
          city: "",
          pincode: "",
        }
  );

  const navigate = useNavigate();

  console.log("aaa", editAdress);

  const submitAddressHandler = (e) => {
    e.preventDefault();
    navigate("/profile");

    if (editAdress) {
      setEditAddress(null);
      updateAddress(newAddress, newAddress.id);
    } else {
      addAddress(newAddress);
      setEditAddress(null);
      setCurrAddress(newAddress);
    }
  };

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="address-form-container">
        <form
          action=""
          onSubmit={submitAddressHandler}
          className="address-form"
        >
          <h2>New Address</h2>
          <hr className="hr" />
          <div className="form-details">
            <label htmlFor="">
              {" "}
              <span>Full Name</span>
              <input
                type="text"
                value={newAddress.fullname}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, fullname: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="">
              {" "}
              <span>Mobile</span>
              <input
                type="text"
                value={newAddress.mobile}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, mobile: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="">
              {" "}
              Flat
              <input
                type="text"
                value={newAddress.flat}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, flat: e.target.value })
                }
              />
            </label>
            <label htmlFor="">
              Area
              <input
                type="text"
                value={newAddress.area}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, area: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="">
              {" "}
              City
              <input
                type="text"
                value={newAddress.city}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, city: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="">
              Pincode
              <input
                type="number"
                value={newAddress.pincode}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, pincode: e.target.value })
                }
                required
              />
            </label>
          </div>
          <div className="address-btn-container">
            <button type="submit" className="common-btn">
              Add Address
            </button>
            <button
              className="common-btn green-btn"
              onClick={() =>
                setNewAddress({
                  id: uuid(),
                  fullname: "abhisek pandaa",
                  mobile: "066-45456-52",
                  flat: "Need One",
                  area: "Underground Lane Of Japan",
                  city: "Don't know Ask Your Mum",
                  pincode: "04322",
                })
              }
            >
              Guest Address
            </button>
            <button
              className="common-btn red-btn"
              onClick={() => {
                navigate("/profile");
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
