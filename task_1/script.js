const loadImagesBtn = document.getElementById('loadImagesBtn');
const gallery = document.getElementById('gallery');

const loadImages = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = 'Собака';
        img.style.width = '300px'; 
        img.style.margin = '10px'; 
        gallery.appendChild(img);
    } catch (error) {
        console.error('Помилка завантаження зображень:', error);
    }
};

loadImagesBtn.addEventListener('click', loadImages);
