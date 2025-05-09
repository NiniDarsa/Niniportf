import { useEffect, useState } from "react";

const useHashChange = () => {
  const [current, setCurrent] = useState("");
  useEffect(() => {
    const handleHashChange = () => {
      setCurrent(window.location.hash.slice(1));
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  return { current, setCurrent };
};
export default useHashChange;
