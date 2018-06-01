export const SHOW_CREATE_RECIPE = 'SHOW_CREATE_RECIPE';
export const HIDE_CREATE_RECIPE = 'HIDE_CREATE_RECIPE';
export const RECIPE_NAME_CHANGED = 'RECIPE_NAME_CHANGED';
export const RECIPE_DESCRIPTION_CHANGED = 'RECIPE_DESCRIPTION_CHANGED';

export const showCreateRecipe = () => ({
  type: SHOW_CREATE_RECIPE,
});

export const hideCreateRecipe = () => ({
  type: HIDE_CREATE_RECIPE,
});

export const recipeNameChanged = text => ({
  type: RECIPE_NAME_CHANGED,
  payload: text,
});

export const recipeDescriptionChanged = text => ({
  type: RECIPE_DESCRIPTION_CHANGED,
  payload: text,
});
