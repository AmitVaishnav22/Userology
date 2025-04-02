# 🌤️💰 CryptoWeather Nexus

🚀 **Live Demo**: [Deployed URL](#)  
📂 **GitHub Repository**: [GitHub Link](#)  

## 📌 Overview  
CryptoWeather Nexus is a **modern, multi-page dashboard** that provides real-time **weather updates**, **cryptocurrency data**, and **live notifications** via WebSockets. Built with **Next.js, React, Redux, and Tailwind CSS**, this dashboard integrates multiple APIs for up-to-date financial and weather insights.  

---

## ⚡ Tech Stack

- **Frontend:** Next.js (App Router & File-Based Routing), React, Redux  
- **State Management:** Redux Toolkit with async middleware  
- **Styling:** Tailwind CSS  
- **Data Fetching:** OpenWeatherMap, CoinGecko, NewsData.io  
- **Real-Time Updates:** WebSocket (CoinCap for live crypto prices)  
- **Deployment:** Vercel / Netlify  
- **API Security:** Environment variables (`.env.local`)  

---

## 🌟 Features

### ✅ Multi-Page Dashboard
- **Weather**: Displays live weather for 3 predefined cities (London, New York, Tokyo).  
- **Crypto**: Shows live price, 24h change, and market cap for Bitcoin, Ethereum, and one more coin.  
- **News**: Lists top 5 crypto-related news articles.  

### ✅ Detail Pages
- **Weather Details**: Historical temperature trends visualized in a chart.  
- **Crypto Details**: Shows price history & extended market metrics.  

### ✅ Real-Time Updates
- **Live Cryptocurrency Prices** via WebSocket (CoinCap).  
- **Simulated Weather Alerts** as in-app notifications.  

### ✅ State Management
- Global state for **user preferences, weather & crypto data**.  
- Error handling and UI feedback for **loading/failures**.  

---

## 🚀 Challenges & Solutions  

### 1️⃣ Next.js Routing Issues (Dynamic Pages)
🔴 **Problem**: Clicking on links to `/weather/[city]` or `/crypto/[coin]` resulted in a "Page Not Found" error.  
🟢 **Solution**:  
- Ensured file structure matched **App Router requirements** (`src/app/pages/weather/[city].js`).  
- Fixed missing `[city].js` and `[coin].js` files under **`/pages/weather/`** & **`/pages/crypto/`**.  

### 2️⃣ WebSocket Integration
🔴 **Problem**: Maintaining a persistent connection for live crypto price updates.  
🟢 **Solution**:  
- Implemented **CoinCap WebSocket** for BTC/ETH live price tracking.  
- Used **Redux state updates** and **React toasts** for live notifications.  

### 3️⃣ API Rate Limits & Alternative APIs
🔴 **Problem**:  
- OpenWeatherMap had a rate limit for free users.  
- Some news APIs required a paid subscription.  
🟢 **Solution**:  
- Cached weather data for 60 seconds to reduce API calls.  
- Used **NewsData.io** as an alternative news API.  

### 4️⃣ UI Consistency & Styling
🔴 **Problem**: The UI felt inconsistent across sections.  
🟢 **Solution**:  
- Applied **Tailwind CSS classes** for uniform **card layouts, hover effects, and transitions**.  
- Ensured all sections had **matching typography, spacing, and color schemes**.  

### 5️⃣ Deployment & Environment Variables
🔴 **Problem**: Exposing API keys during deployment.  
🟢 **Solution**:  
- Stored **API keys securely** in `.env.local`.  
- Configured **Vercel environment variables** for production.  

---

## 🛠 Alternative APIs Used

| **Feature**  | **Primary API** | **Alternative Used** |  
|-------------|---------------|------------------|  
| Weather Data | OpenWeatherMap | None (Optimized API Calls) |  
| Crypto Data | CoinGecko | None (Worked as Expected) |  
| News Headlines | NewsAPI (Paid) | **NewsData.io** (Free) |  
| WebSockets | CoinCap | None (Worked as Expected) |  

---

## 📜 Setup & Installation  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/yourusername/crypto-weather-nexus.git
cd crypto-weather-nexus
