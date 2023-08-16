import React from 'react'

function ProfileHover() {
  return (
    <svg width='32' height='32' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <mask id='mask0_346_6226' maskUnits='userSpaceOnUse' x='4' y='4' width='32' height='32'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M20 4C28.8366 4 36 11.1634 36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0_346_6226)'>
        <path d='M4 4H36V36H4V4Z' fill='white' />
      </g>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z'
        stroke='#2F2621'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14 29V27C14 24.7909 15.7909 23 18 23H22C24.2091 23 26 24.7909 26 27V29'
        stroke='#2F2621'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect opacity='0.2' width='40' height='40' rx='20' fill='#83D0D6' />
    </svg>
  )
}

export default ProfileHover
