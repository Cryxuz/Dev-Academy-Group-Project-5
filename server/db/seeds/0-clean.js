export async function seed(knex) {
  await knex('items').del()
  await knex('basket').del()
}
