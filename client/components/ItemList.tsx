import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { fetchAllItems } from '../apis/apiClient'
import { Item } from '../../models/items'

export default function ItemList() {
  const { data: items, error, isLoading } = useQuery(['items'], fetchAllItems)
  console.log(items)

  if (error) {
    return <p>Whoops, no items!</p>
  }

  if (!items || isLoading) {
    return <p>Loading items..</p>
  }
  return (
    <>
      <h2>All Items Available</h2>
      <ul>
        {items.map((i: Item) => (
          <li key={i.id}>
            {i.name}
            <Link to={`${i.id}/claimitem`}>
              <button id="would-like">Claim This</button>
            </Link>

            <button id="would-not-like">No Thank You</button>
          </li>
        ))}
      </ul>
    </>
  )
}

// y/n box
//<Link to={`/${i.id}/itemdetails`}</Link>
