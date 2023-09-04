import { toast } from "react-toastify";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { Header } from "../Header/Header";
import { Sidebar } from "./ProductSidebar/Sidebar";

import { useAuthContext, useProduct } from "../../..";

import "../Products/Products.css";
import { Link, useNavigate } from "react-router-dom";

export const Products = () => {
  const { state, addToCart, productInfo, addToWishlist, removeFromWishlist } =
    useProduct();
  const { token } = useAuthContext();
  const { showProducts } = state;
  const navigate = useNavigate();

  return (
    <div className="product-page">
      <Header />
      <div className="products">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="product-listing-container">
          {showProducts.length === 0 ? (
            <p className="cart-not-present product-not-present">
              Nothing to Show
            </p>
          ) : (
            <>
              {showProducts.map((product) => {
                const cartItem = state?.cart?.find(
                  (item) => item._id === product?._id
                );
                const wishlistItem = state?.wishlist?.find(
                  (item) => item._id === product?._id
                );
                const { _id, title, author, imageURL, price, originalPrice } =
                  product;
                return (
                  <div key={_id} className="mangas">
                    <div className="manga-container">
                      <div className="manga-image-container">
                        <Link
                          to={`/products/${_id}`}
                          onClick={() => productInfo(_id)}
                        >
                          <img className="manga-cover" src={imageURL} alt="" />
                        </Link>
                      </div>
                      <div className="manga-detail">
                        <div className="manga-title-container">
                          <h2>{title}</h2>
                        </div>
                        <div className="manga-author-price">
                          <div className="manga-author-container">
                            <h3 className="manga-author">{author}</h3>
                          </div>
                          <div className="manga-price-container manga-flex">
                            <p className="manga-price">{price}</p>
                            <p className="manga-original-price">
                              {originalPrice}
                            </p>
                          </div>
                        </div>
                        <div className="manga-btns manga-flex">
                          <div className="manga-cart-btn">
                            <button
                              className="cart-btn"
                              onClick={() => {
                                if (!token) {
                                  navigate("/login");
                                  toast.error("Please Log in to Continue");
                                } else {
                                  if (!cartItem) {
                                    addToCart(product);
                                  } else {
                                    navigate("/cart");
                                  }
                                }
                              }}
                            >
                              {cartItem ? "Go to Cart" : "Add to Cart"}
                            </button>
                          </div>
                          <div
                            className="manga-wishlist"
                            onClick={() => {
                              if (!token) {
                                navigate("/login");
                                toast.error("Please Log in to Continue");
                              } else {
                                if (!wishlistItem) {
                                  addToWishlist(product);
                                } else {
                                  removeFromWishlist(product);
                                }
                              }
                            }}
                          >
                            {wishlistItem ? (
                              <BsBookmarkHeartFill className="wishlist-filled-icons" />
                            ) : (
                              <BsBookmarkHeart className="wishlist-icons" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {}
        </div>
      </div>
    </div>
  );
};
