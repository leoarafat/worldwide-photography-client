import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import AddReview from "../pages/AddReview/AddReview";
import AddService from "../pages/AddService/AddService";
import AllService from "../pages/AllService/AllService";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import MyServices from "../pages/MyServices/MyServices";
import Register from "../pages/Register/Register";

import ServicesDetails from "../pages/ServicesDetails/ServicesDetails";
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
        loader: () => fetch("http://localhost:5000/service"),
        element: <Home />,
      },
      {
        path: "/home",
        loader: () => fetch("http://localhost:5000/service"),
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
        loader: () => fetch("http://localhost:5000/allService"),
        element: <MyServices />,
      },
      {
        path: "/review/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allService/${params.id}`),

        element: (
          <PrivateRoutes>
            <AddReview />
          </PrivateRoutes>
        ),
      },

      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allService/${params.id}`),
        element: <ServicesDetails />,
      },
      {
        path: "/myReview",
        loader: () => fetch("http://localhost:5000/feedback"),
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
      {
        path: "/userReview",
        element: <UserReview />,
      },
      {
        path: "/allService",
        loader: () => fetch("http://localhost:5000/allService"),
        element: <AllService />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
