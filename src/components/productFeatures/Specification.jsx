import React from 'react'

export const Specification = ({specifications}) => {
  const {Doors, Seats, category, transimission_type, endgine_size} = specifications;
  return (
    <div className='w-[90%] bg-gray-100 h-20 rounded-md flex justify-center items-center gap-2 text-sm opacity-60'>
        <p>{`${Doors} Doors`}</p>
        <p className="h-5 w-0.5 bg-black"></p>
        <p>{`${Seats} Seats`}</p>
        <p className="h-5 w-0.5 bg-black"></p>
        <p>{category}</p>
        <p className="h-5 w-0.5 bg-black"></p>
        <p>{`${transimission_type}`}</p>
        <p className="h-5 w-0.5 bg-black"></p>
        <p>{endgine_size}</p>


    </div>
  )
}
