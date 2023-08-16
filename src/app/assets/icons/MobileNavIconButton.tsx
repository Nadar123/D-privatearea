import React from 'react'
/*styles*/
import { styled } from '@mui/material'
import { theme } from '../../constants/theme.constants'

function NavIconButton({ openNav }: any) {
  return (
    <NavListItem onClick={openNav}>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
    </NavListItem>
  )
}

export default NavIconButton

const NavListItem = styled('button')({
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginLeft: '1rem',
  height: '16px',
  width: '1.4rem',
  backgroundColor: 'transparent',
  border: 'none',
  padding: '0',
  boxSizing: 'border-box',
  cursor: 'pointer',
  '&:focus': {
    outline: 'none'
  },
  '& .line': {
    width: '24px',
    height: '2px',
    backgroundColor: '#000'
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex'
  }
})
