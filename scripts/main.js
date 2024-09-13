// import RecipeAPI from "./recipe-api.js";
import FoodRecipeApi from "./edamam-recipe-api.js";
// const API_KEY = "64142da9eea5464481435f2efc5e5101";

const appId = "64404aa8";
const appKey = "68b3dbdb939122e0bcb55fe18ab3fc5e";
const foodRecipe1 = new FoodRecipeApi(appKey, appId);
const item = "salmon";
const recipie = await foodRecipe1.getRecepie(item);

const allRecipes = recipie.hits;

console.log(recipie);
console.log(allRecipes);

// allRecipes.forEach((item) => {
//   const label = item.recipe.label;
//   console.log(label); s
// });

// const recepieApi = new RecipeAPI(API_KEY);

const carouselEl = document.querySelector(".carousel");

function displayRecipes(recipes) {
  carouselEl.innerHTML = "";

  recipes.slice(0, 12).forEach((recipe) => {
    const recipeEl = document.createElement("div");
    recipeEl.classList.add("recipe");

    const titleEl = document.createElement("h3");
    titleEl.innerText = recipe.recipe.label;
    titleEl.classList.add("recipe__title");

    const imgEl = document.createElement("img");
    imgEl.src = recipe.recipe.image;
    imgEl.alt = recipe.recipe.label;
    // imgEl.id = recipe.id;
    imgEl.classList.add("recipe__img");

    recipeEl.appendChild(titleEl);
    recipeEl.appendChild(imgEl);
    carouselEl.appendChild(recipeEl);
  });
}

async function handleSubmit(event) {
  event.preventDefault();

  const ingredient = event.target.ingredient.value;
  const cuisine = event.target.cuisine.value;
  const number = event.target.number.value;

  console.log(event.target.ingredient.value);
  console.log(event.target.cuisine.value);
  console.log(event.target.number.value);

  if (cuisine === "Any") {
    const recepie = await recepieApi.getRecipesByIngredients(
      ingredient,
      number
    );
    console.log(recepie);

    displayRecipes(recepie);
  } else {
    const recepie = await recepieApi.getRecipesByCuisine(
      cuisine,
      ingredient,
      number
    );
    console.log(recepie);
    const recepieArray = recepie.results;
    console.log(recepieArray);
    displayRecipes(recepieArray);
  }

  // const ingredients = event.target.value;
  formEl.reset();
}

// const recepies = await recepieApi.getRecipes();
// console.log(recepies.results);

// const recepieArray = recepies.results;
// console.log(recepieArray);
// displayRecipes(recepieArray);

const formEl = document.querySelector(".search");
formEl.addEventListener("submit", handleSubmit);

document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const recepieImgEL = document.querySelectorAll(".recipe_img");

    //event handler for clicking on events
    recepieImgEL.forEach((image) => {
      image.addEventListener("click", (event) => {
        event.preventDefault();

        console.log("Image clicked");
        // Remove the "active" class from all divs
        // recepieImgEL.forEach((s) => s.classList.remove("shows__detail--active"));

        // // Add the "active" class to the clicked div
        // show.classList.add("shows__detail--active");
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

displayRecipes(allRecipes);
