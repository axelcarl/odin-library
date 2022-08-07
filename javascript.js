let books = [];

function displayBooks() {
  document.querySelector('.book-container').innerHTML = '';
  books.forEach(book => {
    bookElement = document.createElement('div');
    bookBack = document.createElement('div');

    bookInfo = document.createElement('div');
    bookInfo.className = 'book-info';
    bookInfo.innerHTML = book.title;
    bookElement.append(bookInfo);
    bookInfo = document.createElement('div');
    bookInfo.className = 'book-info';
    bookInfo.innerHTML = book.author;
    bookElement.append(bookInfo);
    bookInfo = document.createElement('div');
    bookInfo.className = 'book-info';
    bookInfo.innerHTML = book.pages;
    bookElement.append(bookInfo);
    bookInfo = document.createElement('button');
    bookInfo.className = 'book-info';
    if (book.read)
      bookInfo.innerHTML = 'read';
    else 
      bookInfo.innerHTML = 'not read';
    bookInfo.addEventListener('click', (element) => {
      if (book.read) {
        book.read = false;
        element.target.innerHTML = 'not read';
      }
      else {
        book.read = true;
        element.target.innerHTML = 'read';
      }
    })
    bookElement.append(bookInfo);
    bookInfo = document.createElement('button');
    bookInfo.className = 'book-info';
    bookInfo.innerHTML = 'remove';
    bookInfo.addEventListener('click', (element) => {
      bookElement.remove(element.target);
    })
    bookElement.append(bookInfo);

    bookElement.className = 'book';
    bookBack.className = 'book-back';
    bookElement.append(bookBack);
    document.querySelector('.book-container').append(bookElement);
  })
}

function Book(name, author, pages, read) {
  this.title = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function appendBook (name, author, pages, read) {
  const book = new Book(name, author, pages, read);
  books.push(book);
}

let addBtn = document.querySelector('.add-book');
let addForm = document.querySelector('.add-form');

addForm.querySelector('.form-add-btn').addEventListener('click', () => {
  let name = addForm.querySelector('#title').value;
  let author = addForm.querySelector('#author').value;
  let pages = parseInt(addForm.querySelector('#pages').value);
  appendBook(name, author, pages, false);
  addForm.querySelector('#title').value = '';
  addForm.querySelector('#author').value = '';
  addForm.querySelector('#pages').value = '';
  addForm.style.display = 'none';
  addBtn.style.display = 'flex';
  displayBooks();
})
addBtn.addEventListener('click', () => {
  addForm.style.display = 'flex';
  addBtn.style.display = 'none';
})
addForm.querySelector('.form-close-btn').addEventListener('click', () => {
 addForm.style.display = 'none';
 addBtn.style.display = 'flex';
})
