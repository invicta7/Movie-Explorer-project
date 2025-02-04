import React, { useState } from 'react'


const Genre = ({genre}) => {
  const [selected, setSelected] = useState(false)

  const handleSelect = () => {
    setSelected(selected => !selected)
  }
  

  return (
    <button onClick={handleSelect} className={`px-5 py-2 rounded-3xl border-solid border-[1px] cursor-pointer capitalize border-[#EC5BAA] ${selected? 'bg-[#EC5BAA]' : 'bg-transparent'} `}>{genre}</button>
  )
}

export default Genre;