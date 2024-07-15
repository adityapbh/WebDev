document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    if (email.endsWith('@iitdh.ac.in')) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const messageDiv = document.getElementById('message');

        // Clear previous message
        messageDiv.textContent = '';

        // Validate form data
        if (password !== confirmPassword) {
            messageDiv.textContent = 'Passwords do not match.';
            messageDiv.style.color = 'red';
            return;
        }

        // Here you would typically send the data to the server
        // For this example, we'll just simulate a successful signup
        messageDiv.textContent = 'Signup successful! Redirecting to home page where you can now click on login...';
        messageDiv.style.color = 'green';

        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = 'main.html';
        }, 2000);

    } else {
        alert('Invalid email. Please use your IITDH email address.');
    }
});
