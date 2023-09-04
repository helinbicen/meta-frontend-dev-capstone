import "./App.css";
import CardsContainer from "./components/CardsContainer";

import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />

      <Hero />

      <CardsContainer />
    </div>
  );
}

export default App;
