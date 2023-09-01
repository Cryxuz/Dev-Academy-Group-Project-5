//import Item from './Item.tsx'
//import {Outlet} from 'react-router-dom'
//also need to have something about the Outlet?
import { Link, Outlet } from 'react-router-dom'
// import ClaimItem from './ClaimItem.tsx'
// import ItemList from './ItemList.tsx'

import ItemList from './ItemList.tsx'
import BasketItems from './BasketItems.tsx'
// import { Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <header className="header">
        <h1>One Mans Trash</h1>
        <Link to="/basket">
          <button>Basket</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </header>
      <section className="main">
        {/* <ClaimItem /> */}
        {/* <ItemList /> */}
        <Outlet />
      </section>
    </> //OUTLET//
  )
}
