document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');

    // Clear previous message
    messageDiv.textContent = '';

    if (email.endsWith('@iitdh.ac.in')) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate password length
        if (password.length < 8) {
            messageDiv.textContent = 'Password must be at least 8 characters long.';
            messageDiv.style.color = 'red';
            return;
        }

        // Validate matching passwords
        if (password !== confirmPassword) {
            messageDiv.textContent = 'Passwords do not match.';
            messageDiv.style.color = 'red';
            return;
        }

        // Simulate a successful signup
        messageDiv.textContent = 'Signup successful! Redirecting to home page where you can now click on login...';
        messageDiv.style.color = 'green';

        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = 'try1html.html';
        }, 2000);

    } else {
        alert('Invalid email. Please use your IITDH email address.');
    }
});
