import * as React from 'react'
/*styles*/
import { styled } from '@mui/material'
import { theme } from '../../../constants/theme.constants'
import { Colors } from '../../../constants/styles.constants'
/*components*/
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { PaymentsText, PaymentsTextNumber } from '../../../constants/styled.components.constants'

type CIrcularProgresProps = {
  percentage: number | string | any
  amountPaid?: any | null | undefined
}

const CircularProgress = ({ amountPaid, percentage }: CIrcularProgresProps) => {
  return (
    <>
      <ListItem style={{ position: 'relative' }}>
        <CircularProgressbarWrapper style={{ position: 'relative' }}>
          <CircularProgressInner>
            <CircularProgressbar
              value={percentage}
              styles={{
                path: {
                  transformOrigin: 'center center',
                  stroke: Colors.oragne,
                  position: 'relative'
                },
                text: {
                  fontSize: 22,
                  fontWeight: 800,
                  animation: 'fadein 2s',
                  fill: Colors.black
                }
              }}
            />
            <ProgressbarTextWrapper className='progressbar-mobile-view'>
              <PaymentsText> עלות רכישה</PaymentsText>
              <PaymentsTextNumber> {parseFloat(amountPaid).toLocaleString()} ₪</PaymentsTextNumber>
            </ProgressbarTextWrapper>
          </CircularProgressInner>
        </CircularProgressbarWrapper>
      </ListItem>
    </>
  )
}

export default CircularProgress
const CircularProgressbarWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  padding: '0 1rem',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    width: '100%',
    margin: 'auto',
    padding: '0rem'
  },
  '& .CircularProgressbar': {
    '& .CircularProgressbar-trail': {
      stroke: Colors.white
    }
  }
})
const CircularProgressInner = styled('div')({
  position: 'relative',
  width: '100%',
  margin: 'auto',
  [theme.breakpoints.down('xl')]: {
    width: '100%'
  },
  [theme.breakpoints.down('md')]: {
    width: '75%'
  }
})

const ListItem = styled('li')({
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem 0.5rem',
  width: '20%',
  [theme.breakpoints.down('xl')]: {
    width: '25%',
    padding: '0px'
  },
  [theme.breakpoints.down('lg')]: {
    margin: 'auto'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '1rem',
    justifyContent: 'center'
  }
})
const ProgressbarTextWrapper = styled('div')({
  position: 'absolute',
  top: '10%',
  left: '0',
  right: '0',
  margin: 'auto',
  transform: 'translate(-20%, 100%)',
  textAlign: 'right',
  width: '60%',
  [theme.breakpoints.down('xl')]: {
    top: '5%'
  },
  [theme.breakpoints.down('lg')]: {
    top: '5%',
    width: '80%',
    left: '-35px'
  },
  [theme.breakpoints.down('md')]: {
    top: '10%',
    left: '-9vw'
  }
})
