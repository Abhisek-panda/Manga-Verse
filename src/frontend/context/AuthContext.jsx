import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signingUp, setSigningUp] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
  );

  const signUpHandler = async ({
    email = "",
    password = "",
    userName = "",
  }) => {
    setSigningUp(true);
    try {
      const response = await axios.post("api/auth/signup", {
        email,
        password,
        userName,
      });
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", response?.data?.encodedToken);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(response?.data?.createdUser)
        );
        setToken(response?.data?.encodedToken);
        toast.success("You have Sign Up ");
      }
      console.log("signup", response);
    } catch (error) {
      console.error(error);
      toast.error(`${error?.response?.data?.errors}`);
    }
  };

  const logInHandler = async ({ email = "", password = "" }) => {
    try {
      setIsLoggedIn(true);
      const response = await axios.post("api/auth/login", { email, password });
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", response?.data?.encodedToken);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(response?.data?.foundUser)
        );
        setToken(response?.data?.encodedToken);
        toast.success("You have Logged In");
      }
    } catch (error) {
      toast.error(`Error ${error.response.status} Something Went Wrong`);
      console.error(error);
      setIsLoggedIn(false);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setToken(null);
    setIsLoggedIn(false);
    toast.error("You have Logged Out");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        userInfo,
        logInHandler,
        handleLogOut,
        signUpHandler,
        signingUp,
        setUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
