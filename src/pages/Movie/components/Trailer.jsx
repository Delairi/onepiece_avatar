import React from 'react'

const Trailer = (movie) => {
  return (
    <div className='relative'>
        <button
        className='absolute top-1/2 left-1/2 text-[white] bg-[black] rounded-full transform -translate-x-1/2 -translate-y-1/2 p-2'
        >play</button>
        <img 
        src={movie.trailer.images.large_image_url} />
       {/* <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${movie.trailer.youtube_id}`}
    /> */}

    </div>
  )
}

export default Trailer
