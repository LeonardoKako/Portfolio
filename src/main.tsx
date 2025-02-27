import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { SetLanguageProvider } from "./context/SetLanguage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SetLanguageProvider>
      <App />
    </SetLanguageProvider>
  </StrictMode>
);
