export function up(knex) {
  return knex.schema.createTable('basket', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.text('image')
    table.boolean('tradable')
  })
}

export function down(knex) {
  return knex.schema.dropTableIfExists('basket')
}
