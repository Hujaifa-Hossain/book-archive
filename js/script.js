// fetching data from api 
const loadBooks = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = '';
  const url = `https://openlibrary.org/search.json?q=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data => loadBook(data.docs))
  // error handling
  const errorDiv = document.getElementById("error");
  if (searchText === "") {
    errorDiv.innerText = "Search field cannot be empty.";
    return;
  }
  errorDiv.innerText = '';
}

const loadBook = books => {
  const totalResult = document.getElementById('total-result')
  totalResult.innerText = `Total ${books.length} books match your search result`
  const bookContainer = document.getElementById('book-container')
  bookContainer.innerHTML = '';
  books.forEach(book => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="col">
      <div class="card h-100 shadow-lg">
        <img src="https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg" class="rounded-start" style="height: 300px;" alt="..."" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book?.title}</h5>
          <p class="card-text">Author: ${book?.author_name}</p>
          <p class="card-text">Publisher: ${book?.publisher[0]}</p>
        </div>
        <div class="card-footer text-center">
          <small class="text-muted">First published: ${book?.first_publish_year}</small>
        </div>
      </div>
    </div>
    `;
    bookContainer.appendChild(div);
  });
}

// End-----------ed