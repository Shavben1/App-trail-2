const apiKey = "7cc593dcb8ab41d09fcfc66899f02896";

async function suggestMeals() {
    let ingredients = document.getElementById("ingredientsInput").value.toLowerCase().trim();

    if (!ingredients) {
        displayMessage("Please enter some ingredients!", "error");
        return;
    }

    let apiURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}`;

    try {
        let response = await fetch(apiURL);
        let recipes = await response.json();

        if (recipes.length === 0) {
            displayMessage("Sorry, no meals found for those ingredients.", "error");
            return;
        }

        displayRecipes(recipes);
    } catch (error) {
        displayMessage("Error fetching meal suggestions. Please try again.", "error");
    }
}

function displayMessage(message, type) {
    let suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = `<p class="${type}">${message}</p>`;
}

function displayRecipes(recipes) {
    let suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = recipes.map(recipe => `
        <div class="recipe">
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}" width="150">
            <p><a href="https://spoonacular.com/recipes/${recipe.id}" target="_blank">View Recipe</a></p>
        </div>
    `).join('');
}
