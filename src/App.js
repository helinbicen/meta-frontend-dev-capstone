import "./App.css";
import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Reservations from "./components/Reservations";
import Testimonials from "./components/Testimonials";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Hero />

      <CardsContainer />

      <Reservations />

      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;
