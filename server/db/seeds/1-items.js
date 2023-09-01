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
      image:
        'https://3.bp.blogspot.com/-dqzxHDLhFtc/UaSkA5yW4ZI/AAAAAAAACe4/v0LcxMKoVlc/s1600/wool+gathering+007.JPG',
      tradable: false,
    },
    {
      id: 2,
      name: 'Begonia cutting!',
      description:
        'Small angel wing begonia cutting, 8cm in length, is flowering',
      image:
        'https://www.thespruce.com/thmb/xd61pfcck4YeOgJLW0244ERbn8o=/2108x1534/filters:no_upscale():max_bytes(150000):strip_icc()/KaraRileyBegoniaMaculata-23H-8652c7a7ce084592a9a386e9d5927acf.jpg',
      tradable: false,
    },
    {
      id: 3,
      name: 'Broccoli',
      description: '1 LARGE BROC!!! free to a good home',
      image:
        'https://abundantminigardens.com/wp-content/uploads/2014/06/DSCN0433-e1553608540458.jpg',
      tradable: false,
    },
    {
      id: 4,
      name: 'Crocs',
      description: 'Bright red crocs, size 38EU, worn condition',
      image:
        'https://image.cnbcfm.com/api/v1/image/106546739-crocwebthumb21of1.jpg?v=1590043640',
      tradable: false,
    },
    {
      id: 5,
      name: 'Egg',
      description: 'Free range eggs, 1 dozen!',
      image:
        'https://storage.googleapis.com/wzukusers/user-15590798/images/55e21512eb712lR5Ke2t/2015_0415Farm0070.JPG',
      tradable: false,
    },
    {
      id: 6,
      name: 'Lemons',
      description: 'Bag of lemons up for grabs!!!',
      image:
        'https://infogrocery.com/wp-content/uploads/2020/09/how_many_lemons_in_a_bag-1024x683.jpg',
      tradable: false,
    },
  ])
}
