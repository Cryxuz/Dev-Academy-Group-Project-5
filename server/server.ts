import * as Path from 'node:path'

import express from 'express'

import itemsRoute from './routes/items-routes.ts'
import basketRoute from './routes/basket-routes.ts'

const server = express()
server.use(express.json())
server.use('/api/v1/items', itemsRoute)
server.use('/api/v1/basket', basketRoute)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
