import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./components/Body.js";
const App = ()=>{
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);