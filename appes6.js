// Get Elements

const Title = document.getElementById('title');
const Author = document.getElementById('author');
const ISBN = document.getElementById('isbn');
const list = document.getElementById('book-list');


// Constructors

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    addBookList(book) {
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

    
    clearFields() {
        Title.value = '';
        Author.value = '';
        ISBN.value = '';
    }
}


// Event Listner

document.getElementById('book-form').addEventListener('submit', Data);


// Functionality

function Data(e) {
    

    const title = Title.value;
    const author = Author.value;
    const isbn = ISBN.value;
    

    // Calling Book Constructor via instantiating new book obj
    const book = new Book(title, author, isbn);


    // Calling UI Constructor via instantiating new ui obj
    const ui = new UI();

    
    if (title === '' || author === '' || isbn === '') {
        alert("Please Fill The Data")
    } else {

    // Now Calling UI Method addBookList
    ui.addBookList(book)


    // Calling clearField to clear up fields
    ui.clearFields();
    }


    e.preventDefault();
}