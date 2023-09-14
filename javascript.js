function Book(name,pages,read,author) {
    this.name = name,
    this.pages = pages,
    this.read = read,
    this.author = author
    
} 
const hobbit = new Book('The Hobbit', 295, true , 'J.R.R Tolkien')


Book.prototype.info = function() {
    if (this.read === true) {
        return `${this.name} by ${this.author}, ${this.pages}, read`
    } else {
        return `${this.name} by ${this.author}, ${this.pages}, not read yet`
    }
    
}

const bookLibrary = [hobbit];

addBook = (book) => {
    bookLibrary.push(book)
}
const bookContainer = document.getElementById("books");
const createBookButton = document.createElement("button");
createBookButton.innerText = 'CREATE BOOK'
createBookButton.addEventListener('click', () => {
    createBookButton.remove()
    const bookForm = document.createElement('form');
    
    bookContainer.appendChild(bookForm);
    for (i = 1; i < 5; i++) {
        if (i === 1) {
            const formDiv = document.createElement('div');
            formDiv.classList.add("input");
            bookForm.appendChild(formDiv);

            const label = document.createElement('label');
            label.innerText = 'Author: '
            label.setAttribute('for', 'author');
            formDiv.appendChild(label);


            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', "author's name");
            input.setAttribute('id', 'author')
            formDiv.appendChild(input);

            
            
        } else if (i === 2) {
            const formDiv = document.createElement('div');
            formDiv.classList.add("input");
            bookForm.appendChild(formDiv);
             
            const label = document.createElement('label');
            label.innerText = 'Name: '
            label.setAttribute('for', 'name');
            formDiv.appendChild(label);
            
            
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', "book's name: ");
            input.setAttribute('id', 'name')
            formDiv.appendChild(input);
            
        } else if (i === 3) {
            const formDiv = document.createElement('div');
            formDiv.classList.add("input");
            bookForm.appendChild(formDiv);
            
            const label = document.createElement('label');
            label.innerText = 'Pages: '
            label.setAttribute('for', 'pages');
            formDiv.appendChild(label);
            
            const input = document.createElement('input');
            input.setAttribute('type', 'number');
            input.setAttribute('placeholder', "pages: ");
            input.setAttribute('id', 'pages')
            formDiv.appendChild(input);
            
            
            
        } else {
            const formDiv = document.createElement('div');
            formDiv.classList.add("checkbox");
            bookForm.appendChild(formDiv);


            const label = document.createElement('label');
            label.innerText = 'Read: '
            label.setAttribute('for', 'checkbox');
            formDiv.appendChild(label);
            
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('placeholder', "author's name");
            checkbox.setAttribute('id', 'read')
            formDiv.appendChild(checkbox);
            
        }
        

        
    }
    const submitButton = document.createElement('button');
    submitButton.innerText = 'SUBMIT'
    submitButton.addEventListener('click',addBook());
    bookForm.appendChild(submitButton);
})
bookContainer.appendChild(createBookButton);
const paintBooks = () => {
    bookLibrary.map( (book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        bookCard.innerText = `${book.name}
                              ${book.pages}
                              ${book.author}
        
        `
        bookContainer.appendChild(bookCard)
        
    })
}


