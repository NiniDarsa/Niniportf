import { useContext } from "react";
import { ScrollToSectionContext } from "./ScrollToSectionContext";

const useScrollToSectionContext = () => {
  const context = useContext(ScrollToSectionContext);
  if (!context) {
    throw new Error(
      "useScrollToSectionContext must be used within a ScrollToSectionContextProvider"
    );
  }
  return context;
};
export default useScrollToSectionContext;
