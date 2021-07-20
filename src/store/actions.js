export const addFavorite = itemId => {
  return {type: 'add_favorite', itemId: itemId};
};

export const removeFavorite = itemId => {
  return {type: 'remove_favorite', itemId: itemId};
};

export const toggleFavorite = itemId => {
  return {type: 'toggle_favorite', itemId: itemId};
};
