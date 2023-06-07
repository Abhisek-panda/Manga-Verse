export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        allProducts: action.payload,
        showProducts: action.payload,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: action.payload,
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: action.payload,
      };

    case "INCREASE_COUNT_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "DECREASE_COUNT_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "PRODUCT_INFO":
      return {
        ...state,
        productInfo: state.showProducts.find(
          (item) => item._id.toString() === action.payload.toString()
        ),
      };

    // ! Filters:

    // case "SEARCH_FILTER":
    //   return {
    //     ...state,
    //     filters: { ...state?.filters, searchText: action.payload },
    //   };

    case "SEARCH_FILTER": {
      if (action.payload === "") {
        return {
          ...state,
          showProducts: state.allProducts,
        };
      } else {
        return {
          ...state,
          showProducts: state.allProducts.filter(({ title }) =>
            title.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      }
    }

    case "FILTER_BY_PRICE":
      return {
        ...state,
        filters: {
          ...state.fitlers,
          priceRange: action.payload,
        },
      };

    case "SET_ACTION": {
      if (action.payload.value === "action" && action.payload.checked) {
        return {
          ...state,
          showProducts: [...state.showProducts].filter(
            (item) => item.categoryName === action.payload.value
          ),
          filters: {
            ...state.filters,
            category: [...state.filters.category, action.payload.value],
          },
        };
      } else {
        const fillArr = state.filters.category.filter(
          (ele) => ele !== action.payload.value
        );
        return {
          ...state,
          filters: { ...state.filters, category: fillArr },
        };
      }
    }
    case "SET_SPORTS": {
      if (action.payload.value === "sports" && action.payload.checked) {
        return {
          ...state,
          filters: {
            ...state.filters,
            category: [...state.filters.category, action.payload.value],
          },
        };
      } else {
        const fillArr = state.filters.category.filter(
          (ele) => ele !== action.payload.value
        );
        return {
          ...state,
          filters: { ...state.filters, category: fillArr },
        };
      }
    }
    case "SET_HORROR": {
      if (action.payload.value === "horror" && action.payload.checked) {
        return {
          ...state,
          filters: {
            ...state.filters,
            category: [...state.filters.category, action.payload.value],
          },
        };
      } else {
        const fillArr = state.filters.category.filter(
          (ele) => ele !== action.payload.value
        );
        return {
          ...state,
          filters: { ...state.filters, category: fillArr },
        };
      }
    }
    case "SET_FICTION": {
      if (action.payload.value === "fiction" && action.payload.checked) {
        return {
          ...state,
          filters: {
            ...state.filters,
            category: [...state.filters.category, action.payload.value],
          },
        };
      } else {
        const fillArr = state.filters.category.filter(
          (ele) => ele !== action.payload.value
        );
        return {
          ...state,
          filters: { ...state.filters, category: fillArr },
        };
      }
    }
    case "SHOW_PRODUCTS":
      return {
        ...state,
        showProducts: action.payload,
      };

    case "SET_RATING": {
      return {
        ...state,
        filters: {
          ...state.filters,
          rating: action.payload,
          checkRating: action.payload,
        },
      };
    }
    case "SORT_PRICE": {
      if (action.payload.checked && action.payload.value === "highToLow") {
        return {
          ...state,
          showProducts: [...state.showProducts].sort(
            (a, b) => a.price - b.price
          ),
          filters: {
            ...state.filters,
            sortBy: action.payload.value,
          },
        };
      } else {
        return {
          ...state,
          showProducts: [...state.showProducts].sort(
            (a, b) => a.price - b.price
          ),
        };
      }
    }

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          searchText: "",
          rating: "",
          sortBy: "",
          priceRange: 3500,
          category: [],
        },
      };

    // address
    case "ADD_ADDRESS":
      return { ...state, address: action.payload };
    case "EDIT_ADDRESS":
      return { ...state, address: action.payload };
    case "REMOVE_ADDRESS":
      return { ...state, address: action.payload };
    case "CHECKOUT_ADDRESS":
      return { ...state, checkoutAddress: action.payload };
    default:
      return state;
  }
};
