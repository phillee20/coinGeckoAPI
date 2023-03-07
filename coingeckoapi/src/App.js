//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import CoinList from "./components/CoinList";
import CoinSearch from "./components/CoinSearch";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header />
      <CoinSearch setSearchTerm={setSearchTerm} />
      <CoinList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
