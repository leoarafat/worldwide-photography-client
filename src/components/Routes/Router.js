import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main/>,children: [
            {
                path: '/', element: <Home/>
            },
            {
                path: '/service', element: <Services/>
            },
            {
                path: '/login', element: <Login/>
            },
            {
                path: '/register', element: <Register/>
            },
        ]
    }
])