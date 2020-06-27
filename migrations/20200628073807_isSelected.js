
exports.up = function(knex) {
    return knex.schema.table('people', table => {
        table.boolean('isSelected')
    })
};

exports.down = function(knex) {
  return knex.schema.table('people', table => {
      table.dropColumn('isSelected')
  })
};
