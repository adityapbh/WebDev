// Array to store added books
let myBooks = [];

// Show login form when login button is clicked
document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const userType = document.querySelector('input[name="userType"]:checked').value;
    if (email.endsWith('@iitdh.ac.in')) {
        document.getElementById('loginPage').style.display = 'none';
        if (userType === 'student') {
            document.getElementById('searchPage').style.display = 'block';
        } else {
            alert('Only students can access the search page.');
            document.getElementById('mainPage').style.display = 'block';
        }
    } else {
        alert('Invalid email. Please use your IITDH email address.');
    }
});



// Load book data from JSON file
document.addEventListener("DOMContentLoaded", function() {
    fetch('UpdatedDatasetSOI.json')
        .then(response => response.json())
        .then(data => {
            window.bookData = data;
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});

// Search for books
function searchBooks() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    const searchBy = document.getElementById('searchBy').value;
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    // Ensure bookData is loaded
    if (!window.bookData) {
        searchResults.innerHTML = '<p>Error: Book data not loaded.</p>';
        return;
    }

    // Filter the book data
    const filteredBooks = window.bookData.filter(book => {
        return book[searchBy] && book[searchBy].toLowerCase().includes(searchQuery);
    });

    // Display the results
    if (filteredBooks.length > 0) {
        const resultsTitle = document.createElement('h3');
        resultsTitle.textContent = `Search Results for "${searchQuery}"`;
        searchResults.appendChild(resultsTitle);

        filteredBooks.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book';
            bookElement.innerHTML = `
                <p><strong>Title:</strong> ${book.title} <button onclick="addToBag('${book.title}')">Add to My Bag</button></p>
                <p><strong>Description:</strong> ${book.description}</p>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Department:</strong> ${book.department}</p>
                <p><strong>Count:</strong> ${book.count}</p>
                <p><strong>Vendor:</strong> ${book.vendor}</p>
                <p><strong>Vendor_Id:</strong> ${book.vendor_id}</p>
                <p><strong>Publisher:</strong> ${book.publisher}</p>
                <p><strong>Publisher_Id:</strong> ${book.publisher_id}</p>
                <hr>
            `;
            searchResults.appendChild(bookElement);
        });
    } else {
        searchResults.innerHTML = `<p>No results found for "${searchQuery}".</p>`;
    }
}

// Add book to My Bag
function addToBag(bookTitle) {
    const book = window.bookData.find(b => b.title === bookTitle);
    if (book) {
        myBooks.push(book);
        updateMyBooksTable();
    } else {
        alert('Error: Book not found.');
    }
}

// Update My Books Table
function updateMyBooksTable() {
    const myBooksTableBody = document.querySelector('#myBooksTable tbody');
    myBooksTableBody.innerHTML = ''; // Clear previous entries

    myBooks.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td>${book.count}</td>
            
        `;
        myBooksTableBody.appendChild(row);
    });
}

// Handle logout
function logout() {
    document.getElementById('searchPage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
}
function viewpassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function showLogin() {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}

// Go back to the main page from the login form
function goBack() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
}