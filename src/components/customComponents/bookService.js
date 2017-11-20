import ApiInstance from './apiInstance'


const BookService = {
  bookList: () => {
    return ApiInstance.get('/books')
  },
  getBook: (id) => {
    return ApiInstance.get(`/books/${id}`)
  }
};

export default BookService