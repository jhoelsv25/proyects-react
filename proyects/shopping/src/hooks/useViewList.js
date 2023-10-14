import { useContext, useState } from "react";
import { ViewListContext } from "../contexts/viewContext";

export const useViewList = () => {
  const { view, setView } = useContext(ViewListContext);

  return { view, setView };
};
