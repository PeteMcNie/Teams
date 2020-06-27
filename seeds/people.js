
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, name: 'Pete', is_selected: false},
        {id: 2, name: 'Nigel', is_selected: false},
        {id: 3, name: 'Andre', is_selected: false},
        {id: 4, name: 'Sergio', is_selected: false},
        {id: 5, name: 'Basti', is_selected: false},
        {id: 6, name: 'Jovan', is_selected: false},
        {id: 7, name: 'Jeff', is_selected: false},
        {id: 8, name: 'Atlas', is_selected: false},
        {id: 9, name: 'Joe', is_selected: false},
        {id: 10, name: 'Sam', is_selected: false}
      ]);
    });
};
