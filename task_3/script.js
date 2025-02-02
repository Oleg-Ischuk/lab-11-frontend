const gallery = document.getElementById('gallery');
const addImageBtn = document.getElementById('addImageBtn');

function loadGallery() {
  const savedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
  savedImages.forEach(src => {
    const img = createImageElement(src);
    gallery.appendChild(img);
  });
}

function saveGallery() {
  const images = Array.from(gallery.querySelectorAll('img')).map(img => img.src);
  localStorage.setItem('galleryImages', JSON.stringify(images));
}

function createImageElement(src) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Gallery Image';
  img.addEventListener('click', () => {
    gallery.removeChild(img);
    saveGallery();
  });
  return img;
}

addImageBtn.addEventListener('click', () => {
  const newImageURL = prompt('Enter the URL of the image:');
  if (newImageURL) {
    const img = createImageElement(newImageURL);
    gallery.appendChild(img);
    saveGallery();
  }
});

loadGallery();
