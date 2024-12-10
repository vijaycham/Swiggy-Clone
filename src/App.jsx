import React, { lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Error from "./Components/Error.jsx";
import RestauntsMenu from "./Components/RestaurantsMenu.jsx";
import Shimmer from "./Components/Shimmer.jsx";

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback= {<Shimmer/>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resID",
        element: <RestauntsMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
