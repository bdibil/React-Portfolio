import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header.js";


// import Section from "./components/Section";
// import Navbar from "./components/Navbar";



// const App = () => <PortfolioContainer />;


function App() {
    return (
        <div>
           
           {/*  NEED TO MOVE THE HEADER, UNCOMMENT TO SHOW ABOVE NAVBAR*/}
            {/* <Header /> */}


            <PortfolioContainer />;
            {/* <Section /> */}
        </div>
    );
}


export default App;
