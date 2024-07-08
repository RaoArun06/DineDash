import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
import Contact from "./components/Contact.js";
const App = ()=>{
    return (
        <Provider store={appStore}>
        <Header/>
        <Outlet/>
        <Footer/>
        </Provider>
    )
}
const rout = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Body/>
            }
            ,{
                path: "/about",
                Component: () => <h1>About Us</h1>
            }
            ,{
                path: "/contact",
                element:<Contact/>
            },{
                path: "/cart",
                element:<Cart/>
            },{
                path: "/RestaurantMenu/:resId",
                element: <RestaurantMenu/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={rout}/>);