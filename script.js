// test
// Declare empty array for the library
let myLibrary = [];

// object constructor
function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}

// function for adding a new book to the array
function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    displayBooksOnPage();
}


// display array in a table
function displayBooksOnPage () {
    
// remove all previously displayed elements before loop over again
    const removeTable = document.querySelectorAll(".tr");
    console.log("show me the node count of current tr...", removeTable);
    for (let i = 0; i < removeTable.length; i++) {
        removeTable[i].remove();
    }

// loop over the library array and display elements in the table
    let index = 0;
    let count = 0;
    myLibrary.forEach(myLibrarys => {
        const row = document.createElement('tr');
        row.classList.add('tr');
        row.id = "tr";
        table.appendChild(row);

        for (let key in myLibrarys) {
            console.log(`${key}: ${myLibrarys[key]}`);

                if (`${key}` == 'Read') {
                const readItem = document.createElement('td');
                row.appendChild(readItem);
                const readButton = document.createElement('button');
                readItem.append(readButton);
                readButton.className = 'read';
                readButton.id = 'read';
                readButton.textContent = (`${myLibrarys[key]}`);

                readButton.addEventListener('click', function(){
                    if (readButton.textContent == 'READ') {
                        readButton.textContent = 'NOT READ';
                    }
                    else if (readButton.textContent == 'NOT READ') {
                        readButton.textContent = 'READ';
                    }
                })

                }
                else {
                const item = document.createElement('td');
                item.textContent = (`${myLibrarys[key]}`);
                row.appendChild(item);
                }
            }
        

        document.getElementById('read').addEventListener('click', function(){
                
            if (document.getElementById('read').value == 'READ') {
                readButton.textContent = 'NOT READ';
            }
            else if (document.getElementById('read').value == 'NOT READ') {
                readButton.textContent = 'READ';
            }
        })

        // Create remove book button and add class attribute for each array row
        const buttonItem = document.createElement('td');
        row.appendChild(buttonItem);
        const removeBookButton = document.createElement('button');
        removeBookButton.className = 'remove';
        removeBookButton.textContent = 'REMOVE';
        console.log("show me my current array objects inside of foreach...", myLibrary);
                
         // Link the data attribute of the remove button to the array and row of the table
         removeBookButton.dataset.linkedArray = index;
         index++;
         console.log("show me the dataset link back to the array...", removeBookButton.dataset.linkedArray);
         buttonItem.appendChild(removeBookButton);
         
         // start event listener/remove array item from array and row from parent via data link
         removeBookButton.addEventListener("click", removeBookFromLibrary);

         function removeBookFromLibrary() {
            let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
            console.log("Attempting to remove array item via data attribute...", parseInt(retrieveBookToRemove));
            myLibrary.splice(parseInt(retrieveBookToRemove), 1);
            alert('This book will be removed');
            row.remove();
            displayBooksOnPage();
         }

    })
}

//transform form data to variables for intake

function intakeFormData() {
    event.preventDefault();
    let Title = document.getElementById("book_title").value;
    let Author = document.getElementById("book_author").value;
    let Pages = document.getElementById("book_pages").value;
    let Read = document.getElementById("check_read").checked;
    
    if (document.getElementById("check_read").checked == true) {
        Read = 'READ';
    }
    else {
        Read = 'NOT READ';
    }
    
    if ((Title == "")|| (Author =="") || (Pages=="")) {
        alert("Please fill all the elements in the form");
        return;
    }

    addBookToLibrary(Title, Author, Pages, Read);

    document.getElementById("addBook").reset();

}

addBookToLibrary("The Bible", "Inspired by God", "1200", 'READ');
addBookToLibrary("Unlimited Power", "Tony Robbins", "531", 'NOT READ');
addBookToLibrary("Harry Potter", "J.K. Rowling", "221", "READ");


//start event listener to add form input to library array
const submitButton = document.querySelector(".submit_book");
submitButton.className = 'submitBook';
submitButton.addEventListener('click', intakeFormData);

console.log("End of code array contents", myLibrary);

// show and hide form with the add book and X buttons 

document.getElementById('addButton').addEventListener('click', function(){
    document.querySelector (".popup").style.display = "flex";
})

document.getElementById('close').addEventListener('click', function(){
    document.querySelector (".popup").style.display = "none";
})

document.getElementById('submit_book').addEventListener('click', function(){
    document.querySelector (".popup").style.display = "none";
})  