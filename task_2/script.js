const loadImagesBtn = document.getElementById("loadImagesBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const exitFullscreenBtn = document.getElementById("exitFullscreenBtn");
const gallery = document.getElementById("gallery");

// Функція для отримання і відображення зображень
const loadImages = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    const img = document.createElement("img");
    img.src = data.message;
    img.alt = "Собака";
    gallery.appendChild(img);
  } catch (error) {
    console.error("Помилка завантаження зображень:", error);
  }
};

// Функція для переходу в повноекранний режим
const enterFullscreen = () => {
  if (gallery.requestFullscreen) {
    gallery.requestFullscreen();
  } else if (gallery.mozRequestFullScreen) {
    // Firefox
    gallery.mozRequestFullScreen();
  } else if (gallery.webkitRequestFullscreen) {
    // Chrome, Safari, Opera
    gallery.webkitRequestFullscreen();
  } else if (gallery.msRequestFullscreen) {
    // IE/Edge
    gallery.msRequestFullscreen();
  }
  document.body.classList.add("fullscreen");
};

// Функція для виходу з повноекранного режиму
const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari, Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE/Edge
    document.msExitFullscreen();
  }
  document.body.classList.remove("fullscreen");
};

loadImagesBtn.addEventListener("click", loadImages);
fullscreenBtn.addEventListener("click", () => {
  enterFullscreen();
});
exitFullscreenBtn.addEventListener("click", () => {
  exitFullscreen();
});

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    document.body.classList.remove("fullscreen");
  }
});
