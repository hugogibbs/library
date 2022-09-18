
//Get the inputs from the form

let bookTitle = document.getElementById('book_title').value
console.log(bookTitle)


let bookAuthor = document.getElementById('book_author').value
console.log(bookAuthor)


let bookPages = document.getElementById('book_pages').value
console.log(bookPages)


//Add the inputs collected from the form to the table

let book = document.createElement("td")
book.textContent = bookTitle
document.getElementById('table').appendChild(book);
book.className = 'booksList'

let author = document.createElement("td")
author.textContent = bookAuthor
document.getElementById('table').appendChild(author);


let pages = document.createElement("td")
pages.textContent = bookPages
document.getElementById('table').appendChild(pages);


// show and hide form with the add book and X buttons 

document.getElementById('addButton').addEventListener('click', function(){
    document.querySelector (".popup").style.display = "flex";
})

document.getElementById('close').addEventListener('click', function(){
    document.querySelector (".popup").style.display = "none";
})

