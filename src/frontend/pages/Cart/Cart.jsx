import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

import { Header } from "../Header/Header";
import { useProduct } from "../../..";
import "../Cart/Cart.css";
import { Link } from "react-router-dom";

export const Cart = () => {
  const {
    state: { cart },
    totalCartPrice,
    totalCartOriginalPrice,
    totalCartDiscount,
    removeFromCart,
    increaseCountCart,
    decreaseCartCount,
  } = useProduct();
  return (
    <div>
      <div className="cart-header">
        <Header />
      </div>
      <div>
        {cart.length === 0 ? (
          <p className="cart-not-present">Add to Cart Something</p>
        ) : (
          <div className="cart-divider">
            <div className="cart-container">
              <>
                {cart.map((product) => {
                  const {
                    _id,
                    title,
                    author,
                    imageURL,
                    price,
                    originalPrice,
                    quantity,
                  } = product;
                  return (
                    <div>
                      <div key={_id} className="mangas ">
                        <div className="manga-container cart-details">
                          <div className="manga-image-container cart-img-container">
                            <img
                              className="manga-cover"
                              src={imageURL}
                              alt=""
                            />
                          </div>
                          <div className="cart-product-details">
                            <div className="cart-title">
                              <h2>{title}</h2>
                            </div>
                            <div className="cart-author">
                              <h4>{author}</h4>
                            </div>
                            <div className="manga-price-container manga-flex cart-price">
                              <h4>Price: </h4>
                              <p className="manga-price"> {price}</p>
                              <p className="manga-original-price">
                                {originalPrice}
                              </p>
                            </div>
                            <div className="quantity-btns-container">
                              <FiMinusCircle
                                className="quantity-btns"
                                onClick={() => decreaseCartCount(product)}
                              />
                              <p>{quantity}</p>
                              <FiPlusCircle
                                className="quantity-btns"
                                onClick={() => increaseCountCart(product)}
                              />
                            </div>
                            <div className="manga-btns manga-flex cart-btns-container">
                              <div className="manga-cart-btn">
                                <button
                                  className="cart-btn remove-cart-btn"
                                  onClick={() => removeFromCart(product)}
                                >
                                  Remove From Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
            <div className="cart-reducer">
              <h2 className="cart-price-title">Price Details</h2>
              <hr className="hr" />
              <p className="cart-price-reducer">
                Price{" "}
                <span className="cart-length-span">
                  ( {cart.length} items )
                </span>{" "}
                :
                <span className="cart-price-span">
                  {totalCartOriginalPrice}
                </span>
              </p>
              <p className="cart-price-reducer">
                Discount :{" "}
                <span className="cart-price-span">{totalCartDiscount}</span>
              </p>
              <p className="cart-price-reducer">
                Delivery Charges : <span className="cart-price-span">0</span>
              </p>
              <hr className="hr" />
              <p className="cart-price-reducer cart-total-price">
                Total Price :{" "}
                <span className="cart-price-span">{totalCartPrice}</span>
              </p>
              <Link to="/checkout" className="checkout-link">
                <button className="checkout-btn cart-btn">Checkout</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
