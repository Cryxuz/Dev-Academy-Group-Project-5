// will be a list of some kind
import { useQuery } from '@tanstack/react-query'
import { getBasketItems } from '../apis/apiClient'

export default function BasketItems() {
  const {
    data: basketItems,
    isError,
    isLoading,
  } = useQuery(['basketItems'], getBasketItems) // or fetch

  if (isError) return <p>Whoops! Your basket doesn&apos;t exist</p>

  if (isLoading) return <p>Your basket is being filled...</p>

  if (basketItems.length === 0) {
    return (
      <>
        <h2>This is your basket</h2>
        <p>Whoops! Your basket is empty!</p>
      </>
    )
  }

  return (
    <>
      <h2>This is your basket</h2>
      <p>Items in you basket</p>
      <ul>
        {basketItems.map((claimed) => (
          <li key={claimed.id}>
            {claimed.name}
            {/* <Link to={`${i.id}/claimitem`}>
              <button onClick={() => handleClaim(i)} id="would-like">
                Claim This
              </button>
            </Link> */}

            {/* <button id="would-not-like">No Thank You</button> */}
          </li>
        ))}
      </ul>
    </>
    //Array we need to iterate over an display each item
    // use a .map?
  )
}
