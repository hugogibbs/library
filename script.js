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
    myLibrary.forEach(myLibrary => {
    const row = document.createElement('tr');
    row.classList.add('tr');
    row.id = "tr";
    table.appendChild(row);


    

    for (let key in myLibrary) {
        console.log(`${key}: ${myLibrary[key]}`);
        
            const item = document.createElement('td');
            row.appendChild(item);
            const readBtn = document.createElement('button');
            readBtn.textContent = 'READ'
            readBtn.className = 'read';
            item.appendChild(readBtn);
        }
        else if (`${key}`== 'Remove'){
            // Link the data attribute of the remove button to the array and row of the table
            const item = document.createElement('td');
            row.appendChild(item);
            const removeBookButton = document.createElement('button');
            removeBookButton.className = 'remove';
            removeBookButton.textContent = 'REMOVE';
            removeBookButton.dataset.linkedArray = index;
            index++;
            console.log("show me the dataset link back to the array...", removeBookButton.dataset.linkedArray);
            item.appendChild(removeBookButton);
            removeBookButton.addEventListener("click", removeBookFromLibrary);

            function removeBookFromLibrary() {
            let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
            console.log("Attempting to remove array item via data attribute...", parseInt(retrieveBookToRemove));
            myLibrary.splice(parseInt(retrieveBookToRemove), 1);
            row.remove();
            displayBooksOnPage();
  
        }
    }
        else {
            const item = document.createElement('td');
            item.textContent = (`${myLibrary[key]}`);
            row.appendChild(item);
        
        }

        // Start event listener / remove array item from array and row from parent via data link
        
        }
    
    })
}


 


//transform form data to variables for intake

function intakeFormData() {
    event.preventDefault();
    let Title = document.getElementById("book_title").value;
    let Author = document.getElementById("book_author").value;
    let Pages = document.getElementById("book_pages").value;
    let Read = document.getElementById("read_yesno").value;
    let Remove = 'Remove'

    if ((Title == "")|| (Author =="") || (Pages=="")) {
        alert("Please fill all the elements in the form");
        return;
    }

    addBookToLibrary(Title, Author, Pages, Read, Remove);

    document.getElementById("addBook").reset();

}


addBookToLibrary("The Bible", "Inspired by God", "1200", "Read");
addBookToLibrary("Unlimited Power", "Tony Robbins", "531", "Not Read");
addBookToLibrary("Harry Potter", "J.K. Rowling", "221", "Read");


//start event listener to add form input to library array
const submitButton = document.Selector(".submit_book");
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