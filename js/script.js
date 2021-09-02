const loadBooks = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = '';
  const url = `https://openlibrary.org/search.json?q=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data => loadBook(data.docs))
}

const loadBook = books => {
  const bookContainer = document.getElementById('book-container')
  books.forEach(book => {
    // const imgUrl = `${book.cover_i}`
    console.log(book)
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg" class="img-fluid rounded-start vh-100" alt="...">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">${book?.title}</h5>
            <p class="card-text">by ${book?.author_name}</p>
            <p class="card-text"><small class="text-muted">First published ${book?.first_publish_year}</small></p>
          </div>
        </div>
      </div>
    </div>
    `;
    bookContainer.appendChild(div);
  });
}


{/* <div class="card">
<img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top vh-100" alt="...">
<div class="card-body">
  <h5 class="card-title">${book.title}</h5>
  <p class="card-text">${book.title}</p>
</div>
<div class="card-footer text-center">
  <small>First published ${book?.first_publish_year}</small>
</div>
</div> */}