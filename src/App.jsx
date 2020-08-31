import React from "react";
import "./App.css";

import Cards from "./components/Cards";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Navigationbar from "./components/Navigationbar";
import Recepes from "./components/Recepes";
import Solutions from "./components/Solutions";

import Trending from "./components/Trending";

function App() {
  return (
    <div>
      <Header />
      <Features />
      <Cards />
      <Solutions />
      <Recepes />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
