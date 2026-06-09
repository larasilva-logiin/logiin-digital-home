import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Auto-apply dark mode based on the user's OS preference
const mql = window.matchMedia("(prefers-color-scheme: dark)");
const applyTheme = (dark: boolean) => {
  document.documentElement.classList.toggle("dark", dark);
};
applyTheme(mql.matches);
mql.addEventListener("change", (e) => applyTheme(e.matches));

createRoot(document.getElementById("root")!).render(<App />);
