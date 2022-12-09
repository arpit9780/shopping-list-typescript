import React from "react";
import "./App.css";
import { Header } from "./Layout/Header";
import { Footer } from "./Layout/Footer";
import Shopingform from "./Components/Shopingform";

function App() {
  return (
    <>
      <Header />
      <div>
        <Shopingform />
      </div>
      <Footer />
    </>
  );
}

export default App;
