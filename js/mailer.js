document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // Get the form data
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const message = formData.get('message');

    // Create query parameters from form data
    const queryParams = new URLSearchParams();
    queryParams.append('email', email);
    queryParams.append('message', message);

    const url = `http://localhost:8080/test-landia/web/api/contact-us?${queryParams.toString()}`;

    fetch(url, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Email sent successfully! Thank you for contacting us!');
        } else {
            alert('Something went wrong. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send email. Please try again later.');
    });
});
