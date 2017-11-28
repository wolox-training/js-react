import { combineReducers, createStore } from 'redux';

const filterReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case 'APPLY_FILTER':
      return {
        ...state,
        books:  state.books.filter((b) => {
                  return b[action.searchCat].toLowerCase().search(action.searchText.toLowerCase()) !== -1
                })
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  filterReducer
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
);

export default store;