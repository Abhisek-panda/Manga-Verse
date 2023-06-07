import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [showCategories, setShowCategories] = useState({});
  const getCategoriesData = async () => {
    try {
      const res = await fetch("/api/categories");
      console.log("Reas", res);

      const data = await res?.json();
      //   localStorage.setItem("category", data);
      //   const localData = localStorage.getItem("category");
      //   console.log(localData);
      if (res.status === 200) {
        setShowCategories(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <CategoriesContext.Provider value={{ showCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
