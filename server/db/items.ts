import { Item, ItemData } from '../../models/items.ts'
import db from './connection.ts'

export async function getAllItems(): Promise<Item[]> {
  const allItems = await db('items').select('') //perhaps?
  return allItems
}
// returns [{id: number , name: string, description: string, image: null, tradable: boolean}]

export async function getItemById(id: number) {
  const itemById = await db('items').where('id', id).select().first()
  return itemById
}

// maybe change this for if we have more than one item?
export async function addItemToBasket(item: ItemData): Promise<Item> {
  const addedItem = await db('basket').insert(item).returning('')
  return addedItem[0]
}

export async function deleteItem(id: number) {
  await db('items').where({ id }).delete()
}
// function deleteItem(id)
// returning success variable

// function addItems(item object data)
// return single item

// BASKET QUERIES
export async function fetchBasketItems() {
  const allBasketItems = await db('basket').select('*')
  return allBasketItems
}
