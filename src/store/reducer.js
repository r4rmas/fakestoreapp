const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggle_favorite':
      if (state.favorites.includes(action.itemId)) {
        const newState = state.favorites.filter(
          favorite => favorite !== action.itemId,
        );
        return {
          ...state,
          favorites: newState,
        };
      }
      return {
        ...state,
        favorites: [...state.favorites, action.itemId],
      };
    case 'add_items':
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
};

const initialState = {
  items: [],
  favorites: [],
};

export default reducer;
