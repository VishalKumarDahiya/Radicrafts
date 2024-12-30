import React from "react";
import Navbar from "./Navbar"
import radicraftLogo from   "../public/assets/radicrafts.svg";
import "../public/styles.css";


function App() {

    return <>
        <Navbar></Navbar>
        <div className="mainContent">
            <div className="logo">
                <img src={radicraftLogo} alt="radicraft-logo"  />
            </div>
            <div className="tagline">
                <p>We are building an amazing website where you can purchage, customize and consult gift items for your loved ones as well as home decor items</p>
            </div>
        </div>
        </>
        
}

export default App;