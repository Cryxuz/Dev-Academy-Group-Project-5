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

  return (
    <>
      <h2>This is your basket</h2>
      {basketItems.length === 0} ? (<p>Whoops! Your basket is empty!</p>) : (
      <p>Items in you basket</p>)
      {/* <div>
        <h2>Pokemon List</h2>
        {basketItems.map((thing) => (
          <ItemData key={thing.id} id={thing.id} name={thing.name} />
        ))}
      </div> */}
    </>
    //Array we need to iterate over an display each item
    // use a .map?
  )
}
