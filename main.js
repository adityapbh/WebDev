
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

    // Show search page if user type is student
    if (userType === 'student') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('searchPage').style.display = 'block';
    } else if (userType === 'admin') {
        alert('Admin login not supported yet. Redirecting to main page.');
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainPage').style.display = 'block';
    }
});

function showRecommendForm() {
    document.getElementById('searchPage').style.display = 'none';
    document.getElementById('recommendFormPage').style.display = 'block';
}

// Function to hide the recommend form and return to search page
function hideRecommendForm() {
    document.getElementById('recommendFormPage').style.display = 'none';
    document.getElementById('searchPage').style.display = 'block';
}

// Handle recommend form submission
document.getElementById('recommendForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const bookTitle = document.getElementById('bookTitle').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const bookPublisher = document.getElementById('bookPublisher').value;
    const bookDescription = document.getElementById('bookDescription').value;

    // Simulate sending recommendation to server
    console.log('Book Recommendation:', {
        title: bookTitle,
        author: bookAuthor,
        publisher: bookPublisher,
        description: bookDescription
    });

    alert('Thank you for your recommendation!');

    // Clear the form
    document.getElementById('recommendForm').reset();

    // Return to search page
    hideRecommendForm();
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
    // Check if the book is already in the bag
    const bookExists = myBooks.some(book => book.title === bookTitle);

    if (bookExists) {
        alert('This book is already in your bag.');
        return;
    }

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

    myBooks.forEach((book,index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td><button onclick="removefrombag(${index})">Remove</button></td>
           
            
        `;
        myBooksTableBody.appendChild(row);
    });
}
function removefrombag(index){
    myBooks.splice(index,1);
    updateMyBooksTable();
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
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[iitdh]+(.ac)+(.in)/;
  
    // if (input.value.match(validRegex)) {
  
    //   alert("Valid email address!");
  
    //   document.form1.text1.focus();
  
    //   return true;
  
    // }
     if (!input.value.match(validRegex)){
  
      alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }
