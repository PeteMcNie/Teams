
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, name: 'Pete'},
        {id: 2, name: 'Nigel'},
        {id: 3, name: 'Andre'},
        {id: 4, name: 'Sergio'},
        {id: 5, name: 'Basti'},
        {id: 6, name: 'Jovan'},
        {id: 7, name: 'Jeff'},
        {id: 8, name: 'Atlas'},
        {id: 9, name: 'Joe'},
        {id: 10, name: 'Sam'}
      ]);
    });
};
