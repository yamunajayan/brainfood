import getRecipesDetails from "./recipe-api.js";

const recipeApi = new getRecipesDetails();

let recipeDetails = {};

const recipe = document.querySelector(".recipe");

function renderRecipe() {
  recipeContainer.innerText = "";

  const recipeContainer = document.createElement("div");
  recipeContainer.classList.add("recipe__container");

  const recipeTitle = document.createElement("h2");
  recipeTitle.classList.add("recipe__title");
  recipeTitle.innerText = recipeDetails.title;

  const recipeImage = document.createElement("img");
  recipeImage.classList.add("recipe__image");
  recipeImage.src = recipeDetails.image;

  // const recipeInstructionsBtn = document.createElement("p");
  // recipeInstructionsBtn.classList.add("recipe__button-instructions);
  // recipeInstructionsBtn.innerText = "instructions";

  // const recipeIngredientsBtn = document.createElement("p");
  // recipeIngredientsBtn.classList.add("recipe__button-ingredients);
  // recipeIngredientsBtn.innerText = "ingredients";

  const recipeIngredients = document.createElement("ul");
  recipeIngredients.classList.add("recipe__ingredients");

  recipeDetails.ingredients.forEach((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.innerText = ingredient;
    recipeIngredients.appendChild(ingredientItem);
  });

  const recipeInstructions = document.createElement("ul");
  recipeInstructions.classList.add("recipe__instructions");

  recipeContainer.appendChild(recipeTitle);
  recipeContainer.appendChild(recipeImage);
  // recipeContainer.appendChild(recipeDetailsBtn);
  // recipeContainer.appendChild(recipeIngredientsBtn);
  recipeContainer.appendChild(recipeIngredients);
  recipeContainer.appendChild(recipeInstructions);
}



function getRecipeIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  let recipeId = urlParams.get("id");
  return recipeId;
}



async function loadingRecipe() {
  try {
    const recipeId = getRecipeIdFromUrl();
    console.log("loading recipe from ID", recipeId);
    const fetchedRecipe = await recipeApi.getRecipesDetails(recipeId);
    recipeDetails = fetchedRecipe;
    renderRecipe();
  } catch (error) {
    console.error("Error fetching recipes", error);
  }
}



console.log(getRecipeIdFromUrl());

loadingRecipe();
