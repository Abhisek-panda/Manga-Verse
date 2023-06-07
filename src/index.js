import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import {
  CategoriesProvider,
  CategoriesContext,
} from "./frontend/context/CategoriesContext";
import { AuthContext, AuthProvider } from "./frontend/context/AuthContext";
import {
  ProductContext,
  ProductProvider,
} from "./frontend/context/ProductContext/ProductContext";

// Call make Server
makeServer();

export const useCategoriesContext = () => useContext(CategoriesContext);
export const useProduct = () => useContext(ProductContext);
export const useAuthContext = () => useContext(AuthContext);

ReactDOM.render(
  <React.StrictMode>
    <CategoriesProvider>
      <ProductProvider>
        <AuthProvider>
          <Router>
            <App />
          </Router>
        </AuthProvider>
      </ProductProvider>
    </CategoriesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
