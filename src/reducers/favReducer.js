import {TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE} from './../actions/favoritesActions';

const initialState = {
  favorites: [{title: 'movie', id: 1}],
  displayFavorites: true
}

const favReducer = (state = initialState, action) => {
  switch(action.type) {
    case(TOGGLE_FAVORITES):{
      return{
        ...state,
        displayFavorites: !state.displayFavorites
      }
    }
    case(ADD_FAVORITE):{
      return{
        ...state,
        favorites: [...state.favorites, action.payload] ///need to fix key later
      }
    }
    case(REMOVE_FAVORITE):{
      return{
        ...state,
        favorites: state.favorites.filter(item=>(item.id !== action.payload))
      }
    }
    default:
      return (state);
  }
}

export default favReducer;