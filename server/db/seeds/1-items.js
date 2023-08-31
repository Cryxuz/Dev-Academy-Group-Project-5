// ITEMS //
// begonia cutting!
// wool!
// broccoli!
// crocs!
// eggs!
// lemon !s

export async function seed(knex) {
  return await knex('items').insert([
    {
      id: 1,
      name: 'Wool',
      description: '8kg of alpaca and merino',
      image: null,
      tradable: false,
    },
    {
      id: 2,
      name: 'Begonia cutting!',
      description:
        'Small angel wing begonia cutting, 8cm in length, is flowering',
      image: null,
      tradable: false,
    },
    {
      id: 3,
      name: 'Broccoli',
      description: '1 LARGE BROC!!! free to a good home',
      image: null,
      tradable: false,
    },
    {
      id: 4,
      name: 'Crocs',
      description: 'Bright red crocs, size 38EU, worn condition',
      image: null,
      tradable: false,
    },
    {
      id: 5,
      name: 'Egg',
      description: 'Free range eggs, 1 dozen!',
      image: null,
      tradable: false,
    },
    {
      id: 6,
      name: 'Lemons',
      description: 'Bag of lemons up for grabs!!!',
      image: null,
      tradable: false,
    },
  ])
}
