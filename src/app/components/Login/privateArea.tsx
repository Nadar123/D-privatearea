import React from 'react'
/*components*/
import Box from '@mui/material/Box'
/*styles*/
import { theme } from '../../constants/theme.constants'
import { styled } from '@mui/material'
import { Colors } from '../../constants/styles.constants'
import LogicBox from './LogicBox'

const privateArea = () => {
  return (
    <FormEnterWrapper>
      <Box sx={{ borderBottom: 0, borderColor: 'divider', justifyContent: 'center' }}></Box>
      <LogicBox />
    </FormEnterWrapper>
  )
}

export default privateArea

const FormEnterWrapper = styled('div')({
  background: Colors.cardBackground,
  position: 'absolute',
  width: '635px',
  height: 'auto',
  minHeight: '680px',
  top: '8rem',
  right: '5rem',
  transform: 'translate(0px, 0px);',
  padding: '2rem',
  textAlign: 'center',
  zIndex: '10',
  borderRadius: '50px',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
  '.MuiTabs-flexContainer': {
    justifyContent: 'center'
  },
  'MuiFormControl-root-jGXnFt': {
    margin: '0 0 3rem 0'
  },
  'button.Mui-selected': {
    color: Colors.black,
    fontSize: 30,
    fontWeight: 600
  },
  '#outlined-basic-label': {
    right: '0px'
  },
  '#outlined-basic': {
    padding: '6px 10px 16px 10px',
    width: '311px'
  },
  '&:placeholder': {
    textAlign: 'right'
  },
  '& .tabs-main button.Mui-selected': {
    backgroundColor: '#9d9f8f !important',
    color: '#fff !important',
    '& > svg path': {
      stroke: Colors.white
    }
  },
  '& > svg path': {
    stroke: Colors.black
  },
  [theme.breakpoints.down('xl')]: {
    width: '550px',
    height: 'auto',
    top: '6rem',
    right: '5rem',
    padding: '1rem'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    position: 'unset',
    display: 'block',
    margin: '8rem 0 4rem 0',
    padding: '2rem 0'
  }
})
