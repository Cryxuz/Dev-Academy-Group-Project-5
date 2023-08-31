import express from 'express'
import * as db from '../db/items.ts'

const router = express.Router()

// GET /api/vi/items
router.get('/', async (req, res) => {
  console.log('made it to server')
  try {
    const items = await db.getAllItems()
    res.json(items)
  } catch (error) {
    res.status(500)
  }
})

export default router
// call getItems from data base
// return JSON array of all item objects

// POST /api/vi/items
// use req.body and pass to db addItem query

// DELETE /api/vi/items
// id req.params
// Pass to db delete items query
