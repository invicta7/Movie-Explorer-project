import React, { useState } from 'react'


const Genre = ({genreName, handleGenreSelect, id}) => {
  const [selected, setSelected] = useState(false)

  const handleSelect = () => {
    setSelected(selected => !selected)
    handleGenreSelect(id)
  }
  

  return (
    <button onClick={handleSelect} className={`text-nowrap py-2 px-5 mr-4 last-child:mr-0 rounded-3xl border-solid border-[1px] cursor-pointer capitalize border-[#EC5BAA] ${selected? 'bg-[#EC5BAA]' : 'bg-transparent'} `}>{genreName}</button>
  )
}

export default Genre;