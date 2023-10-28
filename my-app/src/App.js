import "./App.css";
import About from "./Components/About/About";
import CommonHeader from "./Components/About/CommonHeader";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Main from "./Components/Main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/store", element: [<Header />, <Home />] },
  { path: "/about", element: [<CommonHeader />, <About />] },
  {path:"/home",element:[<CommonHeader/>,<Main/>]}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
