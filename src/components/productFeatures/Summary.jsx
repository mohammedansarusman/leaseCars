import React from 'react'
import { SummaryPriceDuration } from './SummaryPriceDuration'

export const Summary = () => {
  return (
    <div className="w-full bg-gray-200 h-20 bottom-0 fixed md:hidden">
        <SummaryPriceDuration />
    </div>
  )
}
