// will be a list of some kind
import { useQuery } from '@tanstack/react-query'
import { getBasketItems } from '../apis/apiClient'

export default function BasketItems() {
  const {
    data: basketItems,
    isError,
    isLoading,
  } = useQuery(['basketItems'], getBasketItems) // or fetch

  if (isError) return <p>Whoops! Your basket is empty!</p>

  if (isLoading) return <p>Your basket is being filled...</p>

  return (
    <></>
    //Array we need to iterate over an display each item
    // use a .map
  )
}
