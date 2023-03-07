import "../App.css";
import { useEffect, useState } from "react";

function CoinList({ searchTerm }) {
  //console.log(searchTerm);
  const [coins, setCoins] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/search?query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoins(data.coins);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [searchTerm]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) return <h3>Error!</h3>;

  return (
    <main>
      <h2>List of Coins below</h2>
      <ul>
        {coins.map((coin) => {
          return (
            <li className="coinlist" key={coin.id}>
              <h3>Coin: {coin.name}</h3>
              <h4>Market Cap Rank: {coin.market_cap_rank}</h4>
              <h4>Symbol: {coin.symbol} </h4>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default CoinList;
