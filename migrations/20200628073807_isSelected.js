exports.up = function (knex) {
  return knex.schema.table('people', table => {
    table.boolean('is_selected')
  })
}

exports.down = function (knex) {
  return knex.schema.table('people', table => {
    table.dropColumn('is_selected')
  })
}
