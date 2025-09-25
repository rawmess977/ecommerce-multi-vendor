import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const App = lazy(() => import("./App"));
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import {Toaster} from 'react-hot-toast'
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
        <Toaster toastOptions={
          {
            position: 'top-right',
            style: {
              background: "#293046",
              color: 'whitesmoke'
            }
          }
        } />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
