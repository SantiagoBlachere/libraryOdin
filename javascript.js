function Book(name,pages,read,author) {
    this.name = name,
    this.pages = pages,
    this.read = read,
    this.author = author
    this.cardInfo = '';
    
} 



Book.prototype.info = function() {
    if (this.read === true) {
        this.cardInfo = `${this.name} by ${this.author}, ${this.pages} pages, read`
    } else {
        this.cardInfo = `${this.name} by ${this.author}, ${this.pages}, not read yet`
    }
    
}
Book.prototype.readStatus = function() {
    this.read = !this.read
    this.info();
}

const bookLibrary = [];

addBook = (book) => {
    console.log(bookLibrary.length)
    if (bookLibrary.length > 0){
        let exists = bookLibrary.some( (el) => el.name === book.name);
        console.log(exists)
        if (exists) {
            console.log('ya existe :3')
        } else {
            bookLibrary.push(book)
            paintBooks();
    }
    } else {
        console.log(book)
        bookLibrary.push(book)
        paintBooks();
    }
    
    
}
const bookContainer = document.getElementById("books");
const createBookButton = document.createElement("button");
createBookButton.innerText = `CREATE BOOK,
                              if you dare..`
createBookButton.classList.add('addButton')
createBookButton.addEventListener('click', (event) => {
    event.preventDefault();
    createBookButton.remove()
    const bookForm = document.createElement('form');
    bookForm.classList.add('bookForm')
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
            input.required = 'true'
            input.classList.add('input');
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', "author's name");
            input.setAttribute('id', 'author');
            input.setAttribute('autocomplete', 'off');
            
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
            input.required = 'true'
            input.classList.add('input');
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', "book's name: ");
            input.setAttribute('id', 'name');
            input.setAttribute('autocomplete', 'off');
            input.setAttribute("required", "")
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
            input.required = 'true'
            input.classList.add('input');
            input.setAttribute('type', 'number');
            input.setAttribute('placeholder', "pages: ");
            input.setAttribute('id', 'pages');
            input.setAttribute('min', '1')
            formDiv.appendChild(input);
            
            
            
            
        } else {
            const formDiv = document.createElement('div');
            formDiv.classList.add('checkboxContainer')
            bookForm.appendChild(formDiv);


            const label = document.createElement('label');
            label.innerText = 'Read: '
            label.setAttribute('for', 'checkbox');
            formDiv.appendChild(label);
            
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('placeholder', "author's name");
            checkbox.setAttribute('id', 'read')
            checkbox.classList.add('checkbox')
            formDiv.appendChild(checkbox);
            
        }
        

        
    }
    const submitButton = document.createElement('input');
    submitButton.innerText = 'SUBMIT'
    submitButton.setAttribute('type', 'submit')
    submitButton.setAttribute('required', 'true')
    submitButton.classList.add('submitButton')
    
    bookForm.appendChild(submitButton);
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const book = [];
        const author = document.getElementById('author').value
        const name = document.getElementById('name').value
        const pages = document.getElementById('pages').value
        const read =  document.getElementById('read').checked;
        if (!author || !name || !pages) {
            alert('Please fill out all required fields!')
            return
        } else {
            const key = name.replace(/\s+/g, '');
            book.push(key);
            book[key] = new Book(name, pages, read, author);
            addBook(book[key]);
        }
        
        
        
        
    });
})
bookContainer.appendChild(createBookButton);

const addedBooksSection = document.querySelector(".addedBooks");

const paintBooks = () => {
    let lastBook = bookLibrary.find( (book) => book.name === bookLibrary[bookLibrary.length - 1].name)     
      
    lastBook.info();      
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCard.innerText = `${lastBook.cardInfo}`;
    addedBooksSection.appendChild(bookCard);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer')
    addedBooksSection.appendChild(buttonContainer)
    
    const removeSelfButton = document.createElement('button');
    removeSelfButton.addEventListener('click', () => {
        bookCard.remove()
        buttonContainer.remove();
        let indexBook = bookLibrary.indexOf(lastBook);
        bookLibrary.splice(indexBook, 1)
    });
    removeSelfButton.innerText = 'REMOVE ITEM'
    buttonContainer.appendChild(removeSelfButton)

    const readButton = document.createElement('button');
    readButton.addEventListener('click', ()=> {
        
        lastBook.readStatus();
        
        bookCard.innerText = `${lastBook.cardInfo}`;
        bookCard.appendChild(buttonContainer);
        
    })
    readButton.innerText = "READ"
    buttonContainer.appendChild(readButton);
    bookCard.appendChild(buttonContainer)
}



