const locationElement = document.getElementById("location");

// Function to update location text
function updateLocation(latitude, longitude) {
  locationElement.textContent = `Latitude: ${latitude.toFixed(5)}, Longitude: ${longitude.toFixed(5)}`;
}

// Error handling function
function handleError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationElement.textContent = "Permission to access geolocation was denied.";
      break;
    case error.POSITION_UNAVAILABLE:
      locationElement.textContent = "Position unavailable.";
      break;
    case error.TIMEOUT:
      locationElement.textContent = "Geolocation request timed out.";
      break;
    default:
      locationElement.textContent = "An unknown error occurred.";
  }
}

// Request geolocation
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
