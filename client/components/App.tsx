//import Item from './Item.tsx'
//import {Outlet} from 'react-router-dom'
//also need to have something about the Outlet?
import { Outlet } from 'react-router-dom'
// import ClaimItem from './ClaimItem.tsx'
// import ItemList from './ItemList.tsx'

import ItemList from './ItemList.tsx'

export default function App() {
  return (
    <>
      <header className="header">
        <h1>One Mans Trash</h1>
      </header>
      <section className="main">
        {/* <ClaimItem /> */}
        {/* <ItemList /> */}
        <Outlet />
      </section>
    </> //OUTLET//
  )
}
