import "./App.css";
import About from "./Components/About/About";
import CommonHeader from "./Components/About/CommonHeader";
import Colors from "./Components/Colors";
import ContactUs from "./Components/ContactUs/ContactUs";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Main from "./Components/Main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product2 from "./Components/Product2";
import Product3 from "./Components/Product3";
import Login from "./Components/Login/Login";
import LoginHeader from "./Components/Login/LoginHeader";
const router = createBrowserRouter([
  { path: "/", element: [<LoginHeader />, <Login />] },
  { path: "/store", element: [<Header />, <Home />] },
  { path: "/store/store", element: [<Header />, <Home />] },
  { path: "/about", element: [<CommonHeader />, <About />] },
  { path: "store/about", element: [<CommonHeader />, <About />] },
  { path: "/home", element: [<CommonHeader />, <Main />] },
  { path: "store/home", element: [<CommonHeader />, <Main />] },
  { path: "/contactUS", element: [<CommonHeader />, <ContactUs />] },
  { path: "store/contactUS", element: [<CommonHeader />, <ContactUs />] },
  {path:"/store/Colors",element:[<CommonHeader />, <Colors />]},
  {path:"/store/Black and white Colors",element:[<CommonHeader />, <Product2 />]},
  {path:"/store/Yellow and Black Colors",element:[<CommonHeader />, <Product3 />]},
  { path: "/login", element: [<LoginHeader />, <Login />] },
  { path: "/store/login", element: [<LoginHeader />, <Login />] }

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
