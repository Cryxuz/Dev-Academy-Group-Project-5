import request from 'superagent'
import type { Item, ItemData } from '../../models/items'
// insert other imports here
// export functions
// const ____url = '/api/v1/____'

// Get /api/v1/items
export async function fetchAllItems() {
  console.log('we made it to api')
  const response = await request.get('/api/v1/items')
  return response.body
}
