"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import { getCryptoData, getCryptoHistory } from "../../utils/api"; 
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function CryptoDetails() {
  const { coin } = useParams(); 
  const [cryptoData, setCryptoData] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!coin) return;

    const fetchData = async () => {
      try {
        const marketResponse = await getCryptoData();
        const coinData = marketResponse.data.find((c) => c.id === coin);
        setCryptoData(coinData);
        const historyResponse = await getCryptoHistory(coin, 7);
        const priceHistory = historyResponse.data.prices.map((entry) => ({
          date: new Date(entry[0]).toLocaleDateString(),
          price: entry[1],
        }));
        setHistory(priceHistory);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchData();
  }, [coin]);

  if (loading || !cryptoData) return <p className="p-6 text-white">Loading crypto details...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">{cryptoData.name} Details</h1>
      <p> Current Price: ${cryptoData.current_price}</p>
      <p> 24h Change: {cryptoData.price_change_percentage_24h}%</p>
      <p> Market Cap: ${cryptoData.market_cap.toLocaleString()}</p>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Price History (Last 7 Days)</h2>
        <Line
          data={{
            labels: history.map((entry) => entry.date),
            datasets: [
              {
                label: "Price (USD)",
                data: history.map((entry) => entry.price),
                borderColor: "#FFD700",
                backgroundColor: "rgba(255, 215, 0, 0.2)",
                fill: true,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
