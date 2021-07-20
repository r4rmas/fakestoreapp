const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add_favorite':
      return {favorites: [...state.favorites, action.itemId]};
    case 'remove_favorite':
      const newState = state.favorites.filter(
        favorite => favorite !== action.itemId,
      );
      return {favorites: newState};
    case 'toggle_favorite':
      if (state.favorites.includes(action.itemId)) {
        const newState = state.favorites.filter(
          favorite => favorite !== action.itemId,
        );
        return {favorites: newState};
      }
      return {favorites: [...state.favorites, action.itemId]};
    default:
      return state;
  }
};

const initialState = {
  favorites: [],
};

export default reducer;
