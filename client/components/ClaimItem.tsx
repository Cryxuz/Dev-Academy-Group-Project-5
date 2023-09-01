//route for this will be '/claimitem'
// display contact details for seller
// display item claimed

import { useQuery } from '@tanstack/react-query'
// import type { Item, ItemData } from '../../models/items'
import { fetchItemById } from '../apis/apiClient'
import { useParams } from 'react-router-dom'

export default function ClaimItem() {
  const id = Number(useParams().id)
  const user = {
    name: 'SpecialUser123',
    id: 3,
    email: '123@mail.com',
  }

  const {
    data: itemClaimed,
    error,
    isLoading,
  } = useQuery(['items', id], () => fetchItemById(id))
  console.log(itemClaimed)

  if (error) {
    return <p>Sorry! No Item matches!</p>
  }

  if (!itemClaimed || isLoading) {
    return <p>Loading item..</p>
  }

  return (
    <>
      <h2>Congratulations on your claim!</h2>
      <h3>Claimed Item: {itemClaimed.name}</h3>
      <h3>Please get in contact with {user.name}</h3>
      <p>email address: {user.email}</p>
      <img className="item-img" src={String(itemClaimed.image)} alt="items" />
    </>
  )
}
