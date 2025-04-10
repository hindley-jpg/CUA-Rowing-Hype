async function fetchImages() {
    const count = document.getElementById('imageCount').value;
    if(!count || count < 1 || count > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=${count}`);
        const images = await response.json();
        displayImages(images);
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

function displayImages(images) {
    const container = document.getElementById('gallery-container');
    container.innerHTML = '';

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        imgElement.alt = image.author;
        imgElement.classList.add('gallery-image');
        container.appendChild(imgElement);
    });
}