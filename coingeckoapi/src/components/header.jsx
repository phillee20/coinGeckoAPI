import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1 id="header">
        <Link to="/localhost">
          <h1>CoinGecko</h1>
        </Link>
      </h1>
    </div>
  );
}

export default Header;
