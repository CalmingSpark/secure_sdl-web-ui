import React from "react";
import Banner from "./components/UI/banner/Banner";
import './styles/App.css';
import Topics from "./topics/Topics";
import Footer from "./components/UI/footer/Footer";

function App() {
    return (
        <div>

            <Banner/>
            <Topics/>
            <Footer/>
        </div>
    );
}

export default App;
