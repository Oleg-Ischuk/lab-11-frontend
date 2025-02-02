const locationElement = document.getElementById("location");

// Функція для оновлення тексту з геолокацією
function updateLocation(latitude, longitude) {
  locationElement.textContent = `Latitude: ${latitude.toFixed(
    5
  )}, Longitude: ${longitude.toFixed(5)}`;
}

// Обробка помилок
function handleError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationElement.textContent = "У дозволі на геолокацію відмовлено.";
      break;
    case error.POSITION_UNAVAILABLE:
      locationElement.textContent = "Позиція недоступна.";
      break;
    case error.TIMEOUT:
      locationElement.textContent = "Час очікування запиту геолокації минув.";
      break;
    default:
      locationElement.textContent = "Сталася невідома помилка.";
  }
}

// Запит геолокації
if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      updateLocation(latitude, longitude);
    },
    (error) => handleError(error),
    { enableHighAccuracy: true }
  );
} else {
  locationElement.textContent = "Geolocation is not supported by your browser.";
}
