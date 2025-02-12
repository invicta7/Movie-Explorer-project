import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterLinks = ({linkName}) => {
  return (
    <NavLink className='w-fit flex justify-center items-center gap-2 capitalize hover:underline'>
      {linkName}

      <svg width="8" height="19" viewBox="0 0 8 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1'>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.47239 8.94757C7.72009 9.25267 7.72009 9.74733 7.47239 10.0524L1.12965 17.8649C0.88195 18.17 0.480349 18.17 0.23265 17.8649C-0.01505 17.5598 -0.01505 17.0652 0.23265 16.7601L6.12689 9.5L0.23265 2.23993C-0.0150494 1.93483 -0.0150494 1.44017 0.23265 1.13507C0.48035 0.829976 0.88195 0.829976 1.12965 1.13507L7.47239 8.94757Z" fill="#EBFAFF"/>
      </svg>

    </NavLink>
  )
}

export default FooterLinks;