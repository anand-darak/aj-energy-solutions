// Contact Form
$(document).ready(function() {
    $('#contactForm').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      // Get form data
      var formData = $(this).serialize();
  
      // Make AJAX call to submit the form data
      $.ajax({
        type: 'POST', // Or 'GET', depending on your server setup
        url: 'https://email-service-aj.vercel.app/send_email', // Replace with your server endpoint
        data: formData,
        success: function(response) {
          // On success, show the success message and mark
          $('#submitStatus').show();
        },
        error: function(err) {
          // On error, show an error message or handle it accordingly
          console.error('Error submitting form:', err);
        }
      });
    });
  });
  





