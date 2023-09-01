import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { addClaimedItemToBasket, fetchAllItems } from '../apis/apiClient'
import { Item } from '../../models/items'

export default function ItemList() {
  const { data: items, error, isLoading } = useQuery(['items'], fetchAllItems)

  const queryClient = useQueryClient()

  const basketMutation = useMutation(addClaimedItemToBasket, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['basketItems'])
      console.log('Items after mutation', items)
    },
  })

  function handleClaim(i) {
    const claimedItem = {
      name: i.name,
      description: i.description,
      image: i.image,
      tradable: i.tradable,
    }
    console.log(claimedItem)

    basketMutation.mutate(claimedItem)
  }

  if (!items || isLoading) {
    return <p>Loading items..</p>
  }

  if (error instanceof Error) {
    return <p>Whoops, no items!{error.message}</p>
  }
  console.log('Checking items ', items)
  return (
    <>
      <h2>All Items Available</h2>
      <ul>
        {items.map((i: Item) => (
          <li key={i.id}>
            {i.name}
            <Link to={`${i.id}/claimitem`}>
              <button onClick={() => handleClaim(i)} id="would-like">
                Claim This
              </button>
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

// onClick={() => handleClaim(i)}
