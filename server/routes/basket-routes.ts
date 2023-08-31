import express from 'express'
import * as db from '../db/items.ts'

const router = express.Router()

// GET /api/vi/basket
router.get('/', async (req, res) => {
  try {
    const basketItems = await db.fetchBasketItems()
    res.json(basketItems)
  } catch (error) {
    res.status(500)
  }
})

export default router
