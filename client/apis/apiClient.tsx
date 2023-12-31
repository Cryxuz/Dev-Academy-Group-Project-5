import request from 'superagent'
// import type { Item, ItemData } from '../../models/items'
// insert other imports here
// export functions
// const ____url = '/api/v1/____'

// Get /api/v1/items
export async function fetchAllItems() {
  console.log('we made it to api')
  const response = await request.get('/api/v1/items')
  return response.body
}

//Get /api/v1/:id/claimitem
export async function fetchItemById(id: number) {
  console.log('api')
  const response = await request.get(`/api/v1/items/${id}/claimitem`)
  return response.body
}

export async function getBasketItems() {
  const response = await request.get('/api/v1/basket')
  console.log(response.body)
  return response.body
}

export async function addClaimedItemToBasket(claimedItem) {
  const response = await request.post('/api/v1/basket').send(claimedItem)
  return response.body
}
