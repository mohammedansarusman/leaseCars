import { Search,X } from 'lucide-react'
import React from 'react'

export const SearchBar = () => {
  return (
    <div className='w-[80%] h-15 rounded-lg ml-2 flex items-center outline-1 outline-gray-300 focus:outline-1'>
        <section className='w-1/10 h-full flex items-center justify-center'>
            <Search />  
        </section>
        <section className='w-8/10 h-full'>

        </section>
        <section className='w-1/10 h-full flex items-center justify-center'>
            <X />
        </section>
    </div>
  )
}
