import { Link, useNavigate } from "react-router-dom";

import { Header } from "../Header/Header";
import "../Home/Home.css";
import { useCategoriesContext } from "../../..";

export const Home = () => {
  const navigate = useNavigate();
  const { showCategories } = useCategoriesContext();
  const { categories } = showCategories;
  console.log(categories);

  return (
    <div className="home-container">
      <Header />
      <div className="hero-section">
        <div className="hero-img-container"></div>
        <div className="hero-text-container">
          <div className="hero-main-text">Manga Verse</div>
          <div className="hero-sub-text">
            Manga, a popular Japanese art form, captivates readers with its
            unique storytelling, vibrant illustrations, and diverse range of
            genres.
          </div>
          <div className="hero-btn-container">
            <Link to="/products" className="link-btn">
              <button className="hero-btn">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="category-container">
        <h1 className="category-header">Category</h1>
        <hr className="category-line" />

        <div className="cont">
          {categories && (
            <>
              {categories.map((category) => {
                const { _id, categoryName, image } = category;
                return (
                  <div className="category-card-container" key={_id}>
                    <div className="category-card-text-container">
                      <h2
                        className="category-card-header"
                        onClick={() => navigate("/products")}
                      >
                        {categoryName}
                      </h2>
                    </div>
                    <div className="category-card-image-container">
                      <img src={image} alt="" className="category-card-image" />
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
