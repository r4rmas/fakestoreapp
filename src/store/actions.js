const toggleFavorite = itemId => {
  return {type: 'toggle_favorite', itemId: itemId};
};

const addItems = items => {
  return {type: 'add_items', items: items};
};
