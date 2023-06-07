import { Link, useLocation, useNavigate } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";
import { Header } from "../Header/Header";
import "../LogIn/LogIn.css";
import { useAuthContext } from "../../..";
import { useState } from "react";

export const LogIn = () => {
  const { isLoggedIn, logInHandler, handleLogOut } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [logInCredentials, setLogInCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = (e) => {
    console.log(navigate(location?.state?.from?.pathname));
    e.preventDefault();
    logInHandler(logInCredentials);
  };
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="login">
        <div className="login-container">
          <h2>Log In Details</h2>
        </div>
        <div className="login-form-container">
          <form action="" onSubmit={handleLogIn} className="login-form">
            <label htmlFor="" className="login-label">
              <span className="login-label-span">Email</span>
              <input
                className="login-input"
                type="email"
                value={logInCredentials.email}
                onChange={(e) =>
                  setLogInCredentials({
                    ...logInCredentials,
                    email: e.target.value,
                  })
                }
              />
            </label>
            <label htmlFor="" className="login-label">
              {" "}
              <span className="login-label-span">Password</span>
              <input
                className="login-input"
                type="password"
                value={logInCredentials.password}
                onChange={(e) =>
                  setLogInCredentials({
                    ...logInCredentials,
                    password: e.target.value,
                  })
                }
              />
            </label>
            <div className="login-btn-container">
              <button className="login-btns">
                {isLoggedIn ? "Logged In" : "logIn"}
              </button>
              <button
                className="login-btns"
                onClick={() =>
                  setLogInCredentials({
                    email: "adarshbalika@gmail.com",
                    password: "adarshbalika",
                  })
                }
              >
                Log In as A Guest
              </button>
            </div>
          </form>
          <div className="signup-btn-container">
            <Link to="/signup" className="signup-btn-link">
              Create an Account <MdNavigateNext className="signup-span" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
