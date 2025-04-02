import { useEffect, useState } from "react";
import { getCryptoNews } from "../utils/api"; 

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCryptoNews()
      .then((response) => {
        console.log("News Data:", response.data);
        setNews(response.data.results); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setError("Failed to load news.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-400">Loading news...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto mt-6">
    <h2 className="text-2xl font-bold mb-4">Crypto News</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((article, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700"
        >
          {/* News Image */}
          {article.image_url ? (
            <img
              src={article.image_url}
              alt="News"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
          ) : (
            <div className="w-full h-40 bg-gray-700 flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}

          {/* News Title */}
          <h3 className="text-lg font-semibold">{article.title}</h3>

          {/* News Description */}
          <p className="text-gray-400 text-sm mt-2">
            {article.description
              ? article.description.slice(0, 100) + "..."
              : "No description available."}
          </p>

          {/* Read More Link */}
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline block mt-3"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  </div>
);
}
