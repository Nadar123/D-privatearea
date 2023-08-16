import React from 'react'

function PaymentTarget() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <clipPath id='alvqfvpvqa'>
          <path d='M1366 0v3310H0V0h1366z' />
        </clipPath>
        <clipPath id='icbn6dmk5b'>
          <path d='M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0z' />
        </clipPath>
        <clipPath id='zhwgpkjnld'>
          <path d='M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0z' />
        </clipPath>
        <filter id='ocm794wk7c' x='-70%' y='-60%' filterUnits='userSpaceOnUse' width='200%' height='200%'>
          <feGaussianBlur stdDeviation='2' in='SourceAlpha' result='i3' />
          <feOffset dy='2' in='i3' result='i4' />
          <feColorMatrix
            values='0 0 0 0.0 0 0 0 0 0.3254901960784314 0 0 0 0 0.6392156862745098 0 0 0 0 0.24 0'
            in='i4'
          />
        </filter>
      </defs>
      <g clipPath='url(#alvqfvpvqa)' transform='translate(-917 -1718)'>
        <g clipPath='url(#icbn6dmk5b)' transform='translate(917 1718)'>
          <path fill='#FFF' d='M0 0h24v24H0V0z' />
          <path
            d='M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0z'
            stroke='#0053A3'
            strokeWidth='4'
            fill='none'
            strokeMiterlimit='5'
          />
        </g>
        <path d='M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0z' filter='url(#ocm794wk7c)' transform='translate(923 1724)' />
        <g clipPath='url(#zhwgpkjnld)' transform='translate(923 1724)'>
          <path fill='#0053A3' d='M0 0h12v12H0V0z' />
        </g>
      </g>
    </svg>
  )
}

export default PaymentTarget
