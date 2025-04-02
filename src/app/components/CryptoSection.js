import { useEffect, useState } from "react";
import { getCryptoData } from "../utils/api";
import Link from "next/link";

export default function CryptoSection() {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    getCryptoData().then((res) => setCrypto(res.data.slice(0, 3)));
  }, []);

  if (crypto.length === 0) return <p>Loading cryptocurrency data...</p>;

  return (
    <div>
      <h2 className="text-2xl mt-5 font-bold">Cryptocurrency</h2>
      <div className="grid grid-cols-3 gap-4">
        {crypto.map((coin) => (
          <Link 
            key={coin.id} 
            href={`/crypto/${coin.id}`} 
            className="bg-gray-900 p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-700 block"
          >
            <h3 className="text-lg font-semibold">{coin.name}</h3>
            <p className="text-sm"> Price: ${coin.current_price.toFixed(2)}</p>
            <p className="text-sm"> 24h Change: {coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p className="text-sm"> Market Cap: ${coin.market_cap.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

