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

// POST /api/vi/basket
router.post('/', async (req, res) => {
  try {
    const newBasketItem = req.body
    const basketItem = await db.addItemToBasket(newBasketItem)
    res.json(basketItem)
  } catch (error) {
    res.sendStatus(500)
    console.error(error)
  }
})

export default router
