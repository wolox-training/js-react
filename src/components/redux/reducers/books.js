export default function books(state = [], action) {
  switch (action.type) {
    case 'APPLY_FILTER':
      return {
        ...state,
        books: books.filter((b) => {
                  return b[action.category].toLowerCase().search(action.text.toLowerCase()) !== -1
                })
      };
    default:
      return state;
  }
}