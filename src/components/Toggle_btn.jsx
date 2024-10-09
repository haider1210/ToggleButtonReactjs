import React, { useState } from 'react'
import classNames from 'classnames'

const Toggle_btn = () => {
const [isSelected ,setIsSelected]=useState(true);
const toggle = () => setIsSelected(!isSelected)

  return (
    <div onClick={toggle} className={classNames('flex relative w-20 h-10 bg-gray-500 rounded-full transition-all duration-500' ,{
        'bg-teal-600':isSelected,})}>
       <span className={classNames('h-10 w-10 bg-white rounded-full transition-all duration-500 shadow-2xl',{
            'ml-10':isSelected,
       })} />
    </div>
  )
}

export default Toggle_btn
