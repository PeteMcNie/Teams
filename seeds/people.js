
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, name: 'Pete', isSelected: false},
        {id: 2, name: 'Nigel', isSelected: false},
        {id: 3, name: 'Andre', isSelected: false},
        {id: 4, name: 'Sergio', isSelected: false},
        {id: 5, name: 'Basti', isSelected: false},
        {id: 6, name: 'Jovan', isSelected: false},
        {id: 7, name: 'Jeff', isSelected: false},
        {id: 8, name: 'Atlas', isSelected: false},
        {id: 9, name: 'Joe', isSelected: false},
        {id: 10, name: 'Sam', isSelected: false}
      ]);
    });
};
