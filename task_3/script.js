const gallery = document.getElementById("gallery");
const addImageBtn = document.getElementById("addImageBtn");

function loadGallery() {
  const savedImages = JSON.parse(localStorage.getItem("galleryImages")) || [];
  savedImages.forEach((src) => {
    const img = createImageElement(src);
    gallery.appendChild(img);
  });
}

function saveGallery() {
  const images = Array.from(gallery.querySelectorAll("img")).map(
    (img) => img.src
  );
  localStorage.setItem("galleryImages", JSON.stringify(images));
}

function createImageElement(src) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Gallery Image";
  img.addEventListener("click", () => {
    gallery.removeChild(img);
    saveGallery();
  });

  // Error handler for image loading
  img.onerror = () => {
    img.src = "fallback-image.jpg"; // Placeholder for broken images
    img.alt = "Image not available"; // Update alt text to indicate error
    alert("The image could not be loaded. A placeholder image has been shown."); // Notify user about the broken image
  };

  return img;
}

function validateImageUrl(url) {
  const regex = /\.(jpg|jpeg|png|gif)$/i;
  return regex.test(url);
}

addImageBtn.addEventListener("click", () => {
  const newImageURL = prompt("Enter the URL of the image:");
  if (newImageURL && validateImageUrl(newImageURL)) {
    const img = createImageElement(newImageURL);
    gallery.appendChild(img);
    saveGallery();
  } else if (newImageURL) {
    alert("Invalid image URL. Please enter a valid URL.");
  }
});

loadGallery();
