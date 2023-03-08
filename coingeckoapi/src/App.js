//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import CoinList from "./components/CoinList";
import CoinSearch from "./components/CoinSearch";
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header />
      <Routes>
        <CoinSearch setSearchTerm={setSearchTerm} />
        <CoinList searchTerm={searchTerm} />
      </Routes>
    </div>
  );
}

export default App;
