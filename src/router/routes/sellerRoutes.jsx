import { lazy } from "react";

const Home = lazy(() => import("../../views/pages/Home"));

export const sellerRoutes = [
  {
    index: true,
    element: <Home />,
    ability: ["admin", "seller"], // you still need a guard for this!
  },
];
