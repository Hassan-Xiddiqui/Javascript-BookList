// Get Elements

const Title = document.getElementById('title');
const Author = document.getElementById('author');
const ISBN = document.getElementById('isbn');
const list = document.getElementById('book-list');

// Constructors & Methods
// Step 1
// Creating Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// Creating UI Constructor
function UI() {
    
}

// Step 6
// Creating method of UI
UI.prototype.addBookList = function (book) {

    // Create Element
    const row = document.createElement('tr');

    // Inserting Data
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
    `;

    list.appendChild(row);

}

// Step 8
// Creating clearField Method of UI
UI.prototype.clearFields = function () {
    Title.value = '';
    Author.value = '';
    ISBN.value = '';

}


// Step 2
// Event Listner
document.getElementById('book-form').addEventListener('submit', Data)



// Functionality Of Event Listners
function Data(e) {
    
    // Step 3
    // Getting Elements of form
    // const title = document.getElementById('title').value;
    // const author = document.getElementById('author').value;
    // const isbn = document.getElementById('isbn').value;

    const title = Title.value;
    const author = Author.value;
    const isbn = ISBN.value;
    
    // Step 4
    // Calling Book Constructor via instantiating new book obj
    const book = new Book(title, author, isbn);

    // Step 5
    // Calling UI Constructor via instantiating new ui obj
    const ui = new UI();

    
    if (title === '' || author === '' || isbn === '') {
        alert("Please Fill The Data")
    } else {
    // Step 7
    // Now Calling UI Method addBookList
    ui.addBookList(book)

    // Step 9
    // Calling clearField to clear up fields
    ui.clearFields();
    }


    e.preventDefault();
}