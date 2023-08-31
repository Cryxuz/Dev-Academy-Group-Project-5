//route for this will be '/claimitem'
// display contact details for seller
// display item claimed

export default function ClaimItem() {
  const user = {
    name: 'User 1',
    id: 3,
    email: '123@mail.com',
  }

  const itemClaimed = {
    name: 'item 3',
    id: 3,
  }

  return (
    <>
      <h2>Congratulations on your claim!</h2>
      <h3>Claimed Item: {itemClaimed.name}</h3>
      <h3>Please get in contact with {user.name}</h3>
      <p>email address: {user.email}</p>
    </>
  )
}
