import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import About from "../pages/About/About";
import AddReview from "../pages/AddReview/AddReview";
import AddService from "../pages/AddService/AddService";
import AllService from "../pages/AllService/AllService";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import MyServices from "../pages/MyServices/MyServices";
import Register from "../pages/Register/Register";

import ServicesDetails from "../pages/ServicesDetails/ServicesDetails";
import Update from "../pages/Update/Update";
import UserReview from "../pages/UserReview/UserReview";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://assignment-11-server-iota.vercel.app/service"),
        element: <Home />,
      },
      {
        path: "/home",
        loader: () => fetch("https://assignment-11-server-iota.vercel.app/service"),
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myServices",
        loader: () => fetch("https://assignment-11-server-iota.vercel.app/allService"),
        element: <MyServices />,
      },
      {
        path: "/review/:id",
        loader: ({ params }) =>
          fetch(`https://assignment-11-server-iota.vercel.app/allService/${params.id}`),

        element: (
          <PrivateRoutes>
            <AddReview />
          </PrivateRoutes>
        ),
      },

      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`https://assignment-11-server-iota.vercel.app/allService/${params.id}`),
        element: <ServicesDetails />,
      },

      {
        path: "/myReview",
        loader: () => fetch("https://assignment-11-server-iota.vercel.app/feedback"),
        element: (
          <PrivateRoutes>
            <MyReviews />
          </PrivateRoutes>
        ),
      },
      

      {
        path: "/addService",
        element: <AddService />,
      },
      // {
      //   path: "/userReview",
      //   element: <UserReview />,
      // },
      {
        path: "/allService",
        loader: () => fetch("https://assignment-11-server-iota.vercel.app/allService"),
        element: <AllService />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
     
      {
        path: "/about", element: <About/>
      },
      {
        path: "/contact", element: <Contact/>
      }
    ],
  },
]);
