// script.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Handle form submission via AJAX
const form = document.querySelector('form');
const formSection = document.getElementById('form-section');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Collect form data
  const formData = new FormData(form);

  // Send form data to Formspree
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        // Clear the form fields
        form.reset();

        // Remove the form from the page
        formSection.innerHTML = '';

        // Create a thank-you message
        const thankYouMessage = document.createElement('div');
        thankYouMessage.classList.add('thank-you-message');
        thankYouMessage.innerHTML = `
          <h2>Thank You for Registering!</h2>
          <p>We will contact you shortly with more details.</p>
          <a href="#" class="back-to-top">Return to Top</a>
        `;

        // Append the thank-you message to the form section
        formSection.appendChild(thankYouMessage);

        // Smooth scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

        // Add event listener to 'Return to Top' link
        const backToTopLink = document.querySelector('.back-to-top');
        backToTopLink.addEventListener('click', function (e) {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      } else {
        // Handle errors
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map(error => error["message"]).join(", "));
          } else {
            alert('Oops! There was a problem submitting your form');
          }
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Oops! There was a problem submitting your form');
    });
});
