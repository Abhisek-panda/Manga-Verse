import { useState } from "react";
import { useAuthContext } from "../../..";
import { Header } from "../Header/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";

import "../SignUp/SignUp.css";

export const SignUp = () => {
  const [signUpCredentials, setSignUpCredentials] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const { signUpHandler } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = (event) => {
    event.preventDefault();
    signUpHandler(signUpCredentials);
    navigate("/");
  };
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="signup-page">
        <div className="signup-title">
          <h2>Sign Up</h2>
        </div>
        <div className="signup-form-container">
          <form action="" onSubmit={handleSignUp} className="signup-form">
            <label htmlFor="" className="signup-label login-label">
              <span className="signup-label-span">Email</span>
              <input
                className="signup-input login-input"
                type="email"
                value={signUpCredentials.email}
                onChange={(event) => {
                  setSignUpCredentials({
                    ...signUpCredentials,
                    email: event.target.value,
                  });
                }}
                required
              />
            </label>
            <label htmlFor="" className="signup-label login-label">
              <span className="signup-label-span">PassWord</span>
              <input
                className="signup-input login-input"
                type="password"
                value={signUpCredentials.password}
                onChange={(event) => {
                  setSignUpCredentials({
                    ...signUpCredentials,
                    password: event.target.value,
                  });
                }}
                required
              />
            </label>
            <label htmlFor="" className="signup-label login-label">
              <span className="signup-label-span">User Name</span>
              <input
                className="signup-input login-input"
                type="text"
                value={signUpCredentials.userName}
                onChange={(event) => {
                  setSignUpCredentials({
                    ...signUpCredentials,
                    userName: event.target.value,
                  });
                }}
                required
              />
            </label>
            <button className="signup-btn login-btns">SignUp</button>
            <Link to="/login" className="signup-btn-link login-btn-link">
              Account Already Exist <MdNavigateNext className="signup-span" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
