class SearchView {
  #parentElement = document.querySelector('.search');

  #clearInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }
  getQuery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
