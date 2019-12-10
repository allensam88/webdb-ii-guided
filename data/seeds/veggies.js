
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('veggies')
    // .del() // does not reset the id
    .truncate() //  empties the table and resets the primary key (id)
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert([
        {name: 'cauliflower'},
        {name: 'green pepper'},
        {name: 'avocado'}
      ]);
    });
};
