
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, ingredientName: 'rowValue1'},
        {recipe_id: 2, ingredientName: 'rowValue2'},
        {recipe_id: 3, ingredientName: 'rowValue3'}
      ]);
    });
};
