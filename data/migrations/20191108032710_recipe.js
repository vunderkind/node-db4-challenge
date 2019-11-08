exports.up = function(knex, Promise) {
    // Building out the migration for the tables for both the Primary table (recipe), and the foreign one (ingredients)
    return knex.schema
    .createTable('recipe', tbl => {
      // creates a primary key called id
      tbl.increments();
      // creates a text field called name which is both required and unique
      tbl.text('name', 128).unique().notNullable();
    })

    .createTable('ingredients', tbl =>{
        tbl.increments();
        tbl.string('ingredientName', 128);
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe')
    })
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('accounts');
  };
  