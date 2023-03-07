import { useState } from "react";
import "../App.css";

function CoinSearch({ setSearchTerm }) {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  const handleChange = (event) => {
    setNewSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(newSearchTerm);
    setNewSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Here are some coins</label>
      <input id="search" value={newSearchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default CoinSearch;
