import RecipeAPI from "./recipe-api.js";
const API_KEY = "6007bbc449674cabbd9445cf4fb0d419";

const recepieApi = new RecipeAPI(API_KEY);

const carouselEl = document.querySelector(".carousel");

function displayRecipes(recipes) {
  carouselEl.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeEl = document.createElement("div");
    recipeEl.classList.add("recipe");

    const titleEl = document.createElement("h3");
    titleEl.innerText = recipe.title;

    const imgEl = document.createElement("img");
    imgEl.src = recipe.image;
    imgEl.alt = recipe.title;
    imgEl.id = recipe.id;
    imgEl.classList.add("recipe_img");

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

const recepies = await recepieApi.getRecipes();
// console.log(recepies.results);

const recepieArray = recepies.results;
// console.log(recepieArray);
displayRecipes(recepieArray);

const formEl = document.querySelector(".search");
formEl.addEventListener("submit", handleSubmit);

// document.addEventListener("DOMContentLoaded", () => {
//   const observer = new MutationObserver(() => {
//     const recipeImg = document.querySelectorAll(".recipe_img");
//     console.log(recipeImg);
//     recipeImg.forEach((recepie) => {
//       recepie.addEventListener("click", async (event) => {
//         event.preventDefault();
//         console.log("I am here");
//         console.log(event);
//       });
//     });
//   });
//   observer.observe(document.body, { childList: true, subtree: true });
// });

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
