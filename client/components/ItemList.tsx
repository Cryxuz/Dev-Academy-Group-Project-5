import useQuery from '@tanstack/react-query'
// import getAllItems //

export default function itemList() {
  const {
    data: something,
    error,
    isLoading,
  } = useQuery(['items'], () => getAllItems())

  return (
    <>
      <h2>All Items Available</h2>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.name}{' '}
            <Link to={''}>
              <button>view more</button>
            </Link>
          </li>
        ))}
        <button id="would-like">Claim This Item</button>
        <button id="would-not-like">Claim This Item</button>
      </ul>
    </>
  )
}

// y/n box
//
