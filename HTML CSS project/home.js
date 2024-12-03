document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Show response message
    const response = `Thank you for reaching out, ${name}! We will get back to you soon at ${email}.`;
    document.getElementById('formResponse').textContent = response;
  
    // Clear the form
    document.getElementById('contactForm').reset();
  });
  