function suggestMeals() {
    // Get the ingredients entered by the user
    let ingredients = document.getElementById("ingredientsInput").value.toLowerCase();

    // Some simple meal suggestions based on ingredients
    let meals = {
        "chicken, tomato, cheese": "Chicken Parmesan",
        "bread, peanut butter, jelly": "Peanut Butter & Jelly Sandwich",
        "rice, chicken, broccoli": "Chicken and Rice Stir Fry",
        "pasta, tomato sauce, garlic": "Spaghetti with Tomato Sauce",
        "egg, bread, cheese": "Egg Sandwich",
        "potato, cheese, bacon": "Loaded Baked Potato",
    };

    // Check if the ingredients match a meal in the list
    let suggestion = meals[ingredients] || "Sorry, no meal suggestions for those ingredients.";

    // Display the suggestion on the page
    document.getElementById("suggestions").innerText = suggestion;
}
