import { useAuthContext, useProduct } from "../../..";
import { Header } from "../Header/Header";
import "../../pages/Wishlist/Wishlist.css";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  const navigate = useNavigate();
  const { state, addToCart, removeFromWishlist, addToWishlist } = useProduct();
  const { token } = useAuthContext();

  return (
    <div>
      <Header />
      <div className="wishlist">
        {state.wishlist && (
          <div className="wishlist-container">
            {state.wishlist.map((product) => {
              const wishlistItem = state?.wishlist?.find(
                (item) => item._id === product?._id
              );
              const { _id, title, author, imageURL, price, originalPrice } =
                product;
              return (
                <div key={_id} className="mangas">
                  <div className="manga-container">
                    <div className="manga-image-container">
                      <img className="manga-cover" src={imageURL} alt="" />
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
                            onClick={() => addToCart(product)}
                          >
                            Add To Cart
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
          </div>
        )}
      </div>
    </div>
  );
};
