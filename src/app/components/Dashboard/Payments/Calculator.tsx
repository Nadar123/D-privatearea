import React from 'react'
/*styles*/
import { styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'
import { PaymentsCalculator } from '../../../constants/icons.constants'
import { StaticText } from '../../../constants/styled.components.constants'

const Calculator = () => {
  return (
    <>
      <ListItem>
        <ResultBox>
          <InfoLogo>
            <PaymentsCalculator />
          </InfoLogo>
          <StaticText> מחשבון משכנתא</StaticText>
        </ResultBox>
      </ListItem>
    </>
  )
}

export default Calculator

const ListItem = styled('li')({
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0.5rem',
  borderRight: `1px solid ${Colors.gray}`,
  width: '16%',
  minHeight: '50px',
  [theme.breakpoints.down('xl')]: {
    padding: '10px 5px',
    minHeight: '83px',
    alignItems: 'center'
  },
  [theme.breakpoints.down('lg')]: {
    borderLeft: `1px solid ${Colors.gray}`
  },
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    borderBottom: 'none',
    padding: '1rem',
    width: '25%',
    justifyContent: 'flex-start'
  }
})
const ResultBox = styled('div')({
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    width: '20%',
    padding: '2rem 0 1rem 0'
  }
})
const InfoLogo = styled('span')({
  display: 'flex'
})
