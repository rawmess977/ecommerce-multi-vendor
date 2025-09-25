// import { privateRoutes } from './privateRoutes';
import { lazy, Suspense } from "react";
import { privateRoutes } from './privateRoutes';

const MainLayout = lazy(() => import("../../layout/MainLayout"));

const getRoutes = () => [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      { path: "test", element: <div>Test</div> },
      ...privateRoutes,
    ],
  },
];

export { getRoutes };
