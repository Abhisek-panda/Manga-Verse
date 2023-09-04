import "../ProductInfo/productInfo.css";
import { Header } from "../Header/Header";
import { useAuthContext, useProduct } from "../../..";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";

export const ProductInfo = () => {
  const navigate = useNavigate();
  const { token } = useAuthContext();
  const { state, addToCart, removeFromWishlist, addToWishlist } = useProduct();
  const cartItem = state?.cart?.find(
    (item) => item._id === state.productInfo?._id
  );
  const wishlistItem = state?.wishlist?.find(
    (item) => item._id === state.productInfo?._id
  );
  return (
    <div className="product-info-container">
      <Header />
      <div className="manga-product-details">
        {state?.productInfo && (
          <>
            <div className="manga-product-info-page">
              <div className="product-info-image-container">
                <img
                  src={state?.productInfo?.imageURL}
                  alt={state.productInfo.title}
                />
              </div>
              <div className="product-info-description-details">
                <div className="product-info-title">
                  <h1>{state?.productInfo?.title}</h1>
                </div>
                <div className="product-info-author-container product-info-text-design">
                  <p>
                    <span className="product-span">Author:</span>{" "}
                    {state?.productInfo?.author}
                  </p>
                </div>
                <div className="product-info-rating-container product-info-text-design">
                  <p>
                    <span className="product-span">Rating:</span>{" "}
                    {state?.productInfo?.rating}
                  </p>
                </div>
                <div className="product-info-price-container product-info-text-design">
                  <p>
                    <span className="product-span">Price:</span>{" "}
                    <span className="manga-price">
                      {state?.productInfo?.price}
                    </span>
                  </p>
                  <p className="manga-original-price">
                    {state?.productInfo?.originalPrice}
                  </p>
                </div>
                <div className="product-info-publisher product-info-text-design">
                  <p>
                    <span className="product-span">Publisher: </span>
                    {state?.productInfo?.publisher}
                  </p>
                </div>
                <div className="product-info-category product-info-text-design">
                  <p>
                    <span className="product-span">Category: </span>
                    {state?.productInfo?.categoryName}
                  </p>
                </div>
                <div className="product-info-description product-info-text-design">
                  <p>{state?.productInfo?.description}</p>
                </div>
                <div className="product-info-btn-container ">
                  <button
                    className="cart-btn product-info-cart-btn"
                    onClick={() => {
                      if (!token) {
                        navigate("/login");
                        toast.error("Please Log in to Continue");
                      } else {
                        if (!cartItem) {
                          addToCart(state?.productInfo);
                        } else {
                          navigate("/cart");
                        }
                      }
                    }}
                  >
                    {cartItem ? "Go to Cart" : "Add to Cart"}
                  </button>
                  <div
                    className="manga-wishlist"
                    onClick={() => {
                      if (!token) {
                        navigate("/login");
                        toast.error("Please Log in to Continue");
                      } else {
                        if (!wishlistItem) {
                          addToWishlist(state?.productInfo);
                        } else {
                          removeFromWishlist(state?.productInfo);
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
          </>
        )}
      </div>
    </div>
  );
};
