import "./globals.css"; 
import Providers from "./provider"; 

export const metadata = {
  title: "CryptoWeather Nexus",
  description: "A modern dashboard for crypto and weather data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-900 text-white">
        <Providers>{children}</Providers> {/* Wrap app with Redux */}
      </body>
    </html>
  );
}

