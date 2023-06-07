import { useState } from "react";
import { useProduct } from "../../../..";

import "../../Products/ProductSidebar/Sidebar.css";

export const Sidebar = () => {
  const { state, changeFilters, dispatch } = useProduct();
  const [value, setValue] = useState(state?.fitlers?.priceRange);

  const filterPrice = (event) => {
    setValue(event.target.value);
    dispatch({ type: "FILTER_PRICE", payload: value });
  };

  return (
    <div>
      <div>
        <div className="filters">
          <div className="filter-header filter-margin-left">
            <h3 className="filter-header-text">Customize </h3>
            <button
              className="clear-btn"
              onClick={() => dispatch({ type: "CLEAR_FILTER" })}
            >
              Clear
            </button>
          </div>
          <div className="filter-price-container filter-margin-left">
            <h3 className="filters-text ">Price</h3>
            <div className="filter-by-price">
              <input
                type="range"
                name="filter-price"
                min="200"
                max="3500"
                value={state?.filters?.priceRange}
                className="input-range"
                onChange={(event) => filterPrice(event)}
              />
            </div>
          </div>
          <div className="filter-category-container filter-margin-left">
            <h3 className="filters-text ">Category</h3>
            <div className="filter-by-category">
              <>
                <div className="category-input-container">
                  <label className="category-input-label">
                    <input
                      type="checkbox"
                      name="category-filter"
                      value="action"
                      onChange={(event) => {
                        dispatch({ type: "SET_ACTION", payload: event.target });
                      }}
                    />
                    Action
                  </label>
                  <label className="category-input-label">
                    <input
                      type="checkbox"
                      name="category-filter"
                      value="sports"
                      onChange={(event) => {
                        dispatch({ type: "SET_SPORTS", payload: event.target });
                      }}
                    />
                    Sports
                  </label>
                  <label className="category-input-label">
                    <input
                      type="checkbox"
                      name="category-filter"
                      value="horror"
                      onChange={(event) => {
                        dispatch({ type: "SET_HORROR", payload: event.target });
                      }}
                    />
                    Horror
                  </label>
                  <label className="category-input-label">
                    <input
                      type="checkbox"
                      name="category-filter"
                      value="fiction"
                      onChange={(event) => {
                        dispatch({
                          type: "SET_FICTION",
                          payload: event.target,
                        });
                      }}
                    />
                    Fiction
                  </label>
                </div>
              </>
            </div>
          </div>

          <div className="filter-rating-container filter-margin-left">
            <h3 className="filters-text">Rating</h3>

            <div className="filter-by-rating">
              <div className="rating-input-container">
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  checked={state?.filters?.checkRating === "1"}
                  onChange={(event) => {
                    dispatch({
                      type: "SET_RATING",
                      payload: event.target.value,
                    });
                  }}
                />
                <label>1 Star Rating</label>
              </div>

              <div className="rating-input-container">
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  checked={state?.filters?.checkRating === "2"}
                  onChange={(event) => {
                    dispatch({
                      type: "SET_RATING",
                      payload: event.target.value,
                    });
                  }}
                />
                <label>2 Star Rating</label>
              </div>

              <div className="rating-input-container">
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  checked={state?.filters?.checkRating === "3"}
                  onChange={(event) => {
                    dispatch({
                      type: "SET_RATING",
                      payload: event.target.value,
                    });
                  }}
                />
                <label>3 Star Rating</label>
              </div>

              <div className="rating-input-container">
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  checked={state?.filters?.checkRating === "4"}
                  onChange={(event) => {
                    dispatch({
                      type: "SET_RATING",
                      payload: event.target.value,
                    });
                  }}
                />
                <label>4 Star Rating</label>
              </div>
            </div>
          </div>
          <div className="sort-price-container filter-margin-left">
            <h3 className="filters-text">Sort by Price</h3>
            <div className="sort-price">
              <div className="sort-input-container">
                <input
                  type="radio"
                  name="sort"
                  value="lowToHigh"
                  onChange={(event) => {
                    dispatch({ type: "SORT_PRICE", payload: event.target });
                  }}
                />
                <label>Low To High</label>
              </div>
              <div className="sort-input-container">
                <input
                  type="radio"
                  name="sort"
                  value="highToLow"
                  onChange={(event) => {
                    dispatch({ type: "SORT_PRICE", payload: event.target });
                  }}
                />
                <label>High to Low</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
