import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/Routes/Router";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { userContext } from "./components/AuthProvider/AuthContext";
import Loader from "./components/Loading/Loader";
function App() {
  const { loading } = useContext(userContext);
  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div data-theme="cupcake" className="max-w-7xl mx-auto px-3">
      {loading && <Loader />}
      <Toaster></Toaster>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
