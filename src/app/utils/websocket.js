const SOCKET_URL = "wss://ws.coincap.io/prices?assets=bitcoin,ethereum";

export const connectWebSocket = (dispatch, addNotification) => {
  const socket = new WebSocket(SOCKET_URL);

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const notifications = [];

    if (data.bitcoin) {
      notifications.push({
        type: "price_alert",
        message: `Bitcoin price changed to $${data.bitcoin}`,
      });
    }
    if (data.ethereum) {
      notifications.push({
        type: "price_alert",
        message: `Ethereum price changed to $${data.ethereum}`,
      });
    }

    notifications.forEach((notif) => dispatch(addNotification(notif)));
  };

  socket.onerror = (error) => console.error("WebSocket Error:", error);

  return socket;
};
