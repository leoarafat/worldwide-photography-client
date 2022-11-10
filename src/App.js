import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/Routes/Router";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div data-theme="cupcake" className="max-w-7xl mx-auto px-3">
 <Toaster></Toaster>
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
