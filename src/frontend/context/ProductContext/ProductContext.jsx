import { createContext, useEffect, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";

import { ProductReducer } from "../../Reducer/ProductReducer/ProductReducer";
import { toast } from "react-toastify";

export const ProductContext = createContext();

export const initialState = {
  allProducts: [],
  cart: [],
  wishlist: [],
  category: [],
  loading: false,
  error: "",
  productInfo: {},
  showProducts: [],
  filters: {
    searchText: "",
    rating: "",
    sortBy: "",
    priceRange: "2500",
    category: [],
  },
  address: [
    {
      id: uuid(),
      fullname: "abhisek panda",
      mobile: "066-45456-52",
      flat: "10786",
      area: "Laxmisagar Pada",
      city: "Junagarh",
      pincode: "04322",
    },
  ],
  checkoutAddress: {},
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const [checkoutAddress, setCheckoutAddress] = useState("Deliverable Address");
  const [currAddress, setCurrAddress] = useState(state.address[0]);
  const [editAdress, setEditAddress] = useState(null);

  const getProductData = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      const { products } = data;
      if (res.status === 200) {
        dispatch({ type: "FETCH_SUCCESS", payload: products });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addAddress = (newAddress) => {
    dispatch({
      type: "ADD_ADDRESS",
      payload: [newAddress, ...state.address],
    });
    toast.success("New Address Updated");
  };

  const updateAddress = (updatedAddress, addressId) => {
    dispatch({
      type: "UPDATE_ADDRESS",
      payload: state.address.map((item) =>
        item.id === addressId ? updatedAddress : item
      ),
    });
    if (currAddress.id === addressId) {
      setCurrAddress(updatedAddress);
    }
  };
  const removeAddress = (addressId) => {
    toast.error("Ohh Noo");
    dispatch({
      type: "REMOVE_ADDRESS",
      payload: state.address.filter((item) => item.id !== addressId),
    });
  };

  useEffect(() => {
    getProductData();
  }, []);

  const lowToHigh = () => {
    dispatch({ type: "SORT_LOW_TO_HIGH" });
  };

  const highToLow = () => {
    dispatch({ type: "SORT_HIGH_TO_LOW" });
  };

  const filterBySlider = (event) => {
    state.value = event.target.value;
    dispatch({ type: "FILTER_BY_SLIDER", payload: event.target.value });
  };

  const productInfo = (id) => {
    dispatch({ type: "PRODUCT_INFO", payload: id });
  };

  // todo CART-functions

  const addToCart = (product) => {
    const { _id } = product;
    const isProductPresent = state.cart.find(
      (item) => item._id.toString() === _id.toString()
    );

    if (!isProductPresent) {
      toast.success(`${product.title} added to Cart.`);
      dispatch({ type: "ADD_TO_CART", payload: [...state.cart, product] });
    } else {
      toast.success(`${product.title} added to Cart.`);
      const newCart = state?.cart?.map((item) =>
        item?._id?.toString() === _id?.toString()
          ? {
              ...item,
              quantity: Number(item?.quantity + 1),
              cartAdded: false,
            }
          : item
      );
      dispatch({ type: "ADD_TO_CART", payload: newCart });
    }
  };

  const removeFromCart = (product) => {
    toast.warning(`${product.title} removed from Cart.`);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: state.cart.filter((item) => item?._id !== product?._id),
    });
  };

  // todo WISHLIST functions

  const addToWishlist = (product) => {
    toast.success(`${product.title} added to Wishlist.`);
    const isProductPresent = state.wishlist.find(
      (item) => item._id === product._id
    );

    if (!isProductPresent) {
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: [...state.wishlist, product],
      });
    } else {
      const newWishlist = state.wishlist.map((item) =>
        item._id === product._id ? { ...item, product } : item
      );
      dispatch({ type: "ADD_TO_WISHLIST", payload: newWishlist });
    }
  };

  const removeFromWishlist = (product) => {
    toast.warning(`${product.title} removed from wishlist`);
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: state.wishlist.filter((item) => item?._id !== product?._id),
    });
  };

  // ! product Count functions

  const increaseCountCart = (product) => {
    const isProductPresent = state.cart.find(
      (item) => item._id === product?._id
    );

    isProductPresent &&
      dispatch({
        type: "INCREASE_COUNT_CART",
        payload: state.cart.map((item) =>
          item?._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
  };
  const decreaseCartCount = (product) => {
    const { quantity } = product;
    const isProductPresent = state.cart.find(
      (item) => item._id === product?._id
    );

    isProductPresent &&
      dispatch({
        type: "DECREASE_COUNT_CART",
        payload: state.cart.map((item) =>
          item?._id === product._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      });
    if (quantity <= 1) {
      removeFromCart(product);
    }
  };

  // todo cart-price-reducer

  const totalCartOriginalPrice = state.cart.reduce(
    (acc, curr) => Number(acc) + Number(curr.originalPrice * curr.quantity),
    0
  );

  const totalCartPrice = state.cart.reduce(
    (acc, curr) => Number(acc) + Number(curr.price * curr.quantity),
    0
  );

  const totalCartDiscount =
    Number(totalCartOriginalPrice) - Number(totalCartPrice);

  const changeFilters = (filterType, filterValue) => {
    dispatch({ type: "CHANGE_FILTERS", payload: { filterType, filterValue } });
  };

  useEffect(() => {
    let data = [...state.allProducts];
    const searchText =
      state.filters.searchText !== " "
        ? data.filter(({ title }) =>
            title.toLowerCase().includes(state.filters.searchText.toLowerCase())
          )
        : data;

    const filterByPrice = state.filters.priceRange
      ? searchText.filter(
          ({ price }) => Number(price) <= Number(state.filters.priceRange)
        )
      : searchText;

    const filterByCategory = state.filters.category.length
      ? filterByPrice.filter(({ categoryName }) =>
          state.filters.category.includes(categoryName)
        )
      : filterByPrice;

    const filterByRating =
      state.filters.rating !== ""
        ? filterByCategory.filter(
            ({ rating }) => Number(rating) <= Number(state.filters.rating)
          )
        : filterByCategory;

    const sortByPrice = state.filters.sortBy
      ? [...filterByRating].sort((a, b) =>
          state.filters.sortBy === "highToLow"
            ? b.price - a.price
            : a.price - b.price
        )
      : filterByRating;

    dispatch({ type: "SHOW_PRODUCTS", payload: sortByPrice });
  }, [state.filters]);

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        lowToHigh,
        highToLow,
        filterBySlider,
        addToCart,
        productInfo,
        addToWishlist,
        totalCartOriginalPrice,
        totalCartPrice,
        totalCartDiscount,
        removeFromCart,
        removeFromWishlist,
        increaseCountCart,
        decreaseCartCount,
        initialState,
        editAdress,
        setEditAddress,
        addAddress,
        updateAddress,
        removeAddress,
        setCurrAddress,
        checkoutAddress,
        setCheckoutAddress,
        changeFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
