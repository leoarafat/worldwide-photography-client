import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import AddReview from "../pages/AddReview/AddReview";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyServices from "../pages/MyServices/MyServices";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import ServicesDetails from "../pages/ServicesDetails/ServicesDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    element: <Main />,
    children: [
      {
        path: "/",
        loader: ()=> fetch('http://localhost:5000/service'),
        element: <Home />,
      },
      {
        path: "/home",
        loader: ()=> fetch('http://localhost:5000/service'),
        element: <Home />,
      },
      {
        path: "/service",
        element: (
          <PrivateRoutes>
            <Services />
          </PrivateRoutes>
        ),
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
        loader: ()=> fetch('http://localhost:5000/allService'),
        element: <MyServices/>
      },
      {
        path: "/review", element: <AddReview/>
      },
      {
        path: '/services/:id', element: <ServicesDetails/>
      }
    ],
  },
]);
