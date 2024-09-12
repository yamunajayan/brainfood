 class RecipeAPI{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://api.spoonacular.com/recipes"
    }
    async getRecipes(){
        try{
        const response = await axios.get(`${this.baseUrl}/complexSearch?apiKey=${this.apiKey}`);
        // console.log(response.data)
        return response.data;
    }catch (error) {
        console.log(error);
    }

    }
    async getRecipesByIngredients(ingredients, number){
        const response = await axios.get(`${this.baseUrl}/findByIngredients?ingredients=${ingredients}&number=${number}&apiKey=${this.apiKey}`);
        // console.log(response.data);
        return response.data;
     
    }
    async getRecipesByCuisine(cuisine,ingredients,number){
        const response = await axios.get(`${this.baseUrl}/complexSearch?apiKey=${this.apiKey}&cuisine=${cuisine}&includeIngredients=${ingredients}&number=${number}`);
        console.log(response.data);
        return response.data;
        
    }

    async getRecipesDetails(id){
        const response = await axios.get(`${this.baseUrl}/${id}/information?apiKey=${this.apiKey}`);
        console.log(response.data);
        return response.data;
        
    }


}
export default RecipeAPI;

// tomato,chicken,onion recepie by cusine

//https://api.spoonacular.com/recipes/findByIngredients?ingredients=potato,+chicken,+dil,cheese&number=5&apiKey=b4bec58aa5aa402fb4375cc4c71f1ece

//https://api.spoonacular.com/recipes/complexSearch?apiKey=b4bec58aa5aa402fb4375cc4c71f1ece&cuisine=Indian&includeIngredients=tomato,chicken,onion&number=5&addRecipeInstructions=tru