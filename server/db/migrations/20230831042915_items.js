export function up(knex) {
  return knex.schema.creatTable('items', (table) => {
    table.increment('id').primary()
    table.string('name')
    table.string('description')
    table.text('image')
    table.boolean('tradable')
  })
}
// create table 'items'
// id number
// name string
// description string
// free/trade boolean
// img string

export function down(knex) {
  return knex.schema.dropTableIfExists('tables')
}

// claimed table
