const initialState = {
  favorites: [{title: 'movie', id: 1}],
  displayFavorites: true
}

const favReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return (state);
  }
}

export default favReducer;