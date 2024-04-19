document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const message = formData.get('message');

    const queryParams = new URLSearchParams();
    queryParams.append('email', email);
    queryParams.append('message', message);

    const url = `http://localhost:8080/test-landia/web/api/contact-us?${queryParams.toString()}`;

    fetch(url, {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert('Email sent successfully! Thank you for contacting us!');
        } else {
            alert(data.message || 'Something went wrong. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send email. Please try again later.');
    });
});
