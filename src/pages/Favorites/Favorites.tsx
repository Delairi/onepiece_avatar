import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Favorites = () => {

    const {data, loading, error} = useSelector((state: any) => state.preference)

    if(loading) return (<div>Loading...</div>)
    if(error) return (<div>Error...</div>)

  return (
    <div className='p-2 flex flex-row flex-wrap items-start'>
      {
       data !== null && data.favorites.length > 0 && data.favorites.map((item) => {
            return <div key={item.mal_id} className='w-1/4 h-[200px] flex flex-col gap-2  items-center justify-center'>
                    <h2 className='text-xl font-bold'>{item.title}</h2>
                    <img 
                    className='w-1/2 h-1/2'
                    src={item.image} alt={item.title} />
                    <Link to={`/movie/${item.mal_id}`}>View</Link>
                </div>
        })
      }
    </div>
  )
}

export default Favorites
