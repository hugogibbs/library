// test
// Declare empty array for the library
let myLibrary = [];

// object constructor
function Book(Title, Author, Pages, Read, Remove) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
    this.Remove = Remove;

}

// function for adding a new book to the array
function addBookToLibrary(Title, Author, Pages, Read, Remove) {
    let book = new Book(Title, Author, Pages, Read, Remove);
    myLibrary.push(book);
}

// display array in a table
function displayBooksOnPage () {
    const books = document.querySelector(".books");

    myLibrary.forEach(myLibrary => {
    const row = document.createElement('tr');
    row.classList.add('tr');
    table.appendChild(row);
    for (let key in myLibrary) {
        console.log(`${key}: ${myLibrary[key]}`);
        if (`${key}`== 'Read') {
            const item = document.createElement('td');
            row.appendChild(item);
            const readBtn = document.createElement('button');
            readBtn.textContent = 'READ'
            readBtn.className = 'read';
            item.appendChild(readBtn);
        }
        else if (`${key}`== 'Remove'){
            const item = document.createElement('td');
            row.appendChild(item);
            const remBtn = document.createElement('button');
            remBtn.textContent = 'REMOVE';
            remBtn.className = 'remove';
            item.appendChild(remBtn);
        }
        else {
            const item = document.createElement('td');
            item.textContent = (`${myLibrary[key]}`);
            row.appendChild(item);
        
        }
    }
    

})

}

addBookToLibrary("Beat the system", "Hugo Gibbs", "123", "Read");
addBookToLibrary("Rich Dad, Poor Dad", "Robert Kiyosaki", "231", "Not Read");
addBookToLibrary("The 5 AM Club", "Robin Sharma", "321", "Read");
addBookToLibrary("10X", "Grant Cardone", "222", "Not Read");

console.log("End of code array contents", myLibrary);

displayBooksOnPage();


// show and hide form with the add book and X buttons 

document.getElementById('addButton').addEventListener('click', function(){
    document.querySelector (".popup").style.display = "flex";
})

document.getElementById('close').addEventListener('click', function(){
    document.querySelector (".popup").style.display = "none";
})

