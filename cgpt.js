document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email.endsWith('@iitdh.ac.in')) {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainPage').style.display = 'block';
    } else {
        alert('Invalid email. Please use your IITDH email address.');
    }
});

fetch("UpdatedDatasetSOI.json")
.then(function(response){
    return response.json;
})
.then(function(book){
    let data = document.querySelector("#dataDisplay");
    let out = '';
    for(let book of UpdatedDatasetSOI){
        out += `
            <tr>
                <td>${book.title}</td>
                <td>${book.description}</td>
                <td>${book.author}</td>
                <td>${book.genre}</td>
                <td>${book.department}</td>
                <td>${book.count}</td>
                <td>${book.vendor}</td>
                <td>${book.vendor_id}</td>
                <td>${book.publisher}</td>
                <td>${book.publisher_id}</td>
            </tr>
        
        `;
    }

    data.innerHTML = out;
})

function searchBooks() {
    const searchQuery = document.getElementById('searchBox').value;
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = `
        <h3>Search Results for "${searchQuery}"</h3>
        <div>
            <p>Book Title 1<button onclick="addToBag('Book Title 1')">Add to My Bag</button></p>
            <p>Book Title 2<button onclick="addToBag('Book Title 2')">Add to My Bag</button></p>
            <!-- Add more results dynamically as needed -->
        </div>
    `;
}

function addToBag(bookTitle) {
    const myBooksTable = document.getElementById('myBooksTable').getElementsByTagName('tbody')[0];
    const newRow = myBooksTable.insertRow();
    newRow.innerHTML = `
        <td>${bookTitle}</td>
        <td>${new Date().toLocaleDateString()}</td>
        <td>1234567890</td>
        <td>${new Date(new Date().setDate(new Date().getDate() + 14)).toLocaleDateString()}</td>
        <td>$0.00</td>
    `;
}

function showRecommendationForm() {
    document.getElementById('recommendationForm').style.display = 'block';
}

function hideRecommendationForm() {
    document.getElementById('recommendationForm').style.display = 'none';
}

document.getElementById('recommendForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your recommendation has been submitted.');
    hideRecommendationForm();
});
