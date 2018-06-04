export const SHOW_CREATE_RECIPE = 'SHOW_CREATE_RECIPE';
export const HIDE_CREATE_RECIPE = 'HIDE_CREATE_RECIPE';
export const RECIPE_NAME_CHANGED = 'RECIPE_NAME_CHANGED';
export const RECIPE_DESCRIPTION_CHANGED = 'RECIPE_DESCRIPTION_CHANGED';
export const INGREDIENT_INPUT_CHANGED = 'INGREDIENT_INPUT_CHANGED';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

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

export const ingredientInputChanged = text => ({
  type: INGREDIENT_INPUT_CHANGED,
  payload: text,
});

let nextIngredientId = 0;
export const addIngredient = (ingredientName) => {
  nextIngredientId += 1;
  return {
    type: ADD_INGREDIENT,
    payload: ingredientName,
    id: nextIngredientId,
  };
};

export const removeIngredient = id => ({
  type: REMOVE_INGREDIENT,
  id,
});
