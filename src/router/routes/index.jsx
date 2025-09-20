import { privateRoutes } from './privateRoutes';
import { lazy } from "react";

const MainLayout = lazy(() => import("../../layout/MainLayout"));

const  getRoutes = () => [
  {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  },
];

export  {getRoutes};
