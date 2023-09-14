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




