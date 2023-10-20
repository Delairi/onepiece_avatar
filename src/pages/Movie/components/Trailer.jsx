import React from 'react'

const Trailer = (movie) => {
  if(!movie.trailer.youtube_id) return null
  return (
    <div className="flex flex-col w-full justify-center items-center">
          <h3 className="text-3xl underline">Trailer</h3>
    <div className='relative'>
        <button
        className='absolute top-1/2 left-1/2 text-[white] bg-[black] rounded-full transform -translate-x-1/2 -translate-y-1/2 p-2'
        >play</button>
        <img 
        src={movie.trailer.images.large_image_url} />
       

    </div>
    </div>
  )
}

export default Trailer
