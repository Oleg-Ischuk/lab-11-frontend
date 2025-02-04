const loadImagesBtn = document.getElementById("loadImagesBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const exitFullscreenBtn = document.getElementById("exitFullscreenBtn");
const gallery = document.getElementById("gallery");

// Function to load images
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

// Function to enter fullscreen mode
const enterFullscreen = () => {
  if (gallery.requestFullscreen) {
    gallery.requestFullscreen();
  } else if (gallery.mozRequestFullScreen) {
    gallery.mozRequestFullScreen(); // Firefox
  } else if (gallery.webkitRequestFullscreen) {
    gallery.webkitRequestFullscreen(); // Chrome, Safari, Opera
  } else if (gallery.msRequestFullscreen) {
    gallery.msRequestFullscreen(); // IE/Edge
  }
  document.body.classList.add("fullscreen");
};

// Function to exit fullscreen mode
const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen(); // Firefox
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen(); // Chrome, Safari, Opera
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen(); // IE/Edge
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
