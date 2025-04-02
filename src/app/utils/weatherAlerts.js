export const simulateWeatherAlerts = (dispatch, addNotification) => {
    setInterval(() => {
      const alerts = [
        "Heavy rain expected in New York!",
        "Storm warning in London!",
        "Heatwave alert in Tokyo!",
      ];
      const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
  
      dispatch(addNotification({ type: "weather_alert", message: randomAlert }));
    }, 30000); 
  };
  