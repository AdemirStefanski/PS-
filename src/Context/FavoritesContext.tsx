"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface FavoritesContextData {
  favorites: number[]; 
  toggleFavorite: (courseId: number) => void;
  favoritesFilter: boolean; 
  toggleFavoritesFilter: () => void;
}

const FavoritesContext = createContext<FavoritesContextData | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [favoritesFilter, setFavoritesFilter] = useState(false);

  const toggleFavorite = (courseId: number) => {
    setFavorites((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const toggleFavoritesFilter = () => {
    setFavoritesFilter((prev) => !prev);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, favoritesFilter, toggleFavoritesFilter }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
