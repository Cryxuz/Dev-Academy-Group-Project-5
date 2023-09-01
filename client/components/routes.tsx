import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './App'
// import APP
// make function for

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/claimitem" element={<insert element />} />
  </Route>
)
