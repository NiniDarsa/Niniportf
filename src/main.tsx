import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ScrollToSectionContextProvider from "./Context/ScrollToSectionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScrollToSectionContextProvider>
      <App />
    </ScrollToSectionContextProvider>
  </StrictMode>
);
