myLibrary = [];

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let novel = new Book(author, title, pages, read);
    myLibrary.push(novel);
    displayLibrary();
}

document.getElementById("booksForm").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
    if(author == "" || title == "" || pages == "" || !read){
        alert("pls write something")
    }
    
})

let bookbtn = document.getElementById("addBook");
bookbtn.addEventListener("click", function(){
    let bookForm = document.getElementById("booksForm");
    bookForm.style.display = "block";
})

function displayLibrary(){
    let library = document.querySelector(".library");
    library.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookCard = document.createElement("div");
        bookCard.setAttribute("class", "bookCard");

        bookCard.innerHTML = `<div class="card-header">
        <h3 class="author">${book.author}</h3>
        <h5 class="title">${book.title}</h5>
    </div>
    <div class="card-body">
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        <button class="toggle-read-btn" onclick="toggleRead(0)">Toggle Read</button>
    </div>`;
        library.appendChild(bookCard);
    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayLibrary();
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function toggleRead(index){
    myLibrary[index].toggleRead();
    displayLibrary();
}
