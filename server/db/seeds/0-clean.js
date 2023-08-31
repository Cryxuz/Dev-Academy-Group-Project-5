export async function seed(knex) {
  return await knex('items').del()
}
