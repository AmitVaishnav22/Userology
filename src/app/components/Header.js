import NotificationIcon from "./Notifications";
export default function Header() {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">CryptoWeather Nexus</h1>
      <NotificationIcon />
    </header>
  );
}
