import React from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards"
import Start from "../Components/Start"

function Home() {
    return (
        <div className="home-section">
            <Navbar />
            <Cards />
        </div>
    );
}

export default Home;