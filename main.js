async function fetchImages() {
    const count = document.getElementById('imageCount').value;
    if(!count || count < 1 || count > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }
//alert user if entry is less than one or greater than 100
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=${count}`);
        const images = await response.json();
        displayImages(images);
        //fetch from picsum the entered number of images, display
    } catch (error) {
        console.error('Error fetching images:', error);
        //error message if fetch fails
    }
}

function displayImages(images) {
    const container = document.getElementById('gallery-container');
    container.innerHTML = '';

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        imgElement.classList.add('gallery-image');
        container.appendChild(imgElement);
    });
}
//create img element in html for each retreived image in array.
//set src by item url
//add img to classList
//append child into gallery-container element