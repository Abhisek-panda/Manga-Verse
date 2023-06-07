import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../..";
import { Address } from "../../components/Address";
import { Header } from "../Header/Header";
import "../Profile/Profile.css";

export const Profile = () => {
  const navigate = useNavigate();
  const { token, handleLogOut } = useAuthContext();
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const logOut = () => {
    handleLogOut();
    navigate("/");
  };
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      {token && (
        <div className="profile-page">
          <div className="profile-page-container">
            <div className="profile-container background-clr-shadow">
              <div className="profile-title">
                <h2>Profile Details</h2>
              </div>
              <hr className="hr" />
              <div className="profile-details">
                <p>
                  Name: {userInfo?.firstName} {userInfo?.lastName}
                </p>
                <p>Email: {userInfo?.email}</p>
              </div>
              <div className="profile-logout">
                <button className="common-btn" onClick={logOut}>
                  LogOut
                </button>
              </div>
            </div>
            <div className="address-container background-clr-shadow">
              <h2>Address Details</h2>
              <hr className="hr" />
              <Address />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
