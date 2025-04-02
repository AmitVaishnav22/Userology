"use client";

import { useSelector, useDispatch } from "react-redux";
import { clearNotifications } from "../store/notificationSlice";
import { useState } from "react";

export default function NotificationIcon() {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative p-2 bg-gray-800 rounded-full"
      >
        🔔
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-64 bg-gray-800 shadow-lg rounded-lg p-3">
          <div className="flex justify-between">
            <h4 className="text-white font-bold">Notifications</h4>
            <button onClick={() => dispatch(clearNotifications())} className="text-red-500 text-sm">
              Clear All
            </button>
          </div>
          {notifications.length === 0 ? (
            <p className="text-gray-400">No new notifications</p>
          ) : (
            <ul className="mt-2 z-50 space-y-2 absolute top-full right-0 bg-gray-900 p-3 shadow-lg rounded-lg">
              {notifications.map((notif, index) => (
                <li key={index} className={`p-2 rounded ${notif.type === "price_alert" ? "bg-green-500" : "bg-blue-500"}`}>
                  {notif.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
