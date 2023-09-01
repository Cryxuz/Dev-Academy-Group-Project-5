// export const routes = createRoutesFromElements(
//   <Route element={<AppLayout />}>
//     <Route index element={<ItemList />} />
///////    <Route path="item/:name" element={<ItemDetail />} />  STRETCH FOR ITEM DETAIL PAGE ///////
//   </Route>
// )

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './components/App'
import ClaimItem from './components/ClaimItem'
import ItemList from './components/ItemList'
import BasketItems from './components/BasketItems'
// import APP
// make function for

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/" element={<App />} />
    <Route index element={<ItemList />} />
    <Route path="/:id/claimitem" element={<ClaimItem />} />
    <Route path="/basket" element={<BasketItems />} />
  </Route>
)

export const router = createBrowserRouter(routes)
