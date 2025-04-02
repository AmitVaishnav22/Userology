import axios from "axios";

const WEATHER_API = process.env.NEXT_PUBLIC_WEATHER_API;
const CRYPTO_API = "https://api.coingecko.com/api/v3";
const NEWS_API = process.env.NEXT_PUBLIC_NEWS_API;

export const getWeather = (city) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API}&units=metric`);

export const getCryptoData = () => axios.get(`${CRYPTO_API}/coins/markets`, { params: { vs_currency: "usd" } });

export const getCryptoHistory = (coin, days = 7) => 
  axios.get(`${CRYPTO_API}/coins/${coin}/market_chart`, { 
    params: { vs_currency: "usd", days } 
  });

export const getCryptoNews = () =>
    axios.get(`https://newsdata.io/api/1/news`, {
      params: {
        apikey: NEWS_API, 
        q: "cryptocurrency", 
        country: "us", 
        language: "en", 
      },
    });