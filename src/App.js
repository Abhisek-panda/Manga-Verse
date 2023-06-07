import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { Home } from "./frontend/pages/Home/Home";
import { Products } from "./frontend/pages/Products/Products";
import { Cart } from "./frontend/pages/Cart/Cart";
import { ProductInfo } from "./frontend/pages/ProductInfo/ProductInfo";
import { Wishlist } from "./frontend/pages/Wishlist/Wishlist";
import { LogIn } from "./frontend/pages/LogIn/LogIn";
import { RequiresAuth } from "./frontend/components/RequiresAuth";
import { SignUp } from "./frontend/pages/SignUp/SignUp";
import { Profile } from "./frontend/pages/Profile/Profile";
import { AddresssForm } from "./frontend/components/AddressForm";
import { Checkout } from "./frontend/pages/Checkout/Checkout";
import { OrderSummary } from "./frontend/pages/Checkout/OrderSummary";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock-api" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/products/:productId" element={<ProductInfo />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route path="/address-form" element={<AddresssForm />} />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <Checkout />
            </RequiresAuth>
          }
        />
        <Route
          path="/order-summary"
          element={
            <RequiresAuth>
              <OrderSummary />
            </RequiresAuth>
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}

export default App;
