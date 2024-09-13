class FoodRecipeApi {
  constructor(appKey, appId) {
    this.appKey = appKey;
    this.appId = appId;
    this.baseUrl = "https://api.edamam.com/api/recipes/v2";
  }

  async getRecepie(item) {
    try {
      const response = await axios.get(
        `${this.baseUrl}?type=public&q=${item}&app_id=${this.appId}&app_key=${this.appKey}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

// const appId = "64404aa8";
// const appKey = "68b3dbdb939122e0bcb55fe18ab3fc5e";
// const foodRecipe1 = new FoodRecipeApi(appKey, appId);
// const item = "salmon";
// const recipie = await foodRecipe1.getRecepie(item);
// const allRecipes = recipie.hits;

// console.log(recipie);
// console.log(allRecipes);

// allRecipes.forEach((item) => {
//   const label = item.recipe.label;
//   console.log(label);
// });

export default FoodRecipeApi;
