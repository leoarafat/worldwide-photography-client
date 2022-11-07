import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/Routes/Router";

function App() {
  return (
    <div data-theme="cupcake" className="max-w-7xl mx-auto px-3">
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
