const db = require ('../data/dbConfig');

module.exports = {
    getRecipes,

}

function getRecipes() {
    return db('recipe');
}

function getShoppingList(recipe_id) {
    return db('recipe').join
}