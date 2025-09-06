import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const App = lazy(() => import("./App"));
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense>
        <App />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
