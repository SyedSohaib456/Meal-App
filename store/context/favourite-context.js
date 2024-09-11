import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {}, 
  removeFavorite: (id) => {}, 
});

function FavoritesContextProvider({ children }) {
  const [favouriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((currentfavIds) => [...currentfavIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((currentfavIds) =>
      currentfavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favouriteMealIds,
    addFavorite: addFavorite, 
    removeFavorite: removeFavorite, 
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
