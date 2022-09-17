

let book = document.createElement("td")
book.textContent = "Rich Dad, Poor Dad"
document.getElementById('table').appendChild(book);


let author = document.createElement("td")
author.textContent = "Robert Kiyosaki"
document.getElementById('table').appendChild(author);


let pages = document.createElement("td")
pages.textContent = "235"
document.getElementById('table').appendChild(pages);

let read = document.createElement("td")
read.textContent = "READ"
document.getElementById('table').appendChild(read);


let remove = document.createElement("td")
remove.textContent = "REMOVE"
document.getElementById('table').appendChild(remove);


document.getElementById('addButton').addEventListener('click', function(){
    document.querySelector (".popup").style.display = "flex";
})

document.getElementById('close').addEventListener('click', function(){
    document.querySelector (".popup").style.display = "none";
})