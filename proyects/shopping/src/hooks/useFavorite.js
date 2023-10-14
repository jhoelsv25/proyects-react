import { useState } from "react";

export const useFavorite = () => {
  const [favorite, setFavorite] = useState(false);

  return { favorite, setFavorite };
};
