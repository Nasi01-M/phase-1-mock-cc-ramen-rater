// write your code here

document.addEventListener('DOMContentLoaded', () => {
    const ramenMenu = document.getElementById('ramen-menu');
    const ramenDetail = document.getElementById('ramen-detail');
    const ratingDisplay = document.getElementById('rating-display');
    const commentDisplay = document.getElementById('comment-display');
    const newRamenForm = document.getElementById('new-ramen');
  
// Function to display ramen details
    function displayRamenDetails(ramen) {
// Update the #ramen-detail div with ramen information
      const detailImage = ramenDetail.querySelector('.detail-image');
      const nameElement = ramenDetail.querySelector('.name');
      const restaurantElement = ramenDetail.querySelector('.restaurant');
  
      detailImage.src = ramen.image;
      detailImage.alt = ramen.name;
      nameElement.innerText = ramen.name;
      restaurantElement.innerText = ramen.restaurant;
      ratingDisplay.innerText = ramen.rating;
      commentDisplay.innerText = ramen.comment;
    }
// Fetch all ramens from the API and display them in the menu
    fetch('http://localhost:3000/ramens')
      .then(response => response.json())
      .then(ramens => {
        ramens.forEach(ramen => {
          const img = document.createElement('img');
          img.src = ramen.image;
          img.alt = ramen.name;
  
          img.addEventListener('click', () => displayRamenDetails(ramen));
  
          ramenMenu.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching ramens:', error));
  
// Event listener for submitting the new ramen form
    newRamenForm.addEventListener('submit', event => {
      event.preventDefault();
  
      const name = document.getElementById('new-name').value;
      const restaurant = document.getElementById('new-restaurant').value;
      const image = document.getElementById('new-image').value;
      const rating = document.getElementById('new-rating').value;
      const comment = document.getElementById('new-comment').value;
  
// Create a new ramen object
      const newRamen = { name, restaurant, image, rating, comment };
  
// Add the new ramen image to the menu
      const newImg = document.createElement('img');
      newImg.src = newRamen.image;
      newImg.alt = newRamen.name;
  
      newImg.addEventListener('click', () => displayRamenDetails(newRamen));
  
      ramenMenu.appendChild(newImg);
  
// Clear the form
      newRamenForm.reset();
    });
  });
  