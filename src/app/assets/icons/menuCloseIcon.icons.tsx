import React from 'react'
import { styled } from '@mui/material/styles'

const Wrapper = styled('div')`
  margin-right: 30px;
`

const MenuCloseIcon = () => (
  <Wrapper>
    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g fill='none' fillRule='evenodd'>
        <path d='M0 0h24v24H0z' />
        <path
          d='M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z'
          fill='#FFF'
          fillRule='nonzero'
        />
      </g>
    </svg>
  </Wrapper>
)

export default MenuCloseIcon
