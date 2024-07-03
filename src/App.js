import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
const App = ()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
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
                Component: () => <h1>Contact Us</h1>
            },{
                path: "/RestaurantMenu/:resId",
                element: <RestaurantMenu/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={rout}/>);