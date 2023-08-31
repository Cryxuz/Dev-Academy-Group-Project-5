import useQuery from '@tanstack/react-query'
import Link from 'react-router-dom'
// import getAllItems //

export default function ItemList() {
  // const {
  //   data: something,
  //   error,
  //   isLoading,
  // } = useQuery(['items'], () => getAllItems())
  const items = [
    {
      id: 7,
      name: 'free thing',
      canBeTraded: 'true',
    },
    {
      id: 2,
      name: 'free thing 2',
      canBeTraded: 'true',
    },
    {
      id: 14,
      name: 'free thing 14',
      canBeTraded: 'true',
    },
  ]

  return (
    <>
      <h2>All Items Available</h2>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.name}
            <button id="would-like">Claim This</button>
            <button id="would-not-like">No Thank You</button>
          </li>
        ))}
      </ul>
    </>
  )
}

// y/n box
//<Link to={`/${i.id}/itemdetails`}</Link>
//
