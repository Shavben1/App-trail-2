// Replace this with your own Spoonacular API Key
const apiKey = "YOUR_API_KEY_HERE";

async function suggestMeals() {
    // Get the ingredients entered by the user
    let ingredients = document.getElementById("ingredientsInput").value.toLowerCase();

    // Make sure the user enters something
    if (!ingredients) {
        document.getElementById("suggestions").innerText = "Please enter some ingredients!";
        return;
    }

    // URL to fetch recipes from Spoonacular API
    let apiURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=3&apiKey=${apiKey}`;

    try {
        // Fetch data from Spoonacular API
        let response = await fetch(apiURL);
        let recipes = await response.json();

        // If no recipes are found
        if (recipes.length === 0) {
            document.getElementById("suggestions").innerText = "Sorry, no meals found for those ingredients.";
            return;
        }

        // Display the meal suggestions
        let suggestions = "";
        recipes.forEach(recipe => {
            suggestions += `<p><strong>${recipe.title}</strong><br><img src="${recipe.image}" alt="${recipe.title}" width="100"></p>`;
        });

        document.getElementById("suggestions").innerHTML = suggestions;

    } catch (error) {
        document.getElementById("suggestions").innerText = "Error fetching meal suggestions. Please try again.";
    }
}
