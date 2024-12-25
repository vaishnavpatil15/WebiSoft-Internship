const accessKey = 'UTPKLgn1jOKvc9o7gpRDBpdIYxkUlUPThQXCGgbWGLw';
const query = 'nature'; // Replace with your desired category
const imageContainer = document.getElementById('image-container');

// Fetch images from Unsplash
fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`)
  .then(response => response.json())
  .then(data => {
    const images = data.results;
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.urls.small;
      imgElement.alt = image.alt_description || 'Unsplash Image';
      imgElement.style.margin = '10px';
      imageContainer.appendChild(imgElement);
    });
  })
  .catch(error => {
    console.error('Error fetching images:', error);
  });
