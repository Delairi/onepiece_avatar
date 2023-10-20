import React from 'react'

const Error = ({error}) => {
  return (
    <div className='flex items-center justify-center w-full'>
        <p>{error}</p>
    </div>
  )
}

export default Error
