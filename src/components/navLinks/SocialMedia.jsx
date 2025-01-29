import React from 'react'

export const SocialMedia = ({imageSrc, iconName}) => {
  return (
    <span>
      <img src={imageSrc} alt={iconName}/>
    </span>
  )
}
